// Generated from com/intigua/searchquery/antlr4/simple.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by simpleParser.
function simpleListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

simpleListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
simpleListener.prototype.constructor = simpleListener;

// Enter a parse tree produced by simpleParser#the_field.
simpleListener.prototype.enterThe_field = function(ctx) {
};

// Exit a parse tree produced by simpleParser#the_field.
simpleListener.prototype.exitThe_field = function(ctx) {
};



exports.simpleListener = simpleListener;