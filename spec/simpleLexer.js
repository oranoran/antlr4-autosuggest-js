// Generated from simple.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0004\r\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0002",
    "\u0002\u0004\u0003\u0003\u0005\u0004\u0003\u0002\u0002\u0002\f\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0003",
    "\u0007\u0003\u0002\u0002\u0002\u0005\n\u0003\u0002\u0002\u0002\u0007",
    "\b\u0007C\u0002\u0002\b\t\u0007D\u0002\u0002\t\u0004\u0003\u0002\u0002",
    "\u0002\n\u000b\u0007E\u0002\u0002\u000b\f\u0007F\u0002\u0002\f\u0006",
    "\u0003\u0002\u0002\u0002\u0003\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function simpleLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

simpleLexer.prototype = Object.create(antlr4.Lexer.prototype);
simpleLexer.prototype.constructor = simpleLexer;

Object.defineProperty(simpleLexer.prototype, "atn", { // TODO: this is not part of the original antlr4 runtime template!
	get : function() {
		return atn;
	}
});

simpleLexer.EOF = antlr4.Token.EOF;
simpleLexer.T__0 = 1;
simpleLexer.T__1 = 2;

simpleLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

simpleLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

simpleLexer.prototype.literalNames = [ null, "'AB'", "'CD'" ];

simpleLexer.prototype.symbolicNames = [  ];

simpleLexer.prototype.ruleNames = [ "T__0", "T__1" ];

simpleLexer.prototype.grammarFileName = "simple.g4";



exports.simpleLexer = simpleLexer;

