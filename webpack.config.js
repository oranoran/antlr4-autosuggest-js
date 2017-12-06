const webpack = require('webpack'); //to access built-in plugins
var nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: './autosuggest.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'antlr4-autosuggest.js',
    libraryTarget: 'umd',
    library: 'Antlr4Autosuggest'
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder,
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
