'use strict';
var debug = require('debug')('tokensuggester');
var constants = require('./antlr4Constants');

function TokenSuggester(lexer, casePreference=null) {
    this._lexer = lexer;
    this._suggestions = [];
    this._visitedLexerStates = [];
    this._origPartialToken = '';
    this._casePreference = casePreference;
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

var _calcAllLabelChars = function(label) {
    var allLabelChars = [];
    for (var interval of label.intervals) {
        for (var codePoint = interval.start; codePoint < interval.stop; ++codePoint) {
            allLabelChars.push(String.fromCharCode(codePoint));
        }
    }
    return allLabelChars;
} ;

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
        var allLabelChars = _calcAllLabelChars(trans.label);
        trans.label.intervals.forEach((interval) => {
            for (var codePoint = interval.start; codePoint <= interval.stop; ++codePoint) {
                var ch = String.fromCodePoint(codePoint);
                var shouldIgnoreCase = this._shouldIgnoreThisCase(ch, allLabelChars);
                var newTokenChar = String.fromCodePoint(codePoint);
                if (!shouldIgnoreCase && (remainingText === '' || remainingText.startsWith(newTokenChar))) {
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

TokenSuggester.prototype._shouldIgnoreThisCase = function (transChar, allTransChars) {
    if (this._casePreference == null || this._casePreference === 'BOTH') {
        return false;
    }
    var upper = transChar.toUpperCase();
    var lower = transChar.toLowerCase();
    switch(this._casePreference) {
    case 'LOWER':
        return transChar===upper && allTransChars.includes(lower);
    case 'UPPER':
        return transChar===lower && allTransChars.includes(upper);
    default:
        return false;
    }
}

exports.TokenSuggester = TokenSuggester;
