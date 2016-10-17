import { LOGIN_FORM } from '../loginAction';

const INITIAL_STATE = {};
export default function loginFormReducer(state = INITIAL_STATE, action) {
  if (action.type === LOGIN_FORM) {
    return Object.assign({}, action.payload);
  }
  return state;
}
