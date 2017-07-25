const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const IS_PROD = process.env.NODE_ENV === 'production'
console.log(IS_PROD)
module.exports = {
  resolve: {},
  context: path.resolve(__dirname, './src'),
  entry: {
    index: ['./polyfills.js', './index.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:8080/',
    filename: 'bundle.js'
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  devtool: 'source-maps',
  module: {
    loaders: []
  },
  plugins: IS_PROD ? [
    new webpack.DefinePlugin({ // <--key to reduce React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),

    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('src/index.html')
    }), // Concat all Stylesheets into a single file
    new ExtractTextPlugin('style.css')
  ] : [
      // Generates an `index.html` file with the <script> injected.
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve('src/index.html')
      }),
      new ExtractTextPlugin('style.css')
    ]
}