// Generated from /tmp/tmpnuIsIn/r_a_b_a__Q_A_Q__b__Q_B_Q_.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var r_a_b_a__Q_A_Q__b__Q_B_Q_Listener = require('./r_a_b_a__Q_A_Q__b__Q_B_Q_Listener').r_a_b_a__Q_A_Q__b__Q_B_Q_Listener;
var grammarFileName = "r_a_b_a__Q_A_Q__b__Q_B_Q_.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0004\u0011\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0003\u0002\u0005\u0002\u000b\n\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0002",
    "\u0004\u0006\u0002\u0002\u0002\u000e\u0002\n\u0003\u0002\u0002\u0002",
    "\u0004\f\u0003\u0002\u0002\u0002\u0006\u000e\u0003\u0002\u0002\u0002",
    "\b\u000b\u0005\u0004\u0003\u0002\t\u000b\u0005\u0006\u0004\u0002\n\b",
    "\u0003\u0002\u0002\u0002\n\t\u0003\u0002\u0002\u0002\u000b\u0003\u0003",
    "\u0002\u0002\u0002\f\r\u0007\u0003\u0002\u0002\r\u0005\u0003\u0002\u0002",
    "\u0002\u000e\u000f\u0007\u0004\u0002\u0002\u000f\u0007\u0003\u0002\u0002",
    "\u0002\u0003\n"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'A'", "'B'" ];

var symbolicNames = [  ];

var ruleNames =  [ "r", "a", "b" ];

function r_a_b_a__Q_A_Q__b__Q_B_Q_Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.prototype = Object.create(antlr4.Parser.prototype);
r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.prototype.constructor = r_a_b_a__Q_A_Q__b__Q_B_Q_Parser;

Object.defineProperty(r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.EOF = antlr4.Token.EOF;
r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.T__0 = 1;
r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.T__1 = 2;

r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.RULE_r = 0;
r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.RULE_a = 1;
r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.RULE_b = 2;

function RContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.RULE_r;
    return this;
}

RContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RContext.prototype.constructor = RContext;

RContext.prototype.a = function() {
    return this.getTypedRuleContext(AContext,0);
};

RContext.prototype.b = function() {
    return this.getTypedRuleContext(BContext,0);
};

RContext.prototype.enterRule = function(listener) {
    if(listener instanceof r_a_b_a__Q_A_Q__b__Q_B_Q_Listener ) {
        listener.enterR(this);
	}
};

RContext.prototype.exitRule = function(listener) {
    if(listener instanceof r_a_b_a__Q_A_Q__b__Q_B_Q_Listener ) {
        listener.exitR(this);
	}
};




r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.RContext = RContext;

r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.RULE_r);
    try {
        this.state = 8;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 6;
            this.a();
            break;
        case r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.T__1:
            this.enterOuterAlt(localctx, 2);
            this.state = 7;
            this.b();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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

function AContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.RULE_a;
    return this;
}

AContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AContext.prototype.constructor = AContext;


AContext.prototype.enterRule = function(listener) {
    if(listener instanceof r_a_b_a__Q_A_Q__b__Q_B_Q_Listener ) {
        listener.enterA(this);
	}
};

AContext.prototype.exitRule = function(listener) {
    if(listener instanceof r_a_b_a__Q_A_Q__b__Q_B_Q_Listener ) {
        listener.exitA(this);
	}
};




r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.AContext = AContext;

r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.prototype.a = function() {

    var localctx = new AContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.RULE_a);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.match(r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.T__0);
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

function BContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.RULE_b;
    return this;
}

BContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BContext.prototype.constructor = BContext;


BContext.prototype.enterRule = function(listener) {
    if(listener instanceof r_a_b_a__Q_A_Q__b__Q_B_Q_Listener ) {
        listener.enterB(this);
	}
};

BContext.prototype.exitRule = function(listener) {
    if(listener instanceof r_a_b_a__Q_A_Q__b__Q_B_Q_Listener ) {
        listener.exitB(this);
	}
};




r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.BContext = BContext;

r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.prototype.b = function() {

    var localctx = new BContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.RULE_b);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.match(r_a_b_a__Q_A_Q__b__Q_B_Q_Parser.T__1);
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


exports.r_a_b_a__Q_A_Q__b__Q_B_Q_Parser = r_a_b_a__Q_A_Q__b__Q_B_Q_Parser;
