// jshint ignore: start
var antlr4 = require('antlr4/index');
var clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Listener = require('./clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Listener').clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Listener;
var grammarFileName = "clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0004\u0014\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002",
    "\r\n\u0002\f\u0002\u000e\u0002\u0010\u000b\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0002\u0003\u0002\u0004\u0002\u0004\u0002\u0002\u0002\u0012",
    "\u0002\u0006\u0003\u0002\u0002\u0002\u0004\u0011\u0003\u0002\u0002\u0002",
    "\u0006\u0007\b\u0002\u0001\u0002\u0007\b\u0005\u0004\u0003\u0002\b\u000e",
    "\u0003\u0002\u0002\u0002\t\n\f\u0004\u0002\u0002\n\u000b\u0007\u0004",
    "\u0002\u0002\u000b\r\u0005\u0002\u0002\u0005\f\t\u0003\u0002\u0002\u0002",
    "\r\u0010\u0003\u0002\u0002\u0002\u000e\f\u0003\u0002\u0002\u0002\u000e",
    "\u000f\u0003\u0002\u0002\u0002\u000f\u0003\u0003\u0002\u0002\u0002\u0010",
    "\u000e\u0003\u0002\u0002\u0002\u0011\u0012\u0007\u0003\u0002\u0002\u0012",
    "\u0005\u0003\u0002\u0002\u0002\u0003\u000e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'action'", "'AND'" ];

var symbolicNames = [ null, null, "AND" ];

var ruleNames =  [ "clause", "action" ];

function clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.prototype = Object.create(antlr4.Parser.prototype);
clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.prototype.constructor = clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser;

Object.defineProperty(clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.EOF = antlr4.Token.EOF;
clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.T__0 = 1;
clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.AND = 2;

clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.RULE_clause = 0;
clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.RULE_action = 1;

function ClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.RULE_clause;
    return this;
}

ClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseContext.prototype.constructor = ClauseContext;

ClauseContext.prototype.action = function() {
    return this.getTypedRuleContext(ActionContext,0);
};

ClauseContext.prototype.clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClauseContext);
    } else {
        return this.getTypedRuleContext(ClauseContext,i);
    }
};

ClauseContext.prototype.AND = function() {
    return this.getToken(clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.AND, 0);
};

ClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Listener ) {
        listener.enterClause(this);
	}
};

ClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Listener ) {
        listener.exitClause(this);
	}
};



clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.prototype.clause = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ClauseContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 0;
    this.enterRecursionRule(localctx, 0, clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.RULE_clause, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 5;
        this.action();
        this._ctx.stop = this._input.LT(-1);
        this.state = 12;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ClauseContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.RULE_clause);
                this.state = 7;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 8;
                this.match(clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.AND);
                this.state = 9;
                this.clause(3); 
            }
            this.state = 14;
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

function ActionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.RULE_action;
    return this;
}

ActionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActionContext.prototype.constructor = ActionContext;


ActionContext.prototype.enterRule = function(listener) {
    if(listener instanceof clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Listener ) {
        listener.enterAction(this);
	}
};

ActionContext.prototype.exitRule = function(listener) {
    if(listener instanceof clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Listener ) {
        listener.exitAction(this);
	}
};




clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.ActionContext = ActionContext;

clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.prototype.action = function() {

    var localctx = new ActionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.RULE_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this.match(clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.T__0);
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


clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 0:
			return this.clause_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser.prototype.clause_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser = clause_clauseANDclause_action_action__Q_action_Q__AND__Q_AND_Q_Parser;
