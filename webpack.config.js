const path = require('path');
const webpack = require('webpack');

module.exports = {
  context : __dirname,
  entry   : [
    // 'webpack-dev-server',
    // 'webpack-hot-middleware/client?reload=true',
    // 'webpack/hot/only-dev-server',
    './client/index.js'
  ],
  output: {
    path       : path.join(__dirname, 'client', 'static', 'js'),
    publicPath : '/',
    filename   : 'bundle.js'
  },
  module: {
    loaders: [{
      test    : /\.js$/,
      loader  : 'babel',
      exclude : /node_modules/,
      query   : {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test    : /\.scss$/,
      loaders : ['style', 'css', 'sass']
    },
    {
      test   : /\.css$/,
      loader : 'style-loader!css-loader'
    },
     { test   : /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
       loader : 'url-loader?limit=10000&mimetype=application/font-woff'
     },
     { test   : /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
       loader : 'file-loader'
     },
    {
      test   : /\.css$/,
      loader : 'style-loader!css-loader'
    },
    {
      test    : /\.js/,
      exclude : /node_modules/,
      loaders : ['babel']
    },
    {
      test   : /\.scss$/,
      loader : 'style!css!sass?outputStyle=compressed'
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    color   : true,
    reasons : true,
    chunks  : false
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('local')
    })
  ]
};
