/*globals __dirname */

import path from 'path';

const webpackConfig = {
  devtool: 'source-map',
  target: 'web',
  entry: [path.resolve(__dirname, '../', 'src/')],
  output: {
    publicPath: '/dist/',
    path: path.resolve(__dirname, '../', 'dist/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: 'style!css',
        exclude: /node_modules/
      }]
  }
};

export default webpackConfig;
