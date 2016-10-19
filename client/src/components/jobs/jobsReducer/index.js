import { JOB_DATA } from '../jobsAction';

const INITIAL_STATE = {
  jobsList: [],
  selectedJob: null,
};
export default function jobsReducer(state = INITIAL_STATE, action) {
  if (action.type === JOB_DATA) {
    state.jobsList = action.payload;
    return state;
  }
  return state;
}
