import { SIGNUP_FORM } from '../signupAction';

const INITIAL_STATE = {};
export function signupFormReducer(state = INITIAL_STATE, action) {
  if (action.type === SIGNUP_FORM) {
    return Object.assign({}, action.payload);
  }
  return state;
}
