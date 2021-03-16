const path = require("path");

const ExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./index.js",
  devtool: false,
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // comment out both Extract and style-loader for it to start working
          // ExtractPlugin.loader,
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
              },
            },
          },
        ],
      },
    ],
  },
  mode: "development",
  plugins: [
    //ExtractPlugin
  ],
};
