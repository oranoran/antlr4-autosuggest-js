// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0002\u0007\b\u0001\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002",
    "\u0002\u0002\u0003\u0003\u0002\u0003\u0002\u0003\u0003\u0002C\\\u0002",
    "\u0005\u0003\u0005\u0003\u0002\u0002\u0002\u0005\u0006\t\u0002\u0002",
    "\u0002\u0006\u0004\u0003\u0002\u0002\u0002\u0003\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function r_A_fragmentA__A_Z_Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

r_A_fragmentA__A_Z_Lexer.prototype = Object.create(antlr4.Lexer.prototype);
r_A_fragmentA__A_Z_Lexer.prototype.constructor = r_A_fragmentA__A_Z_Lexer;

r_A_fragmentA__A_Z_Lexer.EOF = antlr4.Token.EOF;

r_A_fragmentA__A_Z_Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

r_A_fragmentA__A_Z_Lexer.prototype.modeNames = [ "DEFAULT_MODE" ];

r_A_fragmentA__A_Z_Lexer.prototype.literalNames = [  ];

r_A_fragmentA__A_Z_Lexer.prototype.symbolicNames = [  ];

r_A_fragmentA__A_Z_Lexer.prototype.ruleNames = [ "A" ];

r_A_fragmentA__A_Z_Lexer.prototype.grammarFileName = "r_A_fragmentA__A_Z_.g4";



exports.r_A_fragmentA__A_Z_Lexer = r_A_fragmentA__A_Z_Lexer;

Object.defineProperty(r_A_fragmentA__A_Z_Lexer.prototype, "atn", {
	get : function() {
		return atn;
	}
});

