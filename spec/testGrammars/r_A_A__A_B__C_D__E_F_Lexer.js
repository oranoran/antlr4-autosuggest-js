// Generated from /tmp/tmpnuIsIn/r_A_A__A_B__C_D__E_F_.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0003\t\b\u0001\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0002\u0002\u0003\u0003\u0003\u0003\u0002\u0005\u0003",
    "\u0002CD\u0003\u0002EF\u0003\u0002GH\u0002\b\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0003\u0005\u0003\u0002\u0002\u0002\u0005\u0006\t\u0002",
    "\u0002\u0002\u0006\u0007\t\u0003\u0002\u0002\u0007\b\t\u0004\u0002\u0002",
    "\b\u0004\u0003\u0002\u0002\u0002\u0003\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function r_A_A__A_B__C_D__E_F_Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

r_A_A__A_B__C_D__E_F_Lexer.prototype = Object.create(antlr4.Lexer.prototype);
r_A_A__A_B__C_D__E_F_Lexer.prototype.constructor = r_A_A__A_B__C_D__E_F_Lexer;

r_A_A__A_B__C_D__E_F_Lexer.EOF = antlr4.Token.EOF;
r_A_A__A_B__C_D__E_F_Lexer.A = 1;

r_A_A__A_B__C_D__E_F_Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

r_A_A__A_B__C_D__E_F_Lexer.prototype.modeNames = [ "DEFAULT_MODE" ];

r_A_A__A_B__C_D__E_F_Lexer.prototype.literalNames = [  ];

r_A_A__A_B__C_D__E_F_Lexer.prototype.symbolicNames = [ null, "A" ];

r_A_A__A_B__C_D__E_F_Lexer.prototype.ruleNames = [ "A" ];

r_A_A__A_B__C_D__E_F_Lexer.prototype.grammarFileName = "r_A_A__A_B__C_D__E_F_.g4";



exports.r_A_A__A_B__C_D__E_F_Lexer = r_A_A__A_B__C_D__E_F_Lexer;

Object.defineProperty(r_A_A__A_B__C_D__E_F_Lexer.prototype, "atn", {
	get : function() {
		return atn;
	}
});

