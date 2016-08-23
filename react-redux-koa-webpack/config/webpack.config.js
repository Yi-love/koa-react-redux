'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
	watch: true,
	resolve:{ 
		modulesDirectories: [path.join(__dirname , '../node_modules')],
		alias:{
			react : 'react/dist/react',
			'react-dom' : 'react-dom/dist/react-dom'
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
	  // new webpack.optimize.UglifyJsPlugin('*.js'),
	  // new webpack.DefinePlugin({
	  //   'process.env.NODE_ENV': JSON.stringify('development'),
	  //   __SERVER__: true
	  // })
	],
	stats: {
	  colors: true // Nice colored output
	},
	// Create Sourcemaps for the bundle
	devtool: 'source-map'
};