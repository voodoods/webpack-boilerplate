const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

console.log(process.env.NODE_ENV)

module.exports = {
  // global base config here
  resolve: {
    alias: {
      'react': 'inferno-compat',
      'react-dom': 'inferno-compat'
    }
  },
  context: path.resolve(__dirname, '../../src'),
  entry: {
    index: [
      './polyfills.js',
      './index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [
          /node_modules/,
          /\.test\.js$/
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } }
          ]
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ]),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('src/index.html')
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
