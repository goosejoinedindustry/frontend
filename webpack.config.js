const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: __dirname,
  entry: [
    // 'webpack-dev-server',
    // 'webpack-hot-middleware/client',
    // 'webpack/hot/only-dev-server',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'client', 'static', 'js'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  stats: {
    color: true,
    reasons: true,
    chunks: false
  },
  // watch: true
};
