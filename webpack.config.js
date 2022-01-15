const path = require('path'); //библиотека путей, путь к файлу, создаем константу и в нее помещаем библиотеку. Суть - создавать правильные пути в коде
const HtmlWebpackPlugin = require('html-webpack-plugin'); //добавляем плагин HTML
const CopyPlugin = require("copy-webpack-plugin");
const WebpackDevServer = require('webpack-dev-server');


module.exports = { //экспорт модулей для других файлов, чтобы было доступно в других файлах
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },

  entry: { //точка входа - тот файл, который будет основой нашего приложения
    main: path.resolve(__dirname, './src/index.js'),
  },

  output: { //место, куда будет собираться бандл
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
      patterns: [{
        from: "/home/nataly/Рабочий стол/geek-brains/Курс 4 - JS 2 уровень/Вне урока/JS_shop_handmade_урок 5/src/style",
        to: "/home/nataly/Рабочий стол/geek-brains/Курс 4 - JS 2 уровень/Вне урока/JS_shop_handmade_урок 5/dist"
      }],
    }),

  ],
  module: {
    rules: [{
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    }, ],
  },
};