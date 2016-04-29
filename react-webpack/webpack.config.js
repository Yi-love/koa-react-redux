var path = require('path');

module.exports = {
	entry : [
		path.resolve(__dirname , './app/index.js')],
	output: {
		path : path.resolve(__dirname,'build'),
		filename: 'bundle.js'
	},
	 module: {
	    loaders: [
	      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015', 'react']}},
	      {test: /\.css$/,exclude: /node_modules/ , loader: 'style-loader!css-loader!autoprefixer-loader'},
	      {test: /\.scss$/,exclude: /node_modules/ , loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'},
	      {test:/\.(png|jpg)/,exclude:/node_modules/,loader:'url-loader?limit=8192'}
	    ]
	}
};