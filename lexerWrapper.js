'use strict';
const antlr4 = require('antlr4');

function LexerWrapper(lexerFactory) {
    this._lexerFactory = lexerFactory;
    this._cachedLexer = null;
}

LexerWrapper.prototype.tokenizeNonDefaultChannel = function (input) {
    const result = this._tokenize(input);
    result.tokens = result.tokens.filter((token) => token.channel === 0);
    return result;
};

LexerWrapper.prototype.getEmptyTokenStream = function() {
    return new antlr4.CommonTokenStream(this._getCachedLexer());
};

LexerWrapper.prototype._tokenize = function (input) {
    const lexer = this._createLexer(input);
    lexer.removeErrorListeners();
    const result = {untokenizedText: ''};
    const newErrorListener = Object.create(antlr4.error.ErrorListener);
    newErrorListener.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
        result.untokenizedText = input.substring(column);
    };
    lexer.addErrorListener(newErrorListener);
    result.tokens = lexer.getAllTokens();
    return result;
};

LexerWrapper.prototype.findStateByRuleNumber = function (ruleNumber) {
    return this._getCachedLexer().atn.ruleToStartState.slice(ruleNumber, ruleNumber + 1)[0];
};

LexerWrapper.prototype._getCachedLexer = function () {
    if (this._cachedLexer === null) {
        this._cachedLexer = this._createEmptyLexer();
    }
    return this._cachedLexer;
};

LexerWrapper.prototype._createEmptyLexer = function (lexerInput) {
    return this._createLexer('');
};

LexerWrapper.prototype._createLexer = function (lexerInput) {
    const inputStream = new antlr4.InputStream(lexerInput);
    const lexer = this._lexerFactory.createLexer(inputStream);
    return lexer;
};

module.exports.LexerWrapper = LexerWrapper;

/*

    public String[] getRuleNames() {
        return getCachedLexer().getRuleNames();
    }
    public Vocabulary getVocabulary() {
        return getCachedLexer().getVocabulary();
    }
    
    private TokenizationResult tokenize(String input) {
        Lexer lexer = this.createLexer(input);
        lexer.removeErrorListeners();
        final TokenizationResult result = new TokenizationResult();
        ANTLRErrorListener newErrorListener = new BaseErrorListener() {
            @Override
            public void syntaxError(Recognizer<?, ?> recognizer, Object offendingSymbol, int line,
                    int charPositionInLine, String msg, RecognitionException e) throws ParseCancellationException {
                result.untokenizedText = input.substring(charPositionInLine); // intended side effect
            }
        };
        lexer.addErrorListener(newErrorListener);
        result.tokens = lexer.getAllTokens();
        return result;
    }

    private Lexer createLexer(CharStream input) {
        return this.lexerFactory.createLexer(input);
    }

    private Lexer createLexer(String lexerInput) {
        return this.createLexer(toCharStream(lexerInput));
    }

    private static CharStream toCharStream(String text) {
        CharStream inputStream;
        try {
            inputStream = CharStreams.fromReader(new StringReader(text));
        } catch (IOException e) {
            throw new IllegalStateException("Unexpected while reading input string", e);
        }
        return inputStream;
    }

}

*/