const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/ts/index.ts',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'tslint-loader',
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
    ]
  },

  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000
  },

  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new CleanWebpackPlugin()
  ]
};