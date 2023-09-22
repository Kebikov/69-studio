'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/script.ts', // Файл с зависимостями TypeScript
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  watch: true,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/, // Применить ts-loader к файлам с расширением .ts
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'] // Разрешить импорт файлов с расширениями .ts и .js
  }
};
