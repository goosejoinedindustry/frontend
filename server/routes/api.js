import proxy from 'express-http-proxy';
import historyApiFallback from 'connect-history-api-fallback';
import url from 'url';
import config from '../config';

console.log(config.globals['process.env'].BASE_API_URL);

export default (app) => {
  // Profile's Applications
  /** Forward to Heroku API **/
  app.use('/api', proxy(`${config.api_url}`, {
    decorateRequest(req) {
      req.headers.Accept = 'application/json';
      return req;
    },
    forwardPath(req) {
      return url.parse(req.url).path;
    }
  }));

  app.use(historyApiFallback({
    verbose: false
  }));
};
