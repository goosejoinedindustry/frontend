import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './config/webpack.config';
import routes from './routes';
const app = express();

// console.log(compiler);

// Set port depending on process.env
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

// app.use(require('font-awesome-webpack'));
// Server side templating from ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set and point to static assets
app.use(express.static(path.join(__dirname, '../', 'client')));

// Determines workflow path
// if (isDeveloping) {
//   console.log(':D <-- Jasper');
//   const middleware = webpackDevMiddleware(compiler, {
//     publicPath  : config.output.publicPath,
//     contentBase : '/',
//     stats       : {
//       colors       : true,
//       hash         : false,
//       timings      : true,
//       chunks       : false,
//       chunkModules : false,
//       modules      : false,
//     },
//   });
//
//   app.use(middleware);
//   app.use(webpackHotMiddleware(compiler));
// } else {
//   // Production config goes here
//   console.log('get outta here');
// }

// Loads routes AFTER loading webpackDevMiddleware
routes(app);

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  else {
      console.info('🌎 Server fired up on %s. Open up http://localhost:%s/ in your browser.', port, port); // eslint-disable-line
  }
});
