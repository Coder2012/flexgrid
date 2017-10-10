const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: false,
  allChunks: true
});

const html = new HtmlWebpackPlugin({
  title: 'Flex Grid Demo',
  hash: true,
  template: './src/index.html'
})

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
  	alias: {
  		'vue$': 'vue/dist/vue.esm.js'
  	}
  },
  module: {
  	rules: [
  		{
  			test: /\.js$/,
  			exclude: /(node_modules|bower_components)/,
  			use: {
  				loader: 'babel-loader',
  				options: {
  					presets: [
  						['env', {
	  						"targets": {
	  							"browsers": ["last 2 versions", "safari >= 7"]
	  						}
	  					}]
  					]
  				}
  			}
  		},
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
          publicPath: "/dist"
        })
      }
  	]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: "errors-only",
    open: true
  },
  plugins: [
    extractSass,
    html
  ]
};