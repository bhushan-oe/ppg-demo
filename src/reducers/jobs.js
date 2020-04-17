import actionTypes from "../actions/actionTypes";

export const initialState = {
  JobsData: null,
  selectedJob: null,
};

export default function accounts(state = initialState, action) {
  const { jobs = {} } = actionTypes;
  const { getJobs, resetJob, setJob } = jobs;
  const { type, payload } = action;

  switch (type) {
    case getJobs:
      return { ...state, JobsData: payload.JobData };
    case resetJob:
      return { ...state, selectedJob: null };
    case setJob:
      return { ...state, selectedJob: payload.selectedJob };
    default:
      return state;
  }
}
