// jshint ignore: start
var antlr4 = require('antlr4/index');
var a_b_aa_b__Q_B_Q_Listener = require('./a_b_aa_b__Q_B_Q_Listener').a_b_aa_b__Q_B_Q_Listener;
var grammarFileName = "a_b_aa_b__Q_B_Q_.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0003\u0013\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002\f\n\u0002",
    "\f\u0002\u000e\u0002\u000f\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0002\u0003\u0002\u0004\u0002\u0004\u0002\u0002\u0002\u0011\u0002",
    "\u0006\u0003\u0002\u0002\u0002\u0004\u0010\u0003\u0002\u0002\u0002\u0006",
    "\u0007\b\u0002\u0001\u0002\u0007\b\u0005\u0004\u0003\u0002\b\r\u0003",
    "\u0002\u0002\u0002\t\n\f\u0003\u0002\u0002\n\f\u0005\u0002\u0002\u0004",
    "\u000b\t\u0003\u0002\u0002\u0002\f\u000f\u0003\u0002\u0002\u0002\r\u000b",
    "\u0003\u0002\u0002\u0002\r\u000e\u0003\u0002\u0002\u0002\u000e\u0003",
    "\u0003\u0002\u0002\u0002\u000f\r\u0003\u0002\u0002\u0002\u0010\u0011",
    "\u0007\u0003\u0002\u0002\u0011\u0005\u0003\u0002\u0002\u0002\u0003\r"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'B'" ];

var symbolicNames = [  ];

var ruleNames =  [ "a", "b" ];

function a_b_aa_b__Q_B_Q_Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

a_b_aa_b__Q_B_Q_Parser.prototype = Object.create(antlr4.Parser.prototype);
a_b_aa_b__Q_B_Q_Parser.prototype.constructor = a_b_aa_b__Q_B_Q_Parser;

Object.defineProperty(a_b_aa_b__Q_B_Q_Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

a_b_aa_b__Q_B_Q_Parser.EOF = antlr4.Token.EOF;
a_b_aa_b__Q_B_Q_Parser.T__0 = 1;

a_b_aa_b__Q_B_Q_Parser.RULE_a = 0;
a_b_aa_b__Q_B_Q_Parser.RULE_b = 1;

function AContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = a_b_aa_b__Q_B_Q_Parser.RULE_a;
    return this;
}

AContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AContext.prototype.constructor = AContext;

AContext.prototype.b = function() {
    return this.getTypedRuleContext(BContext,0);
};

AContext.prototype.a = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AContext);
    } else {
        return this.getTypedRuleContext(AContext,i);
    }
};

AContext.prototype.enterRule = function(listener) {
    if(listener instanceof a_b_aa_b__Q_B_Q_Listener ) {
        listener.enterA(this);
	}
};

AContext.prototype.exitRule = function(listener) {
    if(listener instanceof a_b_aa_b__Q_B_Q_Listener ) {
        listener.exitA(this);
	}
};



a_b_aa_b__Q_B_Q_Parser.prototype.a = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new AContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 0;
    this.enterRecursionRule(localctx, 0, a_b_aa_b__Q_B_Q_Parser.RULE_a, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 5;
        this.b();
        this._ctx.stop = this._input.LT(-1);
        this.state = 11;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, a_b_aa_b__Q_B_Q_Parser.RULE_a);
                this.state = 7;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 8;
                this.a(2); 
            }
            this.state = 13;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
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
    this.ruleIndex = a_b_aa_b__Q_B_Q_Parser.RULE_b;
    return this;
}

BContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BContext.prototype.constructor = BContext;


BContext.prototype.enterRule = function(listener) {
    if(listener instanceof a_b_aa_b__Q_B_Q_Listener ) {
        listener.enterB(this);
	}
};

BContext.prototype.exitRule = function(listener) {
    if(listener instanceof a_b_aa_b__Q_B_Q_Listener ) {
        listener.exitB(this);
	}
};




a_b_aa_b__Q_B_Q_Parser.BContext = BContext;

a_b_aa_b__Q_B_Q_Parser.prototype.b = function() {

    var localctx = new BContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, a_b_aa_b__Q_B_Q_Parser.RULE_b);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.match(a_b_aa_b__Q_B_Q_Parser.T__0);
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


a_b_aa_b__Q_B_Q_Parser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 0:
			return this.a_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

a_b_aa_b__Q_B_Q_Parser.prototype.a_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.a_b_aa_b__Q_B_Q_Parser = a_b_aa_b__Q_B_Q_Parser;
