import express from 'express';
import path from 'path';
import routes from './routes';

import chokidar from 'chokidar'; // Watches and updates BE changes
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './config/webpack.config';

const app = express();

// Set port depending on process.env
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

// Set port depending on process.env
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;

// Server side templating from ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set and point to static assets
const publicPath = path.join('../', 'client', 'static', 'js');
app.use(express.static(publicPath));

// Loads routes
routes(app);

// Determines workflow path
if (isDeveloping) {
  console.log(':D <-- Jasper');
  const compiler = webpack(config);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath  : config.output.publicPath,
    contentBase : 'http://localhost',
    stats       : {
      colors       : true,
      hash         : false,
      timings      : true,
      chunks       : false,
      chunkModules : false,
      modules      : false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  const watcher = chokidar.watch('file, dir, glob, or array', {
    ignored    : /[\/\\]\./,
    persistent : true
  });


  watcher.on('ready', () => {
    watcher.on('all', () => {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach((id) => {
        if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id];
      });
    });
  });

// Do "hot-reloading" of react stuff on the server
// Throw away the cached client modules and let them be re-required next time
  compiler.plugin('done', () => {
    console.log('Clearing /client/ module cache from server');
    Object.keys(require.cache).forEach((id) => {
      if (/[\/\\]client[\/\\]/.test(id)) delete require.cache[id];
    });
  });
} else {
  // Production, etc. configs go here
}

proxy.on('error', (err) => {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, () => {
  console.log(isProduction);
  console.log(`Server is fired up on port ${port}`);
});
