'use strict';

function TokenSuggester(lexer) {
    this._lexer = lexer;
    this._suggestions = [];
    this._visitedLexerStates = [];
    return this;
};

TokenSuggester.prototype.constructor = TokenSuggester;

TokenSuggester.prototype.suggest = function (parserState, remainingText) {
    var lexerState = this._toLexerState(parserState);
    if (lexerState == null) {
        return this._suggestions;
    } else if (lexerState.transitions.length == 0) {
        parserState.transitions.forEach(transition => {
            if (transition.serializationType === 5) { // AtomTransition
                lexerState = this._toLexerState(transition.target);
                suggest('', lexerState, remainingText);
            }
        });
    } else {
        suggest('', lexerState, remainingText);
    }
    return this._suggestions;
};

TokenSuggester.prototype._toLexerState = function(parserState) {
    var stateIndexInLexerAtn = this._lexer.atn.states.indexOf(parserState);
    if (stateIndexInLexerAtn < 0) {
        console.log('No lexer state matches parser state ' + parserState + ', not suggesting completions.');
        return null;
    }
    var lexerState = lexer.atn.states.get[stateIndexInLexerAtn];
    return lexerState;
}

TokenSuggester.prototype._suggest = function(completionSoFar, state, remainingText) {
    if (state.stateNumber in this._visitedLexerStates) {
        return; // avoid infinite loop and stack overflow
    }
    this._visitedLexerStates.add(state.stateNumber);
    try {
        if (state.transitions.length == 0 && completionSoFar.length() > 0) {
            suggestions.add(completionSoFar);
            return;
        }
        state.transitions.forEach(trans => {
            if (trans.isEpsilon) {
                this._suggest(completionSoFar, trans.target, remainingText);
            } else if (transition.serializationType === 5) { // AtomTransition
                    var transitionToken = this._getAddedTextFor(trans);
                if (transitionToken.startsWith(remainingText)) {
                    var newTransitionToken = this._chopOffCommonStart(transitionToken, remainingText);
                    var newRemainingText = this._chopOffCommonStart(remainingText, transitionToken);
                    suggest(completionSoFar + newTransitionToken, trans.target, newRemainingText);
                }
            }
        });
    } finally {
        visitedLexerStates.pop()
    }
}

TokenSuggester.prototype._chopOffCommonStart = function(remainingText, transitionToken) {
    var charsToChopOff = Math.min(transitionToken.length, remainingText.length);
    return remainingText.substring(charsToChopOff, remainingText-charsToChopOff);
}

TokenSuggester.prototype._getAddedTextFor = function(transition) {
    return String.fromCodePoint(transition.label);
}
exports.TokenSuggester = TokenSuggester;

