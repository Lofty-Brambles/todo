const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "assets/[name][ext]",
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.(svg|png|gif|webp|jpe?g)/i,
				type: "asset/resource"
			}
		]
	}
}