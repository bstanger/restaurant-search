const path = require('path');
const webpack = require('webpack');
const src = path.join(__dirname, '/project-files/assets/components');

module.exports = {
    entry: `${src}/RestaurantLocatorApp.jsx`,
    output: {
        path: path.resolve(__dirname, './project-files/build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: src,
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
