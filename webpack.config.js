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
      test    : /\.jsx?$/,
      exclude : /node_modules/,
      loader  : 'babel-loader',
      query   : {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test   : /\.css$/,
      loader : 'style-loader!css-loader'
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
