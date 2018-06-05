// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0004\u0012\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0002\u0002\u0004",
    "\u0003\u0003\u0005\u0004\u0003\u0002\u0002\u0002\u0011\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0003\u0007\u0003",
    "\u0002\u0002\u0002\u0005\u000e\u0003\u0002\u0002\u0002\u0007\b\u0007",
    "c\u0002\u0002\b\t\u0007e\u0002\u0002\t\n\u0007v\u0002\u0002\n\u000b",
    "\u0007k\u0002\u0002\u000b\f\u0007q\u0002\u0002\f\r\u0007p\u0002\u0002",
    "\r\u0004\u0003\u0002\u0002\u0002\u000e\u000f\u0007C\u0002\u0002\u000f",
    "\u0010\u0007P\u0002\u0002\u0010\u0011\u0007F\u0002\u0002\u0011\u0006",
    "\u0003\u0002\u0002\u0002\u0003\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer.prototype = Object.create(antlr4.Lexer.prototype);
clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer.prototype.constructor = clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer;

clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer.EOF = antlr4.Token.EOF;
clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer.T__0 = 1;
clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer.AND = 2;

clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer.prototype.modeNames = [ 
                                                                                             "DEFAULT_MODE" ];

clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer.prototype.literalNames = [ 
                                                                                                null, 
                                                                                                "'action'", 
                                                                                                "'AND'" ];

clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer.prototype.symbolicNames = [ 
                                                                                                 null, 
                                                                                                 null, 
                                                                                                 "AND" ];

clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer.prototype.ruleNames = [ 
                                                                                             "T__0", 
                                                                                             "AND" ];

clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer.prototype.grammarFileName = "clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_.g4";



exports.clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer = clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer;

Object.defineProperty(clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Lexer.prototype, "atn", {
	get : function() {
		return atn;
	}
});

