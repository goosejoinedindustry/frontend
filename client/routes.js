import React from 'react';
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
    /* Signup */
  <Route path="/" component={login} />,

  /* Landing Pages */
  <Route path="/user" component={login} />,
  <Route path="/business" component={login} />,

  /* Licenses */
  <Route path="/licenses/privacy" component={policies} />,
  <Route path="/licenses/terms" component={policies} />,

  /* Help / FAQ */
  <Route path="/help" component={policies} />,

  /* Jobs (Public) */
  <Route path="/jobs" component={jobs} />,
  <Route path="/jobs/:listingid" component={jobs} />,

  /* Settings */
  <Route path="/settings" component={settings} />,

  /* User Insights */
  <Route path="/insights" component={insights} />,

  /* User applications */
  <Route path="/applications" component={applications} />,

  /* User/Business Profile Pages (Public & Unique) */
  <Route path="/:profileName" component={profile} />,

  /* Business Job Listings */
  <Route path="/:businessName/listings" component={businessJobPosting} />,

  /* Business Billing Page */
  <Route path="/:businessName/billing" component={profile} />,
];
