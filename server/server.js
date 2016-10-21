import express from 'express';
import path from 'path';
import routes from './routes';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config';
console.log(config);
const app = express();
const compiler = webpack(config);

// Set port depending on process.env
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

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
  console.info('🌎 Server fired up on %s. Open up http://localhost:%s/ in your browser.', port, port);
});
