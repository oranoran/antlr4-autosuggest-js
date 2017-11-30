'use strict';

function AutoSuggester(lexerAndParserFactory, input) {
    this._lexerAndParserFactory = lexerAndParserFactory;
    this._input = input;
    return this;
}

AutoSuggester.prototype.constructor = AutoSuggester;

AutoSuggester.prototype.suggest = function () {
    return [];
};

exports.AutoSuggester = AutoSuggester;
