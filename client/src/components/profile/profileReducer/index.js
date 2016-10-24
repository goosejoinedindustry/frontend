import { GET_PROFILE_DATA } from '../profileAction';

const INITIAL_STATE = {};
export default function settingsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PROFILE_DATA: {
      return Object.assign({}, action.payload);
    }
    default:
      return state;

  }
}
