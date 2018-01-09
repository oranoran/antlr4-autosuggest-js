// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0005\u0011\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0003\u0003",
    "\u0005\u0004\u0007\u0005\u0003\u0002\u0003\u0004\u0002\u000b\u000b\"",
    "\"\u0002\u0010\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0003\t\u0003",
    "\u0002\u0002\u0002\u0005\u000b\u0003\u0002\u0002\u0002\u0007\r\u0003",
    "\u0002\u0002\u0002\t\n\u0007C\u0002\u0002\n\u0004\u0003\u0002\u0002",
    "\u0002\u000b\f\u0007D\u0002\u0002\f\u0006\u0003\u0002\u0002\u0002\r",
    "\u000e\t\u0002\u0002\u0002\u000e\u000f\u0003\u0002\u0002\u0002\u000f",
    "\u0010\b\u0004\u0002\u0002\u0010\b\u0003\u0002\u0002\u0002\u0003\u0002",
    "\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer.prototype = Object.create(antlr4.Lexer.prototype);
r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer.prototype.constructor = r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer;

r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer.EOF = antlr4.Token.EOF;
r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer.T__0 = 1;
r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer.T__1 = 2;
r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer.WS = 3;

r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer.prototype.literalNames = [ null, 
                                                                      "'A'", 
                                                                      "'B'" ];

r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer.prototype.symbolicNames = [ null, 
                                                                       null, 
                                                                       null, 
                                                                       "WS" ];

r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer.prototype.ruleNames = [ "T__0", 
                                                                   "T__1", 
                                                                   "WS" ];

r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer.prototype.grammarFileName = "r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skip.g4";



exports.r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer = r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer;

Object.defineProperty(r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipLexer.prototype, "atn", {
	get : function() {
		return atn;
	}
});

