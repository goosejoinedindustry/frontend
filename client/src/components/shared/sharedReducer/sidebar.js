import { SIDEBAR_TOGGLE } from '../sharedAction/sidebar';

const INITIAL_STATE = {};
export default function sharedReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIDEBAR_TOGGLE: {
      return Object.assign({}, action.payload);
    }
    default: {
      return state;
    }
  }
}
