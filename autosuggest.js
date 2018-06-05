'use strict';
var antlr4 = require('antlr4');
var TokenSuggester = require('./tokensuggester');
var debug = require('debug')('autosuggest');
var constants = require('./antlr4Constants');

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
    return this;
}

var transToStr = function (trans) {
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
    var lexer = this._createLexerWithUntokenizedTextDetection();
    var allTokens = lexer.getAllTokens(); // side effect: also fills this.untokenizedText
    this._inputTokens = this._filterOutNonDefaultChannels(allTokens);
    debug('TOKENS FOUND IN FIRST PASS:');
    this._inputTokens.forEach((token) => { debug('' + token); });
    debug('UNTOKENIZED: ' + this._untokenizedText);
};

AutoSuggestionsGenerator.prototype._filterOutNonDefaultChannels = function (tokens) {
    return tokens.filter((token) => token.channel === 0);
};

AutoSuggestionsGenerator.prototype._createLexerWithUntokenizedTextDetection = function () {
    var lexer = this._createDefaultLexer();
    lexer.removeErrorListeners();
    var self = this;
    var newErrorListener = Object.create(antlr4.error.ErrorListener);
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
    var inputStream = new antlr4.InputStream(lexerInput);
    var lexer = this._lexerAndParserFactory.createLexer(inputStream);
    return lexer;
};

AutoSuggestionsGenerator.prototype._storeParserAtnAndRuleNames = function () {
    var tokenStream = new antlr4.CommonTokenStream(this._createDefaultLexer());
    var parser = this._lexerAndParserFactory.createParser(tokenStream);
    debug('Parser rule names: ' + parser.ruleNames.join(', '));
    this._parserAtn = parser.atn;
    this._parserRuleNames = parser.ruleNames;
    
};

AutoSuggestionsGenerator.prototype._runParserAtnAndCollectSuggestions = function () {
    var initialState = this._parserAtn.states[0];
    this._parseAndCollectTokenSuggestions(initialState, 0);
};

AutoSuggestionsGenerator.prototype._parseAndCollectTokenSuggestions = function (parserState, tokenListIndex) {
    var prevIndent = this._indent;
    this._indent += '  ';
    try {
        debug(this._indent + 'State: ' + parserState + ' (type: ' + parserState.constructor.name + ')');
        // debug(indent + 'State available transitions: ' + transitionsStr(parserState));

        if (!this._haveMoreTokens(tokenListIndex)) { // stop condition for recursion
            this._suggestNextTokensForParserState(parserState);
            return;
        }
        parserState.transitions.forEach((trans) => {
            if (trans.isEpsilon) {
                this._handleEpsilonTransition(trans, tokenListIndex);
            } else if (trans.serializationType === constants.ATOM_TRANSITION) {
                this._handleAtomicTransition(trans, tokenListIndex);
            } else {
                this._handleSetTransition(trans, tokenListIndex);
            }
        });
    } finally {
        this._indent = prevIndent;
    }
};

AutoSuggestionsGenerator.prototype._haveMoreTokens = function (index) {
    return index < this._inputTokens.length;
};

AutoSuggestionsGenerator.prototype._handleEpsilonTransition = function (trans, tokenListIndex) {
    this._parseAndCollectTokenSuggestions(trans.target, tokenListIndex);
};

AutoSuggestionsGenerator.prototype._handleAtomicTransition = function (trans, tokenListIndex) {
    var nextToken = this._inputTokens.slice(tokenListIndex, tokenListIndex + 1)[0];
    var nextTokenType = nextToken.type;
    var nextTokenMatchesTransition = (trans.label.contains(nextTokenType));
    if (nextTokenMatchesTransition) {
        this._parseAndCollectTokenSuggestions(trans.target, tokenListIndex + 1);
    }
};

AutoSuggestionsGenerator.prototype._handleSetTransition = function (trans, tokenListIndex) {
    var nextToken = this._inputTokens.slice(tokenListIndex, tokenListIndex + 1)[0];
    var nextTokenType = nextToken.type;
    trans.label.intervals.forEach((interval) => {
        for (var transitionTokenType = interval.start; transitionTokenType <= interval.stop; ++transitionTokenType) {
            var nextTokenMatchesTransition = (transitionTokenType === nextTokenType);
            if (nextTokenMatchesTransition) {
                debug(this._indent + 'Token ' + nextToken + ' following transition: ' + transToStr(trans) + ' to ' + transitionTokenType);
                this._parseAndCollectTokenSuggestions(trans.target, tokenListIndex + 1);
            } else {
                debug(this._indent + 'Token ' + nextToken + ' NOT following transition: ' + transToStr(trans) + ' to ' + transitionTokenType);
            }
        }
    });
};

AutoSuggestionsGenerator.prototype._suggestNextTokensForParserState = function (parserState) {
    var transitionLabels = new Set();
    this._fillParserTransitionLabels(parserState, transitionLabels, new Set());
    var tokenSuggester = new TokenSuggester.TokenSuggester(this._createDefaultLexer(), this._casePreference);
    var suggestions = tokenSuggester.suggest(transitionLabels, this._untokenizedText);
    this._parseSuggestionsAndAddValidOnes(parserState, suggestions);
    // logger.debug(indent + 'WILL SUGGEST TOKENS FOR STATE: ' + parserState);
};

var toTransKey = function (src, trans) {
    return '' + src.stateNumber + '->(' + trans.serializationType + ') ' + trans.target.stateNumber;
};

AutoSuggestionsGenerator.prototype._fillParserTransitionLabels = function (parserState, result, visitedTransitions) {
    parserState.transitions.forEach((trans) => {
        var transKey = toTransKey(parserState, trans);
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
            trans.label.intervals.forEach((interval) => {
                for (var i = interval.start; i < interval.stop; ++i) {
                    result.add(i);
                }
            });
        }
    });
};

AutoSuggestionsGenerator.prototype._parseSuggestionsAndAddValidOnes = function (parserState, suggestions) {
    suggestions.forEach((suggestion) => {
        var addedToken = this._getAddedToken(suggestion);
        if (this._isParseableWithAddedToken(parserState, addedToken, new Set())) {

            if (!this._collectedSuggestions.includes(suggestion)) {
                this._collectedSuggestions.push(suggestion);
            }
        } else {
            debug('DROPPING non-parseable suggestion: ' + suggestion);
        }
    });
};

AutoSuggestionsGenerator.prototype._getAddedToken = function (suggestedCompletion) {
    var completedText = this._input + suggestedCompletion;
    var completedTextLexer = this._createLexer(completedText);
    completedTextLexer.removeErrorListeners();
    var completedTextTokens = this._filterOutNonDefaultChannels(completedTextLexer.getAllTokens());
    if (completedTextTokens.length <= this._inputTokens.length) {
        return null; // Completion didn't yield whole token, could be just a token fragment
    }
    var newToken = completedTextTokens[completedTextTokens.length - 1];
    return newToken;
};

AutoSuggestionsGenerator.prototype._isParseableWithAddedToken = function (parserState, newToken, visitedTransitions) {
    if (newToken == null) {
        return false;
    }
    var parseable = false;
    parserState.transitions.forEach((parserTransition) => {
        if (parserTransition.isEpsilon) { // Recurse through any epsilon transitions
            var transKey = toTransKey(parserState, parserTransition);
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
            var transitionTokenType = parserTransition.label;
            if (transitionTokenType.first() === newToken.type) {
                parseable = true;
            }
        } else if (parserTransition.serializationType === constants.SET_TRANSITION) {
            parserTransition.label.intervals.forEach((interval) => {
                for (var transitionTokenType = interval.start; transitionTokenType <= interval.stop; ++transitionTokenType) {
                    if (transitionTokenType === newToken.type) {
                        parseable = true;
                    }
                }
            });
        } else {
            throw 'Unexpected: ' + transToStr(parserTransition);
        }
    });
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
    var generator =  new AutoSuggestionsGenerator(this, inputText);
    debug("CASE_PREF : " + this._casePreference);
    if (this._casePreference) {
        generator.setCasePreference(this._casePreference);
    }
    return generator.suggest();
};

AutoSuggester.prototype._assertLexerHasAtn = function() {
    var lexer = new this._lexerCtr(null);
    if (typeof lexer.atn === 'undefined') {
        throw "Please use ANTLR4 version 4.7.1 or above.";
    }
    return lexer;
};

var autosuggester = function(lexerCtr, parserCtr, casePref=null) {
    return new AutoSuggester(lexerCtr, parserCtr, casePref);
};

module.exports.autosuggester = autosuggester;
