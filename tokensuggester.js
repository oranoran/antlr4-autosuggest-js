'use strict';
var debug = require('debug')('tokensuggester');

function TokenSuggester(lexer) {
    this._lexer = lexer;
    this._suggestions = [];
    this._visitedLexerStates = [];
    return this;
}

TokenSuggester.prototype.constructor = TokenSuggester;

TokenSuggester.prototype.suggest = function (parserState, remainingText) {
    var lexerState = this._toLexerState(parserState);
    if (lexerState == null) {
        return this._suggestions;
    } else if (lexerState.transitions.length === 0) {
        parserState.transitions.forEach(function (transition) {
            if (transition.serializationType === 5) { // AtomTransition
                lexerState = this._toLexerState(transition.target);
                this._suggest('', lexerState, remainingText);
            }
        });
    } else {
        this._suggest('', lexerState, remainingText);
    }
    return this._suggestions;
};

TokenSuggester.prototype._toLexerState = function (parserState) {
    var lexerState = this._lexer.atn.states.find(function (x) { return (x.stateNumber === parserState.stateNumber); });
    if (lexerState == null) {
        debug('No lexer state matches parser state ' + parserState + ', not suggesting completions.');
    }
    return lexerState;
};

TokenSuggester.prototype._suggest = function (completionSoFar, state, remainingText) {
    if (state.stateNumber in this._visitedLexerStates) {
        return; // avoid infinite loop and stack overflow
    }
    this._visitedLexerStates.push(state.stateNumber);
    try {
        if (state.transitions.length === 0 && completionSoFar.length > 0 && !this._suggestions.includes(completionSoFar)) {
            this._suggestions.push(completionSoFar);
            return;
        }
        state.transitions.forEach(function (trans) {
            if (trans.isEpsilon) {
                this._suggest(completionSoFar, trans.target, remainingText);
            } else if (trans.serializationType === 5) { // AtomTransition
                var transitionToken = this._getAddedTextFor(trans);
                if (transitionToken.startsWith(remainingText)) {
                    var newTransitionToken = this._chopOffCommonStart(transitionToken, remainingText);
                    var newRemainingText = this._chopOffCommonStart(remainingText, transitionToken);
                    this._suggest(completionSoFar + newTransitionToken, trans.target, newRemainingText);
                }
            }
        });
    } finally {
        this._visitedLexerStates.pop();
    }
};

TokenSuggester.prototype._chopOffCommonStart = function (remainingText, transitionToken) {
    var charsToChopOff = Math.min(transitionToken.length, remainingText.length);
    return remainingText.substr(charsToChopOff, remainingText.length - charsToChopOff);
};

TokenSuggester.prototype._getAddedTextFor = function (transition) {
    return String.fromCodePoint(transition.label);
};
exports.TokenSuggester = TokenSuggester;

