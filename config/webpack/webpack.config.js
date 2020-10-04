const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require("path");
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = process.env.NODE_ENV || 'development'

const environments = {
  development: {
    mode: 'development',
    devServer: {
      contentBase: path.join(__dirname, '../../dist'),
      compress: false,
      port: 8080,
      hot: true,
      overlay: {
        warnings: false,
        errors: true
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    devtool: 'source-maps'
  },
  production: {
    plugins: [
      new MinifyPlugin(undefined, {
        include: path.resolve(__dirname, "../../src"),
      })
    ]
  }
}

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

module.exports = merge(baseConfig, environments[env]);