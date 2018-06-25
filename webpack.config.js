var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './project-files/assets',
    output: {
        path: path.resolve(__dirname, 'project-files/build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: path.join(__dirname, '/project-files/assets'),
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
