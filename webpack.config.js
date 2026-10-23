const path = require("path");
// extracts the CSS code into a separate file, which can then be included in our HTML using a <link> tag.
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//  the process of generating HTML files and automatically injecting bundled JavaScript and CSS files into them.
const HtmlWebpackPlugin = require("html-webpack-plugin");
// To minify CSS during the webpack bundling process
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// To resolve this issue and ensure that both CSS and JavaScript are minified properly
const TerserPlugin = require("terser-webpack-plugin");
// it reduce the size of css by ignore the class with no use in html
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/main.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new PurgeCSSPlugin({
      paths: [path.resolve(__dirname, "./src/index.html")],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "asset/[name][ext]",
        },
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  mode: "development",
};
