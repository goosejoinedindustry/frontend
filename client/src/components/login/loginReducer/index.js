import { LOGIN_FORM } from '../loginAction';

const INITIAL_STATE = {};
export function loginFormReducer(state = INITIAL_STATE, action) {
  if (action.type === LOGIN_FORM) {
    console.log('login form confirm');
    return Object.assign({}, action.payload);
  }
  return state;
}
