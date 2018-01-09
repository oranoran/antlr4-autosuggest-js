// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by a_b_aa_b__Q_B_Q_Parser.
function a_b_aa_b__Q_B_Q_Listener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

a_b_aa_b__Q_B_Q_Listener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
a_b_aa_b__Q_B_Q_Listener.prototype.constructor = a_b_aa_b__Q_B_Q_Listener;

// Enter a parse tree produced by a_b_aa_b__Q_B_Q_Parser#a.
a_b_aa_b__Q_B_Q_Listener.prototype.enterA = function(ctx) {
};

// Exit a parse tree produced by a_b_aa_b__Q_B_Q_Parser#a.
a_b_aa_b__Q_B_Q_Listener.prototype.exitA = function(ctx) {
};


// Enter a parse tree produced by a_b_aa_b__Q_B_Q_Parser#b.
a_b_aa_b__Q_B_Q_Listener.prototype.enterB = function(ctx) {
};

// Exit a parse tree produced by a_b_aa_b__Q_B_Q_Parser#b.
a_b_aa_b__Q_B_Q_Listener.prototype.exitB = function(ctx) {
};



exports.a_b_aa_b__Q_B_Q_Listener = a_b_aa_b__Q_B_Q_Listener;