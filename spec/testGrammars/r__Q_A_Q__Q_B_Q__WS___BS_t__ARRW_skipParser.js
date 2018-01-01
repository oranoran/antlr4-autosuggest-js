// Generated from /tmp/tmpnuIsIn/r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skip.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipListener = require('./r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipListener').r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipListener;
var grammarFileName = "r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skip.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0005\b\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0002\u0002\u0003\u0002\u0002\u0002\u0002\u0006\u0002\u0004",
    "\u0003\u0002\u0002\u0002\u0004\u0005\u0007\u0003\u0002\u0002\u0005\u0006",
    "\u0007\u0004\u0002\u0002\u0006\u0003\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'A'", "'B'" ];

var symbolicNames = [ null, null, null, "WS" ];

var ruleNames =  [ "r" ];

function r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser.prototype = Object.create(antlr4.Parser.prototype);
r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser.prototype.constructor = r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser;

Object.defineProperty(r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser.EOF = antlr4.Token.EOF;
r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser.T__0 = 1;
r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser.T__1 = 2;
r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser.WS = 3;

r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser.RULE_r = 0;

function RContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser.RULE_r;
    return this;
}

RContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RContext.prototype.constructor = RContext;


RContext.prototype.enterRule = function(listener) {
    if(listener instanceof r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipListener ) {
        listener.enterR(this);
	}
};

RContext.prototype.exitRule = function(listener) {
    if(listener instanceof r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipListener ) {
        listener.exitR(this);
	}
};




r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser.RContext = RContext;

r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser.RULE_r);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser.T__0);
        this.state = 3;
        this.match(r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser.T__1);
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


exports.r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser = r__Q_A_Q__Q_B_Q__WS___BS_t__ARRW_skipParser;
