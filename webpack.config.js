var path = require('path');

module.exports = {
	//devtool: 'inline-source-map',
	entry: './src/index.js',
	output: {
		filename: 'html-filler.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer:{
		publicPath: '/dist/'
	}
};