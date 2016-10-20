
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

import appview from './app';

// Wraps Global components with views
const Login = appview(login);
const Applications = appview(applications);
const BusinessJobPosting = appview(businessJobPosting);
const Insights = appview(insights);
const Jobs = appview(jobs);
const Policies = appview(policies);
const Settings = appview(settings);
const Profile = appview(profile);

export default [
    /* Signup */
  <Route path="/" component={Login} />,

  /* Landing Pages */
  <Route path="/user" component={Login} />,
  <Route path="/business" component={Login} />,

  /* Licenses */
  <Route path="/licenses/privacy" component={Policies} />,
  <Route path="/licenses/terms" component={Policies} />,

  /* Jobs (Public) */
  <Route path="/jobs" component={jobs} />,
  <Route path="/jobs/:listingid" component={Jobs} />,

  /* Settings */
  <Route path="/settings" component={Settings} />,

  /* User Insights */
  <Route path="/insights" component={Insights} />,

  /* User applications */
  <Route path="/applications" component={Applications} />,

  /* User/Business Profile Pages (Public & Unique) */
  <Route path="/:profileName" component={Profile} />,

  /* Business Job Listings */
  <Route path="/:businessName/listings" component={BusinessJobPosting} />,

  /* Business Billing Page */
  <Route path="/:businessName/billing" component={Profile} />,
];
