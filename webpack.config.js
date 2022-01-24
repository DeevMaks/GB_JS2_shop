const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const sass = require("sass");

const result = sass.compile("./src/style/style.scss");
console.log(result.css);

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "GeekBrains Shop JS2",
      template: path.resolve(__dirname, "./public/template.html"), // шаблон
      filename: "index.html", // название выходного файла
    }),
  ],

  mode: "development",

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,

    proxy: {
      "/api/v1": "http://localhost:3000",
    },
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js", // 'vue/dist/vue.common.js' for webpack 1
    },
  },
};
