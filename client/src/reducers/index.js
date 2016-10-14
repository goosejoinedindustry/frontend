import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { loginFormReducer } from '../components/login/loginReducer';

const rootReducer = combineReducers({
  form: formReducer,
  emailLogin: loginFormReducer
});

export default rootReducer;
