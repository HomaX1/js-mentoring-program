const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
    mode: 'production'
});