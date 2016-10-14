import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { loginFormReducer } from '../components/login/loginReducer';
import { signupFormReducer } from '../components/signup/signupReducer';

const rootReducer = combineReducers({
  form: formReducer,
  emailLogin: loginFormReducer,
  emailSignup: signupFormReducer,
});

export default rootReducer;
