// eslint-disable-next-line no-unused-vars
const path = require('path');

module.exports = {
  entry: './src/index.js', // точка входа
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // имя выходного файла
  },
  module: {
    rules: [
      {
        test: /\.js$/, // применять к .js
        exclude: /node_modules/, // кроме библиотек
        use: {
          loader: 'babel-loader', // использовать babel-loader
        },
      },
    ],
  },
  mode: 'production', // или development
};
