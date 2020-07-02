const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./src/index.js", //identify entry point for webpack
  output: {
    path: path.resolve(__dirname, "./public"), //identify where bundle will be built
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
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              // "@babel-preset-airbnb",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

module.exports = config;
