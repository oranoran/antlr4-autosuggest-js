// Generated from /tmp/tmpnuIsIn/r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Listener = require('./r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Listener').r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Listener;
var grammarFileName = "r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_.g4";

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

var literalNames = [ null, "'AB'", "'CD'" ];

var symbolicNames = [  ];

var ruleNames =  [ "r0", "r1", "r2" ];

function r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.prototype = Object.create(antlr4.Parser.prototype);
r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.prototype.constructor = r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser;

Object.defineProperty(r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.EOF = antlr4.Token.EOF;
r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.T__0 = 1;
r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.T__1 = 2;

r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.RULE_r0 = 0;
r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.RULE_r1 = 1;
r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.RULE_r2 = 2;

function R0Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.RULE_r0;
    return this;
}

R0Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
R0Context.prototype.constructor = R0Context;

R0Context.prototype.r1 = function() {
    return this.getTypedRuleContext(R1Context,0);
};

R0Context.prototype.r2 = function() {
    return this.getTypedRuleContext(R2Context,0);
};

R0Context.prototype.enterRule = function(listener) {
    if(listener instanceof r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Listener ) {
        listener.enterR0(this);
	}
};

R0Context.prototype.exitRule = function(listener) {
    if(listener instanceof r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Listener ) {
        listener.exitR0(this);
	}
};




r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.R0Context = R0Context;

r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.prototype.r0 = function() {

    var localctx = new R0Context(this, this._ctx, this.state);
    this.enterRule(localctx, 0, r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.RULE_r0);
    try {
        this.state = 8;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 6;
            this.r1();
            break;
        case r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.T__1:
            this.enterOuterAlt(localctx, 2);
            this.state = 7;
            this.r2();
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

function R1Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.RULE_r1;
    return this;
}

R1Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
R1Context.prototype.constructor = R1Context;


R1Context.prototype.enterRule = function(listener) {
    if(listener instanceof r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Listener ) {
        listener.enterR1(this);
	}
};

R1Context.prototype.exitRule = function(listener) {
    if(listener instanceof r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Listener ) {
        listener.exitR1(this);
	}
};




r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.R1Context = R1Context;

r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.prototype.r1 = function() {

    var localctx = new R1Context(this, this._ctx, this.state);
    this.enterRule(localctx, 2, r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.RULE_r1);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.match(r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.T__0);
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

function R2Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.RULE_r2;
    return this;
}

R2Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
R2Context.prototype.constructor = R2Context;


R2Context.prototype.enterRule = function(listener) {
    if(listener instanceof r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Listener ) {
        listener.enterR2(this);
	}
};

R2Context.prototype.exitRule = function(listener) {
    if(listener instanceof r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Listener ) {
        listener.exitR2(this);
	}
};




r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.R2Context = R2Context;

r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.prototype.r2 = function() {

    var localctx = new R2Context(this, this._ctx, this.state);
    this.enterRule(localctx, 4, r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.RULE_r2);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.match(r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser.T__1);
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


exports.r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser = r0_r1_r2_r1__Q_AB_Q__r2__Q_CD_Q_Parser;
