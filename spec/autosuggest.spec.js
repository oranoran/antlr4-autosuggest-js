var antlr4 = require('antlr4');
var autosuggest = require('../autosuggest');
var grammarFactories = require('./grammarFactories');
var simpleParser = require('./simpleParser');
var simpleLexer = require('./simpleLexer');


/*
grammar simple;
the_field: 'AB' 'CD';
*/


describe('Test Parser', function () {
    it('should be able to parse', function () {
        var input = 'ABCD';
        var chars = new antlr4.InputStream(input);
        var lexer = new simpleLexer.simpleLexer(chars);
        var tokens = new antlr4.CommonTokenStream(lexer);
        var parser = new simpleParser.simpleParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.the_field();
        expect(tree).toBeTruthy();
    });

});


describe('Autosuggest', function () {

    var factory;
    var suggester;

    var givenGrammar = function (name) {
        factory = grammarFactories.grammarFactories[name];
    };
    var whenInput = function (input) {
        suggester = new autosuggest.AutoSuggester(factory, input);
    };
    var thenExpect = function (expectedSuggestions) {
        expect(suggester.suggest().sort()).toEqual(expectedSuggestions.sort());
    };

    it('should return empty', function () {
        givenGrammar("simple");
        whenInput('ABCD');
        thenExpect([]);
    });

    it('should complete', function () {
        givenGrammar("simple");
        whenInput('AB');
        thenExpect(['CD']);
    });

});
