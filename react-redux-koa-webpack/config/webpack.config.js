'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
	watch: true,
	resolve:{ 
		modulesDirectories: [path.join(__dirname , '../node_modules')],
		alias:{
			react : 'react/dist/react.min',
			'react-dom' : 'react-dom/dist/react-dom.min'
		}
	},
	module:{
		loaders:[
			{ test:/(app|src)+(\\|\/).+\.jsx?$/ , exclude:/node_modules/ , loader:'babel-loader' , query: {presets:['es2015','react']} },
			{ test:/src(\\|\/).+\.css$/ , exclude:'/node_modules/' , loader:'style-loader!css-loader!autoprefixer-loader'}
		]
	},
	plugins: [
	  // Avoid publishing files when compilation fails
	  new webpack.NoErrorsPlugin(),
	  // new webpack.optimize.UglifyJsPlugin('*.js')
	],
	stats: {
	  colors: true // Nice colored output
	},
	// Create Sourcemaps for the bundle
	devtool: 'source-map'
};