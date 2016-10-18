const Webpack = require('webpack');
const path = require('path');

const PATHS = {
  entry : path.join(__dirname, '../../', 'client', 'index'),
  build : path.join(__dirname, '../../', 'client', 'static', 'js')
};

module.exports = {
  devtools : 'eval-source-map',
  entry    : [
    'webpack-hot-middleware/client?reload=true',
    PATHS.entry
  ],
  output: {
    path       : PATHS.build,
    fileName   : 'bundle.js',
    publicPath : '/'
  },
  module: {
    loaders: [
      {
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
      }
    ]
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
