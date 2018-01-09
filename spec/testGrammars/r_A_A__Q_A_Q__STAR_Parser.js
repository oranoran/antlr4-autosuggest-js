// jshint ignore: start
var antlr4 = require('antlr4/index');
var r_A_A__Q_A_Q__STAR_Listener = require('./r_A_A__Q_A_Q__STAR_Listener').r_A_A__Q_A_Q__STAR_Listener;
var grammarFileName = "r_A_A__Q_A_Q__STAR_.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0003\u0007\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0002\u0002\u0003\u0002\u0002\u0002\u0002\u0005\u0002\u0004\u0003",
    "\u0002\u0002\u0002\u0004\u0005\u0007\u0003\u0002\u0002\u0005\u0003\u0003",
    "\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "A" ];

var ruleNames =  [ "r" ];

function r_A_A__Q_A_Q__STAR_Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

r_A_A__Q_A_Q__STAR_Parser.prototype = Object.create(antlr4.Parser.prototype);
r_A_A__Q_A_Q__STAR_Parser.prototype.constructor = r_A_A__Q_A_Q__STAR_Parser;

Object.defineProperty(r_A_A__Q_A_Q__STAR_Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

r_A_A__Q_A_Q__STAR_Parser.EOF = antlr4.Token.EOF;
r_A_A__Q_A_Q__STAR_Parser.A = 1;

r_A_A__Q_A_Q__STAR_Parser.RULE_r = 0;

function RContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = r_A_A__Q_A_Q__STAR_Parser.RULE_r;
    return this;
}

RContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RContext.prototype.constructor = RContext;

RContext.prototype.A = function() {
    return this.getToken(r_A_A__Q_A_Q__STAR_Parser.A, 0);
};

RContext.prototype.enterRule = function(listener) {
    if(listener instanceof r_A_A__Q_A_Q__STAR_Listener ) {
        listener.enterR(this);
	}
};

RContext.prototype.exitRule = function(listener) {
    if(listener instanceof r_A_A__Q_A_Q__STAR_Listener ) {
        listener.exitR(this);
	}
};




r_A_A__Q_A_Q__STAR_Parser.RContext = RContext;

r_A_A__Q_A_Q__STAR_Parser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, r_A_A__Q_A_Q__STAR_Parser.RULE_r);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(r_A_A__Q_A_Q__STAR_Parser.A);
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


exports.r_A_A__Q_A_Q__STAR_Parser = r_A_A__Q_A_Q__STAR_Parser;
