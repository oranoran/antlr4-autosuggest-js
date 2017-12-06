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
    } else if (lexerState.transitions.length === 0) { // at end of token
        this._suggestViaParserTransition(parserState, remainingText);
    } else {
        this._suggest('', lexerState, remainingText);
    }
    return this._suggestions;
};

TokenSuggester.prototype._toLexerState = function (parserState) {
    var lexerState = this._lexer.atn.states.find((x) => { return (x.stateNumber === parserState.stateNumber); });
    if (lexerState == null) {
        debug('No lexer state matches parser state ' + parserState + ', not suggesting completions.');
    }
    return lexerState;
};

TokenSuggester.prototype._suggest = function (completionSoFar, lexerState, remainingText) {
    if (this._visitedLexerStates.includes(lexerState.stateNumber)) {
        return; // avoid infinite loop and stack overflow
    }
    this._visitedLexerStates.push(lexerState.stateNumber);
    try {
        if (lexerState.transitions.length === 0 && completionSoFar.length > 0 && !this._suggestions.includes(completionSoFar)) {
            this._suggestions.push(completionSoFar);
            return;
        }
        lexerState.transitions.forEach((trans) => {
            this._suggestViaLexerTransition(completionSoFar, remainingText, trans);
        });
    } finally {
        this._visitedLexerStates.pop();
    }
};

TokenSuggester.prototype._suggestViaLexerTransition = function(completionSoFar, remainingText, trans) {
    if (trans.isEpsilon) {
        this._suggest(completionSoFar, trans.target, remainingText);
    } else if (trans.serializationType === 5) { // AtomTransition
        var transitionToken = this._getAddedTextFor(trans);
        if (transitionToken.startsWith(remainingText)) {
            this._suggestViaNonEpsilonLexerTransition(completionSoFar, remainingText, transitionToken, trans.target);
        }
    } else if (trans.serializationType === 7) { // SetTransition
        trans.label.intervals.forEach((interval) => {
            for (var codePoint = interval.start; codePoint <= interval.stop; ++codePoint) {
                var transitionToken = String.fromCodePoint(codePoint);
                if (transitionToken.startsWith(remainingText)) {
                    this._suggestViaNonEpsilonLexerTransition(completionSoFar, remainingText, transitionToken, trans.target);
                }
            }
        });
    }
};

TokenSuggester.prototype._suggestViaNonEpsilonLexerTransition = function(completionSoFar, remainingText, transitionToken, targetState) {
    var newTransitionToken = this._chopOffCommonStart(transitionToken, remainingText);
    var newRemainingText = this._chopOffCommonStart(remainingText, transitionToken);
    this._suggest(completionSoFar + newTransitionToken, targetState, newRemainingText);
};

TokenSuggester.prototype._suggestViaParserTransition = function(parserState, remainingText) {
    parserState.transitions.forEach((transition) => {
        if (transition.isEpsilon) {
            this._suggestViaParserTransition(transition.target, remainingText);
        }
        else if (transition.serializationType === 5) { // AtomTransition
            var lexerState = this._toLexerState(transition.target);
            this._suggest('', lexerState, remainingText);
        }
    });
};

TokenSuggester.prototype._chopOffCommonStart = function (remainingText, transitionToken) {
    var charsToChopOff = Math.min(transitionToken.length, remainingText.length);
    return remainingText.substr(charsToChopOff, remainingText.length - charsToChopOff);
};

TokenSuggester.prototype._getAddedTextFor = function (transition) {
    return String.fromCodePoint(transition.label);
};
exports.TokenSuggester = TokenSuggester;

