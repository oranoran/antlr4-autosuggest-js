// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0006\u0013\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0002\u0002",
    "\u0006\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u0003\u0002\u0002",
    "\u0002\u0012\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0003\u000b\u0003\u0002\u0002\u0002\u0005\r\u0003\u0002",
    "\u0002\u0002\u0007\u000f\u0003\u0002\u0002\u0002\t\u0011\u0003\u0002",
    "\u0002\u0002\u000b\f\u0007e\u0002\u0002\f\u0004\u0003\u0002\u0002\u0002",
    "\r\u000e\u0007f\u0002\u0002\u000e\u0006\u0003\u0002\u0002\u0002\u000f",
    "\u0010\u0007g\u0002\u0002\u0010\b\u0003\u0002\u0002\u0002\u0011\u0012",
    "\u0007h\u0002\u0002\u0012\n\u0003\u0002\u0002\u0002\u0003\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer.prototype = Object.create(antlr4.Lexer.prototype);
r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer.prototype.constructor = r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer;

r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer.EOF = antlr4.Token.EOF;
r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer.C = 1;
r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer.D = 2;
r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer.E = 3;
r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer.F = 4;

r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer.prototype.modeNames = [ 
                                                                             "DEFAULT_MODE" ];

r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer.prototype.literalNames = [ 
                                                                                null, 
                                                                                "'c'", 
                                                                                "'d'", 
                                                                                "'e'", 
                                                                                "'f'" ];

r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer.prototype.symbolicNames = [ 
                                                                                 null, 
                                                                                 "C", 
                                                                                 "D", 
                                                                                 "E", 
                                                                                 "F" ];

r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer.prototype.ruleNames = [ 
                                                                             "C", 
                                                                             "D", 
                                                                             "E", 
                                                                             "F" ];

r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer.prototype.grammarFileName = "r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_.g4";



exports.r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer = r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer;

Object.defineProperty(r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Lexer.prototype, "atn", {
	get : function() {
		return atn;
	}
});

