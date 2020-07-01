const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./client/src/index.jsx", //identify entry point for webpack
  output: {
    path: path.resolve(__dirname, "./client/dist"), //identify where bundle will be built
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

module.exports = config;
