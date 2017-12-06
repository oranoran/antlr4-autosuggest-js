// Generated from /tmp/tmpfvvHwt/r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0003\u000e\b\u0001\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002",
    "\u0007\u0002\b\n\u0002\f\u0002\u000e\u0002\u000b\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0002\u0002\u0003\u0003\u0003\u0003\u0002\u0002\u0002\u000e",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0003\u0005\u0003\u0002\u0002\u0002",
    "\u0005\t\u0007C\u0002\u0002\u0006\b\u0007D\u0002\u0002\u0007\u0006\u0003",
    "\u0002\u0002\u0002\b\u000b\u0003\u0002\u0002\u0002\t\u0007\u0003\u0002",
    "\u0002\u0002\t\n\u0003\u0002\u0002\u0002\n\f\u0003\u0002\u0002\u0002",
    "\u000b\t\u0003\u0002\u0002\u0002\f\r\u0007E\u0002\u0002\r\u0004\u0003",
    "\u0002\u0002\u0002\u0004\u0002\t\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_Lexer.prototype = Object.create(antlr4.Lexer.prototype);
r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_Lexer.prototype.constructor = r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_Lexer;

r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_Lexer.EOF = antlr4.Token.EOF;
r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_Lexer.A = 1;

r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_Lexer.prototype.modeNames = [ "DEFAULT_MODE" ];

r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_Lexer.prototype.literalNames = [  ];

r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_Lexer.prototype.symbolicNames = [ null, 
                                                                   "A" ];

r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_Lexer.prototype.ruleNames = [ "A" ];

r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_Lexer.prototype.grammarFileName = "r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_.g4";



exports.r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_Lexer = r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_Lexer;

Object.defineProperty(r_A_A__Q_A_Q__Q_B_Q__STAR__Q_C_Q_Lexer.prototype, "atn", {
	get : function() {
		return atn;
	}
});

