import { DATA_LOAD } from '../insightAction';

const INITIAL_STATE = {};
export default function viewDataLoad(state = INITIAL_STATE, action) {
  if (action.type === DATA_LOAD) {
    return Object.assign({}, action.payload);
  }
  return state;
}
