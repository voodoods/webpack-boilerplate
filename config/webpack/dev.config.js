const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./base.config.js')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  // dev config here
  devServer: {
    contentBase: path.join(__dirname, '../../dist'),
    compress: false,
    port: 8080,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  devtool: 'source-maps',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    })
  ]
})
