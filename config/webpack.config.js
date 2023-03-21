const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const resolve = exports.resolve = function () {
  return path.join.apply(null, [__dirname, '..'].concat(Object.values(arguments)))
}

module.exports = {
  mode: "development",
  // The application entry point
  entry: "./src/index.js",

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      //use babel-loader to transpile js files
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      // sass loader to compile sass code into css, css-loader to bundle
      // all the css files into one file and vue-style-loader to add all
      // the styles inside the <style> block in `.vue` file.
      {
        test: /\.(scss|css)$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      },
    ]
  },
  resolve: {
    alias: {
      'frontend': resolve('src'),
    },
  },
  // Where to compile the bundle
  // By default the output directory is `dist`
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "../public"),
    port: 3000,
    publicPath: "/dist/"
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}