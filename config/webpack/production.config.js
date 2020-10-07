const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require("path");

module.exports = {
  plugins: [
    new MinifyPlugin(undefined, {
      include: path.resolve(__dirname, "../../src"),
    })
  ]
}