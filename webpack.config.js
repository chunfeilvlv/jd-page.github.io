const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
module.exports = {
	mode: "production",
	entry: ['babel-polyfill', './js/main.js'],
	output:{
		path:path.join(__dirname, './dist/'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template:'./index.html'
		}),
		new VueLoaderPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer:{
		contentBase:'./',
		hot: true
	},
	externals:{
		'vue-router': 'VueRouter',
		vue: 'Vue'
	},
	module:{
		rules:[
			{
				test:/.css$/,
				use:[
					'style-loader',
					'css-loader'
				]	
			},
			{
				test:/\.(png|jpg|gif)$/,
				use:[
					'file-loader'
				]
			},
			{
				test:/\.less$/,
				use:[
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.vue$/,
				use: [
					'vue-loader'
				]
			},
			{
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: ['@babel/preset-env'],
		          plugins: ['@babel/plugin-transform-runtime'],
		          cacheDirectory: true
		        }
		      }
	      	}

		]
	}
}