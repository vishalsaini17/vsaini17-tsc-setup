const path = require("path");

module.exports = {
  entry: { app: "./src/app.ts" },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js",
    publicPath: "dist"
  },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    host: "localhost",
    port: 9000,
    compress: true
  }
};
