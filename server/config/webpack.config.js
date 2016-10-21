import webpack from 'webpack';
import path from 'path';

const PATHS = {
  entry : path.join(__dirname, '../../client/index'),
  build : path.join(__dirname, '../../client/static/js/'),
};

module.exports = {

  entry: [
    // 'webpack-dev-server',
    // 'webpack-hot-middleware/client',
    // 'webpack/hot/only-dev-server',
    './client/index.js'
  ],
  output: {
    path       : PATHS.build,
    filename   : 'bundle.js',
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
      },
      { test   : /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader : 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      { test   : /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader : 'file-loader'
      }
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
  devServer: {
    historyApiFallback : true,
    contentBase        : './'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__        : true,
      'process.env.NODE_ENV' : JSON.stringify('local')
    })
  ]

};
