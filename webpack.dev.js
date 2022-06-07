const webpack = require("webpack");
const webpackCommon = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(webpackCommon, {
	mode: "development",
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin(
			{
				title: "To-do!",
				meta: {
					viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
				}
			}
		)
	],
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
		hot: true
	},
	optimization: {
		runtimeChunk: "single"
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"resolve-url-loader",
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	}
});