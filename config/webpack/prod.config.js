const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require("path");
const merge = require('webpack-merge')
const baseConfig = require('./base.config.js')

const minifyOpts = undefined

const pluginOpts = {
  include: path.resolve(__dirname, "../../src"),
}

module.exports = merge(baseConfig, {
  plugins: [
    new MinifyPlugin(minifyOpts, pluginOpts)
  ]
})
