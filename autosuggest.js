'use strict';
var antlr4 = require('antlr4');

function AutoSuggester(lexerAndParserFactory, input) {
    this._lexerAndParserFactory = lexerAndParserFactory;
    this._input = input;
    this._inputTokens = [];
    this._untokenizedText = '';
    this._parserAtn = null;
    this._indent = '';
    return this;
}

AutoSuggester.prototype.constructor = AutoSuggester;

AutoSuggester.prototype.suggest = function () {
    this._tokenizeInput();
    this._createParserAtn();
    this._runParserAtnAndCollectSuggestions();
    return [];
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

AutoSuggester.prototype._createLexer = function () {
    var inputStream = new antlr4.InputStream(this._input);
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
    console.log("Parser initial state: " + initialState);
    this._parseAndCollectTokenSuggestions(initialState, 0);
}

AutoSuggester.prototype._parseAndCollectTokenSuggestions = function (initialState, tokenListIndex) {
    var prevIndent = this._indent;
    this._indent += '  ';
    try {

    } finally {
        this._indent = prevIndent;
    }

}
exports.AutoSuggester = AutoSuggester;
