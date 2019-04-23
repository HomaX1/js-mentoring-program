const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'common': './src/index.js',
        'visitor': './src/js/visitor.js',
        'admin': './src/js/admin.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            failOnError: true,
                            failOnWarning: true,
                        },
                    },
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'admin.html',
            template: 'src/admin.html',
            chunks: ['admin', 'common'],
        }),

        new HtmlWebpackPlugin({
            filename: 'visitor.html',
            template: 'src/visitor.html',
            chunks: ['visitor', 'common'],
        }),
        new ExtractTextPlugin('[name].css'),
    ]
};