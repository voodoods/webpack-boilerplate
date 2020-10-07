const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require("path");
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = process.env.NODE_ENV || 'development'

let baseConfig = {
  context: path.resolve(__dirname, "../../src"),
  entry: {
    index: ["./index.js"]
  },
  output: {
    path: path.resolve(__dirname, "../../dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};

const environmentConfig = require(`./${env}.config.js`)

module.exports = merge(baseConfig, environmentConfig);