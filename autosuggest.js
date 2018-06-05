'use strict';
const antlr4 = require('antlr4');
const TokenSuggester = require('./tokensuggester');
const debug = require('debug')('autosuggest');
const constants = require('./antlr4Constants');

function AutoSuggestionsGenerator(lexerAndParserFactory, input) {
    this._lexerAndParserFactory = lexerAndParserFactory;
    this._input = input;
    this._inputTokens = [];
    this._untokenizedText = '';
    this._parserAtn = null;
    this._parserRuleNames = [];
    this._indent = '';
    this._collectedSuggestions = [];
    this._casePreference = 'BOTH';
    this._parserStateToTokenListIndexWhereLastVisited = new Map();

    return this;
}

const transToStr = function (trans) {
    return '' + trans.constructor.name + '->' + trans.target;
};

AutoSuggestionsGenerator.prototype.constructor = AutoSuggestionsGenerator;

AutoSuggestionsGenerator.prototype.suggest = function () {
    this._tokenizeInput();
    this._storeParserAtnAndRuleNames();
    this._runParserAtnAndCollectSuggestions();
    return this._collectedSuggestions;
};

AutoSuggestionsGenerator.prototype.setCasePreference = function(casePreference) {
    this._casePreference = casePreference;
};

AutoSuggestionsGenerator.prototype._tokenizeInput = function () {
    const lexer = this._createLexerWithUntokenizedTextDetection();
    const allTokens = lexer.getAllTokens(); // side effect: also fills this.untokenizedText
    this._inputTokens = this._filterOutNonDefaultChannels(allTokens);
    debug('TOKENS FOUND IN FIRST PASS:');
    for (let token of this._inputTokens) {
        debug('' + token);
    }
    debug('UNTOKENIZED: ' + this._untokenizedText);
};

AutoSuggestionsGenerator.prototype._filterOutNonDefaultChannels = function (tokens) {
    return tokens.filter((token) => token.channel === 0);
};

AutoSuggestionsGenerator.prototype._createLexerWithUntokenizedTextDetection = function () {
    const lexer = this._createDefaultLexer();
    lexer.removeErrorListeners();
    const self = this;
    const newErrorListener = Object.create(antlr4.error.ErrorListener);
    newErrorListener.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
        self._untokenizedText = self._input.substring(column);
    };
    lexer.addErrorListener(newErrorListener);
    return lexer;
};

AutoSuggestionsGenerator.prototype._createDefaultLexer = function () {
    return this._createLexer(this._input);
};

AutoSuggestionsGenerator.prototype._createLexer = function (lexerInput) {
    const inputStream = new antlr4.InputStream(lexerInput);
    const lexer = this._lexerAndParserFactory.createLexer(inputStream);
    return lexer;
};

AutoSuggestionsGenerator.prototype._storeParserAtnAndRuleNames = function () {
    const tokenStream = new antlr4.CommonTokenStream(this._createDefaultLexer());
    const parser = this._lexerAndParserFactory.createParser(tokenStream);
    debug('Parser rule names: ' + parser.ruleNames.join(', '));
    this._parserAtn = parser.atn;
    this._parserRuleNames = parser.ruleNames;
    
};

AutoSuggestionsGenerator.prototype._runParserAtnAndCollectSuggestions = function () {
    const initialState = this._parserAtn.states[0];
    this._parseAndCollectTokenSuggestions(initialState, 0);
};

AutoSuggestionsGenerator.prototype._parseAndCollectTokenSuggestions = function (parserState, tokenListIndex) {
    const prevIndent = this._indent;
    this._indent += '  ';
    if (this._didVisitParserStateOnThisTokenIndex(parserState, tokenListIndex)) {
        debug(this._indent + "State " + parserState + " had already been visited while processing token " +
                tokenListIndex + ", backtracking to avoid infinite loop.");
        return;
    }
    const previousTokenListIndexForThisState = this._setParserStateLastVisitedOnThisTokenIndex(parserState, tokenListIndex);
    try {
        debug(this._indent + 'State: ' + parserState + ' (type: ' + parserState.constructor.name + ')');
        // debug(indent + 'State available transitions: ' + transitionsStr(parserState));

        if (!this._haveMoreTokens(tokenListIndex)) { // stop condition for recursion
            this._suggestNextTokensForParserState(parserState);
            return;
        }
        for (let trans of parserState.transitions) {
            if (trans.isEpsilon) {
                this._handleEpsilonTransition(trans, tokenListIndex);
            } else if (trans.serializationType === constants.ATOM_TRANSITION) {
                this._handleAtomicTransition(trans, tokenListIndex);
            } else {
                this._handleSetTransition(trans, tokenListIndex);
            }
        }
    } finally {
        this._indent = prevIndent;
        this._setParserStateLastVisitedOnThisTokenIndex(parserState, previousTokenListIndexForThisState);
    }
};

AutoSuggestionsGenerator.prototype._didVisitParserStateOnThisTokenIndex = function(parserState, currentTokenListIndex) {
    const lastVisitedThisStateAtTokenListIndex = this._parserStateToTokenListIndexWhereLastVisited.get(parserState);
    return currentTokenListIndex === lastVisitedThisStateAtTokenListIndex;
};

AutoSuggestionsGenerator.prototype._setParserStateLastVisitedOnThisTokenIndex = function(parserState, tokenListIndex) {
    const previous = this._parserStateToTokenListIndexWhereLastVisited.get(parserState);
    if (typeof tokenListIndex === 'undefined') {
        this._parserStateToTokenListIndexWhereLastVisited.delete(parserState);
    } else {
        this._parserStateToTokenListIndexWhereLastVisited.set(parserState, tokenListIndex);
    }
    return previous;
};

AutoSuggestionsGenerator.prototype._haveMoreTokens = function (index) {
    return index < this._inputTokens.length;
};

AutoSuggestionsGenerator.prototype._handleEpsilonTransition = function (trans, tokenListIndex) {
    this._parseAndCollectTokenSuggestions(trans.target, tokenListIndex);
};

AutoSuggestionsGenerator.prototype._handleAtomicTransition = function (trans, tokenListIndex) {
    const nextToken = this._inputTokens.slice(tokenListIndex, tokenListIndex + 1)[0];
    const nextTokenType = nextToken.type;
    const nextTokenMatchesTransition = (trans.label.contains(nextTokenType));
    if (nextTokenMatchesTransition) {
        this._parseAndCollectTokenSuggestions(trans.target, tokenListIndex + 1);
    }
};

AutoSuggestionsGenerator.prototype._handleSetTransition = function (trans, tokenListIndex) {
    const nextToken = this._inputTokens.slice(tokenListIndex, tokenListIndex + 1)[0];
    const nextTokenType = nextToken.type;
    for (let interval of trans.label.intervals) {
        for (let transitionTokenType = interval.start; transitionTokenType <= interval.stop; ++transitionTokenType) {
            const nextTokenMatchesTransition = (transitionTokenType === nextTokenType);
            if (nextTokenMatchesTransition) {
                debug(this._indent + 'Token ' + nextToken + ' following transition: ' + transToStr(trans) + ' to ' + transitionTokenType);
                this._parseAndCollectTokenSuggestions(trans.target, tokenListIndex + 1);
            } else {
                debug(this._indent + 'Token ' + nextToken + ' NOT following transition: ' + transToStr(trans) + ' to ' + transitionTokenType);
            }
        }
    }
};

AutoSuggestionsGenerator.prototype._suggestNextTokensForParserState = function (parserState) {
    const transitionLabels = new Set();
    this._fillParserTransitionLabels(parserState, transitionLabels, new Set());
    const tokenSuggester = new TokenSuggester.TokenSuggester(this._createDefaultLexer(), this._casePreference);
    const suggestions = tokenSuggester.suggest(transitionLabels, this._untokenizedText);
    this._parseSuggestionsAndAddValidOnes(parserState, suggestions);
    // logger.debug(indent + 'WILL SUGGEST TOKENS FOR STATE: ' + parserState);
};

const toTransKey = function (src, trans) {
    return '' + src.stateNumber + '->(' + trans.serializationType + ') ' + trans.target.stateNumber;
};

AutoSuggestionsGenerator.prototype._fillParserTransitionLabels = function (parserState, result, visitedTransitions) {
    for (let trans of parserState.transitions) {
        const transKey = toTransKey(parserState, trans);
        if (visitedTransitions.has(transKey)) {
            debug(this._indent + 'Not following visited ' + transKey);
            return;
        }
        if (trans.isEpsilon) {
            visitedTransitions.add(transKey);
            try {
                this._fillParserTransitionLabels(trans.target, result, visitedTransitions);
            } finally {
                visitedTransitions.delete(transKey);
            }
        } else if (trans.serializationType === constants.ATOM_TRANSITION) {
            result.add(trans.label_);
        } else if (trans.serializationType === constants.SET_TRANSITION) {
            for (let interval of trans.label.intervals) {
                for (let i = interval.start; i < interval.stop; ++i) {
                    result.add(i);
                }
            }
        }
    }
};

AutoSuggestionsGenerator.prototype._parseSuggestionsAndAddValidOnes = function (parserState, suggestions) {
    for (let suggestion of suggestions) {
        const addedToken = this._getAddedToken(suggestion);
        if (this._isParseableWithAddedToken(parserState, addedToken, new Set())) {

            if (!this._collectedSuggestions.includes(suggestion)) {
                this._collectedSuggestions.push(suggestion);
            }
        } else {
            debug('DROPPING non-parseable suggestion: ' + suggestion);
        }
    }
};

AutoSuggestionsGenerator.prototype._getAddedToken = function (suggestedCompletion) {
    const completedText = this._input + suggestedCompletion;
    const completedTextLexer = this._createLexer(completedText);
    completedTextLexer.removeErrorListeners();
    const completedTextTokens = this._filterOutNonDefaultChannels(completedTextLexer.getAllTokens());
    if (completedTextTokens.length <= this._inputTokens.length) {
        return null; // Completion didn't yield whole token, could be just a token fragment
    }
    const newToken = completedTextTokens[completedTextTokens.length - 1];
    return newToken;
};

AutoSuggestionsGenerator.prototype._isParseableWithAddedToken = function (parserState, newToken, visitedTransitions) {
    if (newToken == null) {
        return false;
    }
    let parseable = false;
    for (let parserTransition of parserState.transitions) {
        if (parserTransition.isEpsilon) { // Recurse through any epsilon transitions
            const transKey = toTransKey(parserState, parserTransition);
            if (visitedTransitions.has(transKey)) {
                debug(this._indent + 'Not following visited ' + transKey);
                return;
            }
            visitedTransitions.add(transKey);
            try {
                if (this._isParseableWithAddedToken(parserTransition.target, newToken, visitedTransitions)) {
                    parseable = true;
                }
            } finally {
                visitedTransitions.delete(transKey);
            }
        } else if (parserTransition.serializationType === constants.ATOM_TRANSITION) {
            const transitionTokenType = parserTransition.label;
            if (transitionTokenType.first() === newToken.type) {
                parseable = true;
            }
        } else if (parserTransition.serializationType === constants.SET_TRANSITION) {
            for (let interval of parserTransition.label.intervals) {
                for (let transitionTokenType = interval.start; transitionTokenType <= interval.stop; ++transitionTokenType) {
                    if (transitionTokenType === newToken.type) {
                        parseable = true;
                    }
                }
            }
        } else {
            throw 'Unexpected: ' + transToStr(parserTransition);
        }
    }
    return parseable;
};


function AutoSuggester(lexerCtr, parserCtr, casePreference=null) {
    this._lexerCtr = lexerCtr;
    this._parserCtr = parserCtr;
    this._casePreference = casePreference;
    this._assertLexerHasAtn();
    return this;
}

AutoSuggester.prototype.constructor = AutoSuggester;

AutoSuggester.prototype.createLexer = function (input) {
    return new this._lexerCtr(input);
};
AutoSuggester.prototype.createParser = function (tokenStream) {
    return new this._parserCtr(tokenStream);
};
AutoSuggester.prototype.autosuggest = function(inputText) {
    const generator =  new AutoSuggestionsGenerator(this, inputText);
    debug("CASE_PREF : " + this._casePreference);
    if (this._casePreference) {
        generator.setCasePreference(this._casePreference);
    }
    return generator.suggest();
};

AutoSuggester.prototype._assertLexerHasAtn = function() {
    const lexer = new this._lexerCtr(null);
    if (typeof lexer.atn === 'undefined') {
        throw "Please use ANTLR4 version 4.7.1 or above.";
    }
    return lexer;
};

const autosuggester = function(lexerCtr, parserCtr, casePref=null) {
    return new AutoSuggester(lexerCtr, parserCtr, casePref);
};

module.exports.autosuggester = autosuggester;
