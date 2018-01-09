// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0005\u0011\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0003\u0003",
    "\u0005\u0004\u0007\u0005\u0003\u0002\u0002\u0002\u0010\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0003\t\u0003\u0002\u0002\u0002\u0005\u000b\u0003",
    "\u0002\u0002\u0002\u0007\r\u0003\u0002\u0002\u0002\t\n\u0007c\u0002",
    "\u0002\n\u0004\u0003\u0002\u0002\u0002\u000b\f\u0007d\u0002\u0002\f",
    "\u0006\u0003\u0002\u0002\u0002\r\u000e\u0007\"\u0002\u0002\u000e\u000f",
    "\u0003\u0002\u0002\u0002\u000f\u0010\b\u0004\u0002\u0002\u0010\b\u0003",
    "\u0002\u0002\u0002\u0003\u0002\u0003\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer.prototype = Object.create(antlr4.Lexer.prototype);
r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer.prototype.constructor = r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer;

r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer.EOF = antlr4.Token.EOF;
r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer.A = 1;
r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer.B = 2;
r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer.SP = 3;

r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer.prototype.modeNames = [ 
                                                                                               "DEFAULT_MODE" ];

r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer.prototype.literalNames = [ 
                                                                                                  null, 
                                                                                                  "'a'", 
                                                                                                  "'b'", 
                                                                                                  "' '" ];

r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer.prototype.symbolicNames = [ 
                                                                                                   null, 
                                                                                                   "A", 
                                                                                                   "B", 
                                                                                                   "SP" ];

r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer.prototype.ruleNames = [ 
                                                                                               "A", 
                                                                                               "B", 
                                                                                               "SP" ];

r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer.prototype.grammarFileName = "r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_.g4";



exports.r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer = r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer;

Object.defineProperty(r_AB_A__Q_a_Q__B__Q_b_Q__SP__Q__Q__ARRW_channel_LPAR_HIDDEN_RPAR_Lexer.prototype, "atn", {
	get : function() {
		return atn;
	}
});

