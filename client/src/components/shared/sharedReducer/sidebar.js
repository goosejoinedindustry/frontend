import { SIDEBAR_TOGGLE } from '../sharedAction/sidebar';

const INITIAL_STATE = {};
export default function sideBarToggle(state = INITIAL_STATE, action) {
  if (action.type === SIDEBAR_TOGGLE) {
    return Object.assign({}, action.payload);
  }
  return state;
}
