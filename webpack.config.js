// import path from 'path'
const path = require('path')

module.exports = {
  context: __dirname,
  entry: [
    // 'webpack-dev-server/client?http://0.0.0.0:3000',
    // 'webpack/hot/only-dev-server',
    './client/index.js'
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-2']
      }
    }]
  },
  plugins: [],
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
  watch: true
};
