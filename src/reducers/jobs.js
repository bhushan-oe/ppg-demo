import actionTypes from "../actions/actionTypes";

export const initialState = {
  JobsData: null,
  selectedJob: null,
};

export default function accounts(state = initialState, action) {
  const { jobs = {} } = actionTypes;
  const { getJobs, setJob } = jobs;
  const { type, payload } = action;

  switch (type) {
    case getJobs:
      return { ...state, JobsData: payload.JobData };
    case setJob:
      return { ...state, selectedJob: payload.selectedJob };
    default:
      return state;
  }
}
