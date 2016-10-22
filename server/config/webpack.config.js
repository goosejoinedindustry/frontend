// import webpack from 'webpack';
// import path from 'path';
// import validate from 'webpack-validator';

const webpack = require('webpack');
const path = require('path');
const validate = require('webpack-validator');

const PATHS = {
  entry : path.join(__dirname, '../../client/index'),
  build : path.join(__dirname, '../../client/static/js/'),
};

const config = {

  entry: [
    // 'webpack-dev-server',
    'webpack-hot-middleware/client',
    // 'webpack/hot/only-dev-server',
    PATHS.entry,
  ],
  output: {
    path     : PATHS.build,
    // publicPath : '/',
    filename : 'bundle.js',
  },
  module: {
    loaders: [
      {
        test    : /\.js$/,
        loader  : 'babel',
        exclude : /node_modules/,
        query   : {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
      {
        test    : /\.scss$/,
        loaders : ['style', 'css', 'sass'],
      },
      {
        test   : /\.css$/,
        loader : 'style-loader!css-loader'
      },
      { test   : /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader : 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      { test   : /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader : 'file-loader',
      },
      {
        test   : /\.css$/,
        loader : 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__        : true,
      'process.env.NODE_ENV' : JSON.stringify('local'),
    }),
  ],

};

module.exports = validate(config);
