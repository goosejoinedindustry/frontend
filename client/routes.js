import React, { Component } from 'react';
import { Route } from 'react-router';

import applications from './src/containers/applications';
import businessJobPosting from './src/containers/businessJobPosting';
import insights from './src/containers/insights';
import jobs from './src/containers/jobs';
import login from './src/containers/login';
import policies from './src/containers/policies';
import profile from './src/containers/profile';
import settings from './src/containers/settings';

export default [
    /* Landing Pages */
  <Route path="/business" component={login} />,
    /* landing page */
    /* Policies */
  <Route path="/policies/cookies" component={policies} />,
  <Route path="/policies/terms" component={policies} />,
  <Route path="/policies/data" component={policies} />,
    /* Signup */
  <Route path="/" component={login} />,
    /* user signup */
  <Route path="/business/signup" component={login} />,
    /* business signup */
    /* Login */
  <Route path="/login" component={login} />,
    /* login */
    /* Reset Password */
  <Route path="/login/identify" component={login} />,
    /* User/Business Profile Pages (Public & Unique) */
  <Route path="/{username}" component={profile} />,
    /* Jobs (Public) */
  <Route path="/jobs" component={jobs} />,
  <Route path="/jobs/{listingid}" component={jobs} />,
    /* Settings */
  <Route path="/settings" component={settings} />,
    /* User Insights */
  <Route path="/insights" component={insights} />,
    /* Business Insights */
  <Route path="/{username}/insights" component={insights} />,
    /* Business Settings */
  <Route path="/{username}/settings" component={settings} />
];
