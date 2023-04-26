const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/module.ts",
  output: {
    filename: "module.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: { allowTsInNodeModules: true },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "dist")],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "plugin.json"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
  ],
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
