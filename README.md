JavaScript autosuggest engine for ANTLR4 grammars
=================================================
Oran Epelbaum

To get started, have a look at the unit tests.

[<img src="https://travis-ci.org/oranoran/antlr4-autosuggest-js.svg?branch=master">](https://travis-ci.org/oranoran/antlr4-autosuggest-js ) [<img src="https://api.codacy.com/project/badge/Grade/b5195e72e90043f79d9c3cbf7e80bd1e">](https://www.codacy.com/app/oranoran/antlr4-autosuggest-js?utm_content=oranoran/antlr4-autosuggest-js&utm_campaign=Badge_Grade )


Getting the antlr-autosuggest JavaScript Module
-----------------------------------------------

For now, you need to download and build the library from source code.
We intend to publish into NPM soon.

Examples
--------

A - Generating suggestions for a generated grammar

```javascript
var factory = class {
    constructor() {}
    createLexer(input) {
        return new myLexer.myLexer(input);
    };
    createParser(tokenStream) {
        return new myParser.myParser(tokenStream);
    };
};
var suggester = new autosuggest.AutoSuggester(new factory(), input);
var suggestions = suggester.suggest();
```

How It Works
------------
See explanation in the [Java project](https://github.com/oranoran/antlr4-autosuggest/).

Building
--------
* Clone the antlr-autosuggest-js repository.
* Install Node and NPM (tested with 8)
* Run the command `npm test`.

Credits
-------
Written by Oran Epelbaum at Intigua.
When starting to write this, studied the following blog posts (though much has changed since):

* [RAPID7](https://blog.rapid7.com/2015/06/29/how-to-implement-antlr4-autocomplete/): How to Implement ANTLR4 Autocomplete
* [TOMASETTI](https://tomassetti.me/autocompletion-editor-antlr/): Building autocompletion for an editor based on ANTLR by Federico Tomassetti
