var simpleParser = require('./simpleParser');
var simpleLexer = require('./simpleLexer');

var grammarFactories = {
    'simple': new class {
        constructor() { }
        createLexer(input) {
            return new simpleLexer.simpleLexer(input);
        }
        createParser(tokenStream) {
            return new simpleParser.simpleParser(tokenStream);
        }
    }()
};

exports.grammarFactories = grammarFactories;

