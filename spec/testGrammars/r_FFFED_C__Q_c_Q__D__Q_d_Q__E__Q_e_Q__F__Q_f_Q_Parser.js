// jshint ignore: start
var antlr4 = require('antlr4/index');
var r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Listener = require('./r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Listener').r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Listener;
var grammarFileName = "r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0006\u000b\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0002\u0002\u0003",
    "\u0002\u0002\u0002\u0002\t\u0002\u0004\u0003\u0002\u0002\u0002\u0004",
    "\u0005\u0007\u0006\u0002\u0002\u0005\u0006\u0007\u0006\u0002\u0002\u0006",
    "\u0007\u0007\u0006\u0002\u0002\u0007\b\u0007\u0005\u0002\u0002\b\t\u0007",
    "\u0004\u0002\u0002\t\u0003\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'c'", "'d'", "'e'", "'f'" ];

var symbolicNames = [ null, "C", "D", "E", "F" ];

var ruleNames =  [ "r" ];

function r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.prototype = Object.create(antlr4.Parser.prototype);
r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.prototype.constructor = r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser;

Object.defineProperty(r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.EOF = antlr4.Token.EOF;
r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.C = 1;
r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.D = 2;
r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.E = 3;
r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.F = 4;

r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.RULE_r = 0;

function RContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.RULE_r;
    return this;
}

RContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RContext.prototype.constructor = RContext;

RContext.prototype.F = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.F);
    } else {
        return this.getToken(r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.F, i);
    }
};


RContext.prototype.E = function() {
    return this.getToken(r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.E, 0);
};

RContext.prototype.D = function() {
    return this.getToken(r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.D, 0);
};

RContext.prototype.enterRule = function(listener) {
    if(listener instanceof r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Listener ) {
        listener.enterR(this);
	}
};

RContext.prototype.exitRule = function(listener) {
    if(listener instanceof r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Listener ) {
        listener.exitR(this);
	}
};




r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.RContext = RContext;

r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.RULE_r);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.F);
        this.state = 3;
        this.match(r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.F);
        this.state = 4;
        this.match(r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.F);
        this.state = 5;
        this.match(r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.E);
        this.state = 6;
        this.match(r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser.D);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser = r_FFFED_C__Q_c_Q__D__Q_d_Q__E__Q_e_Q__F__Q_f_Q_Parser;
