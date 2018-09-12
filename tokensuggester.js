'use strict';
const debug = require('debug')('tokensuggester');
const constants = require('./antlr4Constants');

function TokenSuggester(origPartialToken, lexerWrapper, casePreference=null) {
    this._origPartialToken = origPartialToken;
    this._lexerWrapper = lexerWrapper;
    this._suggestions = [];
    this._visitedLexerStates = [];
    this._casePreference = casePreference;
    return this;
}

TokenSuggester.prototype.constructor = TokenSuggester;

TokenSuggester.prototype.suggest = function (nextParserTransitionLabels) {
    debug("Suggesting tokens for rule numbers: " + Array.from(nextParserTransitionLabels).join(', '));
    for (let nextParserTransitionLabel of nextParserTransitionLabels) {
        const nextTokenRuleNumber = nextParserTransitionLabel - 1; // Count from 0 not from 1
        const lexerState = this._lexerWrapper.findStateByRuleNumber(nextTokenRuleNumber);
        this._suggest('', lexerState, this._origPartialToken);
    }
    return this._suggestions;
};

TokenSuggester.prototype._suggest = function (tokenSoFar, lexerState, remainingText) {
    debug('SUGGEST: tokenSoFar=' + tokenSoFar + ' remainingText=' + remainingText + ' lexerState=' + lexerState);
    if (this._visitedLexerStates.includes(lexerState.stateNumber)) {
        return; // avoid infinite loop and stack overflow
    }
    this._visitedLexerStates.push(lexerState.stateNumber);
    try {
        const tokenNotEmpty = (tokenSoFar.length > 0);
        const noMoreCharactersInToken = (lexerState.transitions.length === 0);
        if (tokenNotEmpty && noMoreCharactersInToken) {
            this._addSuggestedToken(tokenSoFar);
        }
        for (let trans of lexerState.transitions) {
            this._suggestViaLexerTransition(tokenSoFar, remainingText, trans);
        }
    } finally {
        this._visitedLexerStates.pop();
    }
};

const _calcAllLabelChars = function(label) {
    const allLabelChars = [];
    for (let interval of label.intervals) {
        for (let codePoint = interval.start; codePoint < interval.stop; ++codePoint) {
            allLabelChars.push(String.fromCharCode(codePoint));
        }
    }
    return allLabelChars;
};

TokenSuggester.prototype._suggestViaLexerTransition = function (tokenSoFar, remainingText, trans) {
    if (trans.isEpsilon) {
        this._suggest(tokenSoFar, trans.target, remainingText);
    } else if (trans.serializationType === constants.ATOM_TRANSITION) {
        const newTokenChar = this._getAddedTextFor(trans);
        if (remainingText === '' || remainingText.startsWith(newTokenChar)) {
            debug("LEXER TOKEN: " + newTokenChar + " remaining=" + remainingText);
            this._suggestViaNonEpsilonLexerTransition(tokenSoFar, remainingText, newTokenChar, trans.target);
        } else {
            debug("NONMATCHING LEXER TOKEN: " + newTokenChar + " remaining=" + remainingText);
        }
    } else if (trans.serializationType === constants.SET_TRANSITION) {
        const allLabelChars = _calcAllLabelChars(trans.label);
        for (let interval of trans.label.intervals) {
            for (let codePoint = interval.start; codePoint < interval.stop; ++codePoint) {
                const ch = String.fromCodePoint(codePoint);
                const shouldIgnoreCase = this._shouldIgnoreThisCase(ch, allLabelChars);
                const newTokenChar = String.fromCodePoint(codePoint);
                if (!shouldIgnoreCase && (remainingText === '' || remainingText.startsWith(newTokenChar))) {
                    this._suggestViaNonEpsilonLexerTransition(tokenSoFar, remainingText, newTokenChar, trans.target);
                }
            }
        }
    }
};

TokenSuggester.prototype._suggestViaNonEpsilonLexerTransition = function (tokenSoFar, remainingText, newTokenChar, targetState) {
    const newRemainingText = (remainingText.length > 0) ? remainingText.substr(1) : '';
    this._suggest(tokenSoFar + newTokenChar, targetState, newRemainingText);
};

TokenSuggester.prototype._addSuggestedToken = function (tokenToAdd) {
    const justTheCompletionPart = this._chopOffCommonStart(tokenToAdd, this._origPartialToken);
    if (!this._suggestions.includes(justTheCompletionPart)) {
        debug("SUGGESTING: " + justTheCompletionPart);
        this._suggestions.push(justTheCompletionPart);
    }
};

TokenSuggester.prototype._chopOffCommonStart = function (a, b) {
    const charsToChopOff = Math.min(a.length, b.length);
    return a.substr(charsToChopOff, a.length - charsToChopOff);
};

TokenSuggester.prototype._getAddedTextFor = function (transition) {
    return String.fromCodePoint(transition.label);
};

TokenSuggester.prototype._shouldIgnoreThisCase = function (transChar, allTransChars) {
    if (this._casePreference == null || this._casePreference === 'BOTH') {
        return false;
    }
    const upper = transChar.toUpperCase();
    const lower = transChar.toLowerCase();
    switch(this._casePreference) {
    case 'LOWER':
        return transChar===upper && allTransChars.includes(lower);
    case 'UPPER':
        return transChar===lower && allTransChars.includes(upper);
    default:
        return false;
    }
};

exports.TokenSuggester = TokenSuggester;
