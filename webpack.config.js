// Базовая настройка для корректной работы с путями
const path = require('path');

// Базовый плагин необходимый для вставки названия итоговых JS-файлов в HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Плагин очищающий от мусора папку dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Плагин для переноса файлов в папку dist  
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	// Установка режима сборки по умолчанию, для избежания предупреждения. 
	// Доступны два варианта 'development' (обычный) или 'production' (minimal).
	mode: 'development',

	// Точка входа. Точек входа может быть несколько (параллельные скрипты).
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},

	// Точка сборки 
	output: {
	path: path.resolve(__dirname, './dist'),
	filename: '[name].bundle.js',
	},

	// Подключение для непрерывного отслеживания изменений
	devServer: {
		port: 4200
	},

	plugins: [
		// Название итоговых JS-файлов в HTML. Настройка.
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public/template.html'), // шаблон
			filename: 'index.html', // название выходного файла
			minify: {
				collapseWhitespace: true,
			}
		}),
		// Очищение от мусора папки dist
		new CleanWebpackPlugin(),
		// Перенос файлов в папку dist
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, './public/css'),
					to: path.resolve(__dirname, 'dist/css/')
				},
				{
					from: path.resolve(__dirname, './public/img'),
					to: path.resolve(__dirname, 'dist/img/')
				}
			]
		}),
	],
}