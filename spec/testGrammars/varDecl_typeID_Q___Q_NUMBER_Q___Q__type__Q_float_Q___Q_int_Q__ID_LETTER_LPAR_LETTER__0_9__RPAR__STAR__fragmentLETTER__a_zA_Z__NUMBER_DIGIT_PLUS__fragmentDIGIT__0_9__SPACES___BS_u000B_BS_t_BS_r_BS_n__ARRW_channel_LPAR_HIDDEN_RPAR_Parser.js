// jshint ignore: start
var antlr4 = require('antlr4/index');
var varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Listener = require('./varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Listener').varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Listener;
var grammarFileName = "varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\t\u000f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0002\u0002\u0004\u0002\u0004\u0002\u0003\u0003\u0002",
    "\u0005\u0006\u0002\f\u0002\u0006\u0003\u0002\u0002\u0002\u0004\f\u0003",
    "\u0002\u0002\u0002\u0006\u0007\u0005\u0004\u0003\u0002\u0007\b\u0007",
    "\u0007\u0002\u0002\b\t\u0007\u0003\u0002\u0002\t\n\u0007\b\u0002\u0002",
    "\n\u000b\u0007\u0004\u0002\u0002\u000b\u0003\u0003\u0002\u0002\u0002",
    "\f\r\t\u0002\u0002\u0002\r\u0005\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "';'", "'float'", "'int'" ];

var symbolicNames = [ null, null, null, null, null, "ID", "NUMBER", "SPACES" ];

var ruleNames =  [ "varDecl", "type" ];

function varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.prototype = Object.create(antlr4.Parser.prototype);
varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.prototype.constructor = varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser;

Object.defineProperty(varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.EOF = antlr4.Token.EOF;
varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.T__0 = 1;
varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.T__1 = 2;
varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.T__2 = 3;
varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.T__3 = 4;
varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.ID = 5;
varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.NUMBER = 6;
varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.SPACES = 7;

varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.RULE_varDecl = 0;
varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.RULE_type = 1;

function VarDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.RULE_varDecl;
    return this;
}

VarDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDeclContext.prototype.constructor = VarDeclContext;

VarDeclContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

VarDeclContext.prototype.ID = function() {
    return this.getToken(varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.ID, 0);
};

VarDeclContext.prototype.NUMBER = function() {
    return this.getToken(varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.NUMBER, 0);
};

VarDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Listener ) {
        listener.enterVarDecl(this);
	}
};

VarDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Listener ) {
        listener.exitVarDecl(this);
	}
};




varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.VarDeclContext = VarDeclContext;

varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.prototype.varDecl = function() {

    var localctx = new VarDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.RULE_varDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.type();
        this.state = 5;
        this.match(varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.ID);
        this.state = 6;
        this.match(varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.T__0);
        this.state = 7;
        this.match(varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.NUMBER);
        this.state = 8;
        this.match(varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.T__1);
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

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;


TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Listener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Listener ) {
        listener.exitType(this);
	}
};




varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.TypeContext = TypeContext;

varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        _la = this._input.LA(1);
        if(!(_la===varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.T__2 || _la===varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser.T__3)) {
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


exports.varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser = varDecl_typeID_Q___Q_NUMBER_Q___Q__type__Q_float_Q___Q_int_Q__ID_LETTER_LPAR_LETTER__0_9__RPAR__STAR__fragmentLETTER__a_zA_Z__NUMBER_DIGIT_PLUS__fragmentDIGIT__0_9__SPACES___BS_u000B_BS_t_BS_r_BS_n__ARRW_channel_LPAR_HIDDEN_RPAR_Parser;
