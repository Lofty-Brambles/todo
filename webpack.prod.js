const webpack = require("webpack");
const webpackCommon = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const cssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const terserPlugin = require("terser-webpack-plugin");

module.exports = merge(webpackCommon, {
	mode: "production",
	optimization: {
		minimizer: [
			new terserPlugin(),
			new cssMinimizerWebpackPlugin({
				minimizerOptions: {
					preset: [
						"default",
						{
							discardComments: { removeAll: true }
						}
					]
				}
			}),
			new HtmlWebpackPlugin({
				title: "To-do!",
				favicon: "./src/assets/favicon",
				meta: {
					viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
				}
			})
		]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new miniCssExtractPlugin(),
		new cleanWebpackPlugin({
			verbose: true
		})
	],
	module: {
		rules: [
			{
				test: /s[ca]ss$/i,
				use: [
					miniCssExtractPlugin.loader,
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