'use strict';

var path = require('path');
var webpack = require('webpack');

var sourcePath = path.resolve(__dirname , '../src/scripts');
var targetPath = path.resolve(__dirname , '../build/scripts');

module.exports = {
	entry : {
		index : path.resolve(sourcePath , 'index.js'),
		cart : path.resolve(sourcePath , 'cart.js')
	},
	output : {
		path : targetPath,
		filename:'[name].js'
	},
	module:{
		loaders:[
			{ test:/(app|src)+(\\|\/).+\.jsx?$/ , exclude:/node_modules/ , loader:'babel-loader' , query: {presets:['es2015','react']} },
			{ test:/src(\\|\/).+\.css$/ , exclude:'/node_modules/' , loader:'style-loader!css-loader!autoprefixer-loader'}
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