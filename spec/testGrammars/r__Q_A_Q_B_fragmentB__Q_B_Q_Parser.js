// Generated from /tmp/tmpnuIsIn/r__Q_A_Q_B_fragmentB__Q_B_Q_.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var r__Q_A_Q_B_fragmentB__Q_B_Q_Listener = require('./r__Q_A_Q_B_fragmentB__Q_B_Q_Listener').r__Q_A_Q_B_fragmentB__Q_B_Q_Listener;
var grammarFileName = "r__Q_A_Q_B_fragmentB__Q_B_Q_.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0004\b\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0002\u0002\u0003\u0002\u0002\u0002\u0002\u0006\u0002\u0004",
    "\u0003\u0002\u0002\u0002\u0004\u0005\u0007\u0003\u0002\u0002\u0005\u0006",
    "\u0007\u0004\u0002\u0002\u0006\u0003\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'A'" ];

var symbolicNames = [ null, null, "B" ];

var ruleNames =  [ "r" ];

function r__Q_A_Q_B_fragmentB__Q_B_Q_Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

r__Q_A_Q_B_fragmentB__Q_B_Q_Parser.prototype = Object.create(antlr4.Parser.prototype);
r__Q_A_Q_B_fragmentB__Q_B_Q_Parser.prototype.constructor = r__Q_A_Q_B_fragmentB__Q_B_Q_Parser;

Object.defineProperty(r__Q_A_Q_B_fragmentB__Q_B_Q_Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

r__Q_A_Q_B_fragmentB__Q_B_Q_Parser.EOF = antlr4.Token.EOF;
r__Q_A_Q_B_fragmentB__Q_B_Q_Parser.T__0 = 1;
r__Q_A_Q_B_fragmentB__Q_B_Q_Parser.B = 2;

r__Q_A_Q_B_fragmentB__Q_B_Q_Parser.RULE_r = 0;

function RContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = r__Q_A_Q_B_fragmentB__Q_B_Q_Parser.RULE_r;
    return this;
}

RContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RContext.prototype.constructor = RContext;

RContext.prototype.B = function() {
    return this.getToken(r__Q_A_Q_B_fragmentB__Q_B_Q_Parser.B, 0);
};

RContext.prototype.enterRule = function(listener) {
    if(listener instanceof r__Q_A_Q_B_fragmentB__Q_B_Q_Listener ) {
        listener.enterR(this);
	}
};

RContext.prototype.exitRule = function(listener) {
    if(listener instanceof r__Q_A_Q_B_fragmentB__Q_B_Q_Listener ) {
        listener.exitR(this);
	}
};




r__Q_A_Q_B_fragmentB__Q_B_Q_Parser.RContext = RContext;

r__Q_A_Q_B_fragmentB__Q_B_Q_Parser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, r__Q_A_Q_B_fragmentB__Q_B_Q_Parser.RULE_r);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(r__Q_A_Q_B_fragmentB__Q_B_Q_Parser.T__0);
        this.state = 3;
        this.match(r__Q_A_Q_B_fragmentB__Q_B_Q_Parser.B);
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


exports.r__Q_A_Q_B_fragmentB__Q_B_Q_Parser = r__Q_A_Q_B_fragmentB__Q_B_Q_Parser;
