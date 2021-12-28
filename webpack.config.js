const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {

    mode: 'development',

    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
    },

    plugins: [
      new HtmlWebpackPlugin({
          title: 'GeekBrains Shop JS2',
          template: path.resolve(__dirname, './public/template.html'), // шаблон
          filename: 'index.html', // название выходного файла
      }),
      new CopyPlugin({
      patterns: [
        { from: "src/template.css", to: "" },
      ],
    }),

    ],
}