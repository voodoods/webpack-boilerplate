const path = require("path");

module.exports = {
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
}