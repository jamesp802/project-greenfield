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
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel-preset-airbnb"]
          }
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

module.exports = config;
