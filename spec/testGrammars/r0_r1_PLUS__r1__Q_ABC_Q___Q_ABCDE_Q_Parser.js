// Generated from /var/folders/jv/52zxxd013cq3x809rg3tqsnw0000gq/T/tmpm45cJC/r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Listener = require('./r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Listener').r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Listener;
var grammarFileName = "r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0004\u000e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0006\u0002\b\n\u0002\r\u0002\u000e\u0002\t\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0002\u0002\u0004\u0002\u0004\u0002\u0003\u0003\u0002\u0003",
    "\u0004\u0002\f\u0002\u0007\u0003\u0002\u0002\u0002\u0004\u000b\u0003",
    "\u0002\u0002\u0002\u0006\b\u0005\u0004\u0003\u0002\u0007\u0006\u0003",
    "\u0002\u0002\u0002\b\t\u0003\u0002\u0002\u0002\t\u0007\u0003\u0002\u0002",
    "\u0002\t\n\u0003\u0002\u0002\u0002\n\u0003\u0003\u0002\u0002\u0002\u000b",
    "\f\t\u0002\u0002\u0002\f\u0005\u0003\u0002\u0002\u0002\u0003\t"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'ABC'", "'ABCDE'" ];

var symbolicNames = [  ];

var ruleNames =  [ "r0", "r1" ];

function r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.prototype = Object.create(antlr4.Parser.prototype);
r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.prototype.constructor = r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser;

Object.defineProperty(r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.EOF = antlr4.Token.EOF;
r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.T__0 = 1;
r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.T__1 = 2;

r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.RULE_r0 = 0;
r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.RULE_r1 = 1;

function R0Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.RULE_r0;
    return this;
}

R0Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
R0Context.prototype.constructor = R0Context;

R0Context.prototype.r1 = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(R1Context);
    } else {
        return this.getTypedRuleContext(R1Context,i);
    }
};

R0Context.prototype.enterRule = function(listener) {
    if(listener instanceof r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Listener ) {
        listener.enterR0(this);
	}
};

R0Context.prototype.exitRule = function(listener) {
    if(listener instanceof r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Listener ) {
        listener.exitR0(this);
	}
};




r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.R0Context = R0Context;

r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.prototype.r0 = function() {

    var localctx = new R0Context(this, this._ctx, this.state);
    this.enterRule(localctx, 0, r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.RULE_r0);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 5; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 4;
            this.r1();
            this.state = 7; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.T__0 || _la===r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.T__1);
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
    this.ruleIndex = r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.RULE_r1;
    return this;
}

R1Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
R1Context.prototype.constructor = R1Context;


R1Context.prototype.enterRule = function(listener) {
    if(listener instanceof r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Listener ) {
        listener.enterR1(this);
	}
};

R1Context.prototype.exitRule = function(listener) {
    if(listener instanceof r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Listener ) {
        listener.exitR1(this);
	}
};




r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.R1Context = R1Context;

r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.prototype.r1 = function() {

    var localctx = new R1Context(this, this._ctx, this.state);
    this.enterRule(localctx, 2, r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.RULE_r1);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 9;
        _la = this._input.LA(1);
        if(!(_la===r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.T__0 || _la===r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser.T__1)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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


exports.r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser = r0_r1_PLUS__r1__Q_ABC_Q___Q_ABCDE_Q_Parser;
