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

export const getSelectedJobProductIds = (state) => {
  
  const { relationships = {} } = getSelectedJob(state) || {};
  const { job_products = {} } = relationships;

  const productIds = job_products.data && job_products.data.map(item=>item.id);
  return  productIds || [];
} 
