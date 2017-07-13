var path = require('path');

module.exports = {
    //devtool: 'inline-source-map',
    entry: './src/html-filler.js',
    output: {
        filename: 'html-filler.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    },
                },
            },
        ],
    },
};
