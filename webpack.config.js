const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	mode: 'development',
	devtool: 'eval',
	resolve: {
		extensions: ['.js', '.jsx', 'css', 'scss'],
		alias: {
			'~': path.resolve(__dirname)
		}
	},

	entry: {
		app: ['./client.jsx'],
	}, // 입력

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},

	target: ['web', 'es5'],

	output: {
		// path: path.join(__dirname, 'dist'),
		filename: 'app.js',
		publicPath: '/',
		clean: true
	}, // 출력

	plugins: [
		new RefreshWebpackPlugin(),
		new HtmlPlugin({
			template: './index.html'
		}),
		new CopyPlugin({
			patterns: [
				{from: 'static'}
			]
		})
	],

	devServer: {
		devMiddleware: {publicPath: '/'},
		hot: true
	}
}
