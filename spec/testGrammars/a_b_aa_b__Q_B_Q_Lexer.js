// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0003\u0007\b\u0001\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002",
    "\u0002\u0002\u0003\u0003\u0003\u0003\u0002\u0002\u0002\u0006\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0003\u0005\u0003\u0002\u0002\u0002\u0005\u0006",
    "\u0007D\u0002\u0002\u0006\u0004\u0003\u0002\u0002\u0002\u0003\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function a_b_aa_b__Q_B_Q_Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

a_b_aa_b__Q_B_Q_Lexer.prototype = Object.create(antlr4.Lexer.prototype);
a_b_aa_b__Q_B_Q_Lexer.prototype.constructor = a_b_aa_b__Q_B_Q_Lexer;

a_b_aa_b__Q_B_Q_Lexer.EOF = antlr4.Token.EOF;
a_b_aa_b__Q_B_Q_Lexer.T__0 = 1;

a_b_aa_b__Q_B_Q_Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

a_b_aa_b__Q_B_Q_Lexer.prototype.modeNames = [ "DEFAULT_MODE" ];

a_b_aa_b__Q_B_Q_Lexer.prototype.literalNames = [ null, "'B'" ];

a_b_aa_b__Q_B_Q_Lexer.prototype.symbolicNames = [  ];

a_b_aa_b__Q_B_Q_Lexer.prototype.ruleNames = [ "T__0" ];

a_b_aa_b__Q_B_Q_Lexer.prototype.grammarFileName = "a_b_aa_b__Q_B_Q_.g4";



exports.a_b_aa_b__Q_B_Q_Lexer = a_b_aa_b__Q_B_Q_Lexer;

Object.defineProperty(a_b_aa_b__Q_B_Q_Lexer.prototype, "atn", {
	get : function() {
		return atn;
	}
});

