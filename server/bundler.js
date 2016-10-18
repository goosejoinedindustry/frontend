const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./config/webpack.config.js');

module.exports = () => {
  let bundleStart = null;
  const compiler = webpack(webpackConfig);

  compiler.plugin('compile', () => {
    bundleStart = Date.now();
  });

  compiler.plugin('done', () => {
    console.log(`Bundled in ${Date.now() - bundleStart} ms!`);
  });

  const bundler = new WebpackDevServer(compiler, {
    publicPath: '/build/',
    hot: true,
    quiet: false,
    NoInfo: true,
    stats: {
      colors: true,
      reasons: true,
      progress: true
    }
  });

  bundler.listen(3000, 'localhost', () => {
    console.log('Bundling...');
  });
};
