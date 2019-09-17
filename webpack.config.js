const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"]
          }
        }
      },
      {
        test: /\.(less|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",

          },
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  plugins: [htmlPlugin, new webpack.HotModuleReplacementPlugin()],
  output: {
    filename: "app.js"
  }
};
