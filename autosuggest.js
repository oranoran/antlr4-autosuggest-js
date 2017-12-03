'use strict';
var antlr4 = require('antlr4');
var TokenSuggester = require('./TokenSuggester');

function AutoSuggester(lexerAndParserFactory, input) {
    this._lexerAndParserFactory = lexerAndParserFactory;
    this._input = input;
    this._inputTokens = [];
    this._untokenizedText = '';
    this._parserAtn = null;
    this._indent = '';
    this._collectedSuggestions = [];
    return this;
}

AutoSuggester.prototype.constructor = AutoSuggester;

AutoSuggester.prototype.suggest = function () {
    this._tokenizeInput();
    this._createParserAtn();
    this._runParserAtnAndCollectSuggestions();
    return this._collectedSuggestions;
};

AutoSuggester.prototype._tokenizeInput = function () {
    var lexer = this._createLexerWithUntokenizedTextDetection();
    this._inputTokens = lexer.getAllTokens(); // side effect: also fills this.untokenizedText
    console.log("TOKENS FOUND IN FIRST PASS:");
    this._inputTokens.forEach(token => { console.log('' + token); });
    console.log("UNTOKENIZED: " + this._untokenizedText);
}

AutoSuggester.prototype._createLexerWithUntokenizedTextDetection = function () {
    var lexer = this._createLexer();
    lexer.removeErrorListeners();
    var self = this;
    var newErrorListener = Object.create(antlr4.error.ErrorListener);
    newErrorListener.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
        self._untokenizedText = self._input.substring(column);
    }
    lexer.addErrorListener(newErrorListener);
    return lexer;

}

AutoSuggester.prototype._createLexer = function (lexerInput = this._input) {
    var inputStream = new antlr4.InputStream(lexerInput);
    var lexer = this._lexerAndParserFactory.createLexer(inputStream);
    return lexer;
}

AutoSuggester.prototype._createParserAtn = function () {
    var tokenStream = new antlr4.CommonTokenStream(this._createLexer());
    var parser = this._lexerAndParserFactory.createParser(tokenStream);
    console.log('Parser rule names: ' + parser.ruleNames.join(', '));
    this._parserAtn = parser.atn;
}

AutoSuggester.prototype._runParserAtnAndCollectSuggestions = function () {
    var initialState = this._parserAtn.states[0];
    this._parseAndCollectTokenSuggestions(initialState, 0);
}

AutoSuggester.prototype._parseAndCollectTokenSuggestions = function (parserState, tokenListIndex) {
    var prevIndent = this._indent;
    this._indent += '  ';
    try {
        console.log(this._indent + "State: " + parserState + " (type: " + parserState.constructor.name + ")");
        // console.log(indent + "State available transitions: " + transitionsStr(parserState));

        if (!this._haveMoreTokens(tokenListIndex)) { // stop condition for recursion
            this._suggestNextTokensForParserState(parserState);
            return;
        }
        parserState.transitions.forEach(trans => {
            if (trans.isEpsilon) {
                this._handleEpsilonTransition(trans, tokenListIndex);
            } else if (trans.serializationType === 5) { //antlr4.atn.Transition.ATOM) {
                this._handleAtomicTransition(trans, tokenListIndex);
            } else {
                // Maybe can also get SetTransition?
                throw new 'Unsupported parser transition: ' + toString(trans);
            }
        });
    } finally {
        this._indent = prevIndent;
    }

}

AutoSuggester.prototype._haveMoreTokens = function (index) {
    return index < this._inputTokens.length;
}

AutoSuggester.prototype._handleEpsilonTransition = function (trans, tokenListIndex) {
    this._parseAndCollectTokenSuggestions(trans.target, tokenListIndex);
}

AutoSuggester.prototype._handleAtomicTransition = function (trans, tokenListIndex) {
    var nextToken = this._inputTokens[tokenListIndex];
    var nextTokenType = this._inputTokens[tokenListIndex].type;
    var nextTokenMatchesTransition = (trans.label.contains(nextTokenType));
    if (nextTokenMatchesTransition) {
        this._parseAndCollectTokenSuggestions(trans.target, tokenListIndex + 1);
    }
}

AutoSuggester.prototype._suggestNextTokensForParserState = function (parserState) {
    var tokenSuggester = new TokenSuggester.TokenSuggester(this._createLexer());
    var suggestions = tokenSuggester.suggest(parserState, this._untokenizedText);
    this._parseSuggestionsAndAddValidOnes(parserState, suggestions);
    // logger.debug(indent + "WILL SUGGEST TOKENS FOR STATE: " + parserState);

}

AutoSuggester.prototype._parseSuggestionsAndAddValidOnes = function (parserState, suggestions) {
    suggestions.forEach(suggestion => {
        var addedToken = this._getAddedToken(suggestion);
        if (this._isParseableWithAddedToken(parserState, addedToken)) {

            if (!this._collectedSuggestions.includes(suggestion)) {
                this._collectedSuggestions.push(suggestion);
            }
        } else {
            console.log("DROPPING non-parseable suggestion: " + suggestion);
        }
    });
}

AutoSuggester.prototype._getAddedToken = function (suggestedCompletion) {
    var completedText = this._input + suggestedCompletion;
    var completedTextLexer = this._createLexer(completedText);
    completedTextLexer.removeErrorListeners();
    var completedTextTokens = completedTextLexer.getAllTokens();
    if (completedTextTokens.length <= this._inputTokens.length) {
        return null; // Completion didn't yield whole token, could be just a token fragment
    }
    var newToken = completedTextTokens[completedTextTokens.length - 1];
    return newToken;
}

AutoSuggester.prototype._isParseableWithAddedToken = function (parserState, newToken) {
    if (newToken == null) {
        return false;
    }
    var parseable = false;
    parserState.transitions.forEach(parserTransition => {
        if (parserTransition.isEpsilon) { // Recurse through any epsilon transitions
            if (this._isParseableWithAddedToken(parserTransition.target, newToken)) {
                parseable = true;
            }
        } else if (parserTransition.serializationType === 5) { //antlr4.atn.Transition.ATOM) {) {
            var transitionTokenType = parserTransition.label;
            if (transitionTokenType.first() === newToken.type) {
                parseable = true;
            }
        } else if (parserTransition.serializationType === 7) { //antlr4.atn.Transition.SET) {) {
            parserSetTransition.label.forEach(transitionTokenType => {
                if (transitionTokenType === newToken.type) {
                    parseable = true;
                }
            });
        } else {
            throw 'Unexpected: ' + transToStr(parserTransition);
        }
    });
    return parseable;
}

var transToStr = function (trans) {
    return '' + trans.constructor.name + '->' + trans.target;
}



exports.AutoSuggester = AutoSuggester;
