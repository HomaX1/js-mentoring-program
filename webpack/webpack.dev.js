const merge = require('webpack-merge');
const webpackCommon = require('./webpack.common.js');

module.exports = merge(webpackCommon, {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000
    }
});