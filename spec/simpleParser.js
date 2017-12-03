// Generated from simple.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var simpleListener = require('./simpleListener').simpleListener;
var grammarFileName = "simple.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0004\b\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0002\u0002\u0003\u0002\u0002\u0002\u0002\u0006\u0002\u0004",
    "\u0003\u0002\u0002\u0002\u0004\u0005\u0007\u0003\u0002\u0002\u0005\u0006",
    "\u0007\u0004\u0002\u0002\u0006\u0003\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'AB'", "'CD'" ];

var symbolicNames = [  ];

var ruleNames =  [ "the_field" ];

function simpleParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

simpleParser.prototype = Object.create(antlr4.Parser.prototype);
simpleParser.prototype.constructor = simpleParser;

Object.defineProperty(simpleParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

simpleParser.EOF = antlr4.Token.EOF;
simpleParser.T__0 = 1;
simpleParser.T__1 = 2;

simpleParser.RULE_the_field = 0;

function The_fieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = simpleParser.RULE_the_field;
    return this;
}

The_fieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
The_fieldContext.prototype.constructor = The_fieldContext;


The_fieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof simpleListener ) {
        listener.enterThe_field(this);
	}
};

The_fieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof simpleListener ) {
        listener.exitThe_field(this);
	}
};




simpleParser.The_fieldContext = The_fieldContext;

simpleParser.prototype.the_field = function() {

    var localctx = new The_fieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, simpleParser.RULE_the_field);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(simpleParser.T__0);
        this.state = 3;
        this.match(simpleParser.T__1);
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


exports.simpleParser = simpleParser;
