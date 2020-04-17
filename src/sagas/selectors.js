export const getState = (state) => state;

export const getAuthentication = (state) => {
  const { authentication = {} } = getState(state) || {};

  return authentication;
};

export const getUserDetails = (state) => {
  const { userDetails = {} } = getAuthentication(state) || {};

  return userDetails;
};

export const getJobs = (state) => {
  const { jobs = {} } = getState(state) || {};

  return jobs;
};

export const getSelectedJob = (state) => {
  const { selectedJob = {} } = getJobs(state) || {};

  return selectedJob;
};
