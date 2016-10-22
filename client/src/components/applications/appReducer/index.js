import { APP_DATA } from '../appAction';

const INITIAL_STATE = {
  appsList: []
};

export default function appsReducer(state = INITIAL_STATE, action) {
  if (action.type === APP_DATA) {
    state.appsList = action.payload;
  }
  return state;
}
