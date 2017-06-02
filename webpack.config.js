var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: './src/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer:{
		publicPath: '/dist/'
	}
};