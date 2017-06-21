const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, '/client/app.js'),
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?sourceMap!sass-loader?sourceMap',

        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin('styles.css')],
  watch: true
}
