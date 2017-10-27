const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports = merge(baseConfig, {
  // prod config here
  plugins: [
    new webpack.EnvironmentPlugin({
       NODE_ENV: 'production'
    })
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compressor: {
        warnings: false
      }
    })
  ]
})
