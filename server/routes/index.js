import login from './login';
import profile from './profile';
import insights from './insights';
import applications from './applications';
import jobs from './jobs';
import settings from './settings';
import policies from './policies';
import businessJobPosting from './businessJobPosting';
import base from './base';
import api from './api';

const ROOT_URL = 'https://www.industry.co';

/**
 * Helper function route defintion.
 */
function renderHelper(app, route, params, template = 'index') {
  app.get(route, (req, res) => {
    res.render(template, params);
  });
}


// Imports routes
export default (app) => {
  /**
   * Basic Wrapper for route defintion.
   * @param route {string}, extention for route path
   * @param params {object}, conatins ejs template information
   * @param template {string}, template name (default is "index")
   */
  function render(route, params = {}, template = 'index') {
    params.ogTags = [].concat(params.ogTags);
    params.twitterTags = [].concat(params.twitterTags);
    params.url = ROOT_URL + route;
    params.title = params.title ? params.title : 'Industry';
    renderHelper(app, route, params, template);
  }
  base(render);
  login(render);
  profile(render);
  insights(render);
  applications(render);
  jobs(render);
  settings(render);
  policies(render);
  businessJobPosting(render);
  api(app);
};
