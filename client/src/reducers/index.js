import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginFormReducer from '../components/login/loginReducer';
import signupFormReducer from '../components/signup/signupReducer';
import jobsReducer from '../components/jobs/jobsReducer';
import appsReducer from '../components/applications/appReducer';
import viewDataLoad from '../components/insights/insightsReducer';
import sideBarToggle from '../components/shared/sharedReducer/sidebar';
import settingsReducer from '../components/settings/settingsReducer';
import profileReducer from '../components/profile/profileReducer';

const rootReducer = combineReducers({
  form          : formReducer,
  emailLogin    : loginFormReducer,
  emailSignup   : signupFormReducer,
  jobsListing   : jobsReducer,
  appsListing   : appsReducer,
  viewGraphData : viewDataLoad,
  sideBarToggle,
  settingsReducer,
  profileReducer
});

export default rootReducer;
