var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js/');
var APP_DIR = path.resolve(__dirname, 'asset/jsx');

var config = {
  entry: APP_DIR + '/reactApp.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude:/(node_modules)/,
        loader : 'babel-loader',
        query:{
          presets:["es2015", "react"]
        }
      }
    ]
  }
};

module.exports = config;
