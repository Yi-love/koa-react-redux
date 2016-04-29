var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, '../node_modules');

var dir_client = path.resolve(__dirname, '../src/client/scripts');
var dir_dist = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    index: path.resolve(dir_client, 'client.js'),
    me : path.resolve(dir_client, 'me.js'),
    redux : path.resolve(dir_client, 'redux.js'),
    reddit :  path.resolve(dir_client, 'reddit.js'),
    redditEntry :  path.resolve(dir_client, 'redditEntry.js')
  },
  output: {
    path: dir_dist, // for standalone building
    publicPath: '/assets/', // for hot building
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /src(\\|\/).+\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015', 'react']}}
    ]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    colors: true // Nice colored output
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};