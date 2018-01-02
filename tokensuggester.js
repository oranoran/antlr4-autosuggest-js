'use strict';
var debug = require('debug')('tokensuggester');
var constants = require('./antlr4Constants');

function TokenSuggester(lexer) {
    this._lexer = lexer;
    this._suggestions = [];
    this._visitedLexerStates = [];
    this._origPartialToken = '';
    return this;
}

TokenSuggester.prototype.constructor = TokenSuggester;

TokenSuggester.prototype.suggest = function (nextParserTransitionLabels, remainingText) {
    debug("Suggesting tokens for rule numbers: " + nextParserTransitionLabels);
    this._origPartialToken = remainingText;
    nextParserTransitionLabels.forEach(nextParserTransitionLabel => {
        var nextTokenRuleNumber = nextParserTransitionLabel - 1; // Count from 0 not from 1
        var lexerState = this._findLexerStateByRuleNumber(nextTokenRuleNumber);
        this._suggest('', lexerState, remainingText);
    });
    return this._suggestions;
};

TokenSuggester.prototype._findLexerStateByRuleNumber = function (ruleNumber) {
    return this._lexer.atn.ruleToStartState.slice(ruleNumber, ruleNumber + 1)[0];
};

TokenSuggester.prototype._suggest = function (tokenSoFar, lexerState, remainingText) {
    debug('SUGGEST: tokenSoFar=' + tokenSoFar + ' remainingText=' + remainingText + ' lexerState=' + lexerState);
    if (this._visitedLexerStates.includes(lexerState.stateNumber)) {
        return; // avoid infinite loop and stack overflow
    }
    this._visitedLexerStates.push(lexerState.stateNumber);
    try {
        var tokenNotEmpty = (tokenSoFar.length > 0);
        var noMoreCharactersInToken = (lexerState.transitions.length === 0);
        if (tokenNotEmpty && noMoreCharactersInToken) {
            this._addSuggestedToken(tokenSoFar);
        }
        lexerState.transitions.forEach((trans) => {
            this._suggestViaLexerTransition(tokenSoFar, remainingText, trans);
        });
    } finally {
        this._visitedLexerStates.pop();
    }
};

TokenSuggester.prototype._suggestViaLexerTransition = function (tokenSoFar, remainingText, trans) {
    if (trans.isEpsilon) {
        this._suggest(tokenSoFar, trans.target, remainingText);
    } else if (trans.serializationType === constants.ATOM_TRANSITION) {
        var newTokenChar = this._getAddedTextFor(trans);
        if (remainingText === '' || remainingText.startsWith(newTokenChar)) {
            debug("LEXER TOKEN: " + newTokenChar + " remaining=" + remainingText);
            this._suggestViaNonEpsilonLexerTransition(tokenSoFar, remainingText, newTokenChar, trans.target);
        } else {
            debug("NONMATCHING LEXER TOKEN: " + newTokenChar + " remaining=" + remainingText);
        }
    } else if (trans.serializationType === constants.SET_TRANSITION) {
        trans.label.intervals.forEach((interval) => {
            for (var codePoint = interval.start; codePoint <= interval.stop; ++codePoint) {
                var newTokenChar = String.fromCodePoint(codePoint);
                if (remainingText === '' || remainingText.startsWith(newTokenChar)) {
                    this._suggestViaNonEpsilonLexerTransition(tokenSoFar, remainingText, newTokenChar, trans.target);
                }
            }
        });
    }
};

TokenSuggester.prototype._suggestViaNonEpsilonLexerTransition = function (tokenSoFar, remainingText, newTokenChar, targetState) {
    var newRemainingText = (remainingText.length > 0) ? remainingText.substr(1) : '';
    this._suggest(tokenSoFar + newTokenChar, targetState, newRemainingText);
};

TokenSuggester.prototype._addSuggestedToken = function (tokenToAdd) {
    var justTheCompletionPart = this._chopOffCommonStart(tokenToAdd, this._origPartialToken);
    if (!this._suggestions.includes(justTheCompletionPart)) {
        debug("SUGGESTIONG: " + justTheCompletionPart);
        this._suggestions.push(justTheCompletionPart);
    }
};

TokenSuggester.prototype._chopOffCommonStart = function (a, b) {
    var charsToChopOff = Math.min(a.length, b.length);
    return a.substr(charsToChopOff, a.length - charsToChopOff);
};

TokenSuggester.prototype._getAddedTextFor = function (transition) {
    return String.fromCodePoint(transition.label);
};
exports.TokenSuggester = TokenSuggester;
