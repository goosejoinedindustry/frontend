import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import History from 'history'

import App from './index'

export default (
  <Router history={History}>
  /* Landing Pages */
  <Route path="/business" component={App}/> // landing page
  /* Policies */
  <Route path="/policies/cookies" component={App}/>
  <Route path="/policies/terms" component={App}/>
  <Route path="/policies/data" component={App}/>
  /* Signup */
  <Route path="/" component={App}/> // user signup
  <Route path="/business/signup" component={App}/> // business signup
  /* Login */
  <Route path="/login" component={App}/> // login, duh
  /* Reset Password */
  <Route path="/login/identify" component={App}/>
  /* User/Business Profile Pages (Public & Unique) */
  <Route path="/{username}" component={App}/>
  /* Jobs (Public) */
  <Route path="/jobs" component={App}/>
  <Route path="/jobs/{listingid}" component={App}/>
  /* Settings */
  <Route path="/settings" component={App}/>
  /* User Insights */
  <Route path="/insights" component={App}/>
  /* Business Insights */
  <Route path="/{username}/insights" component={App}/>
  /* Business Settings */
  <Route path="/{username}/settings" component={App}/>
  </Router>
)
