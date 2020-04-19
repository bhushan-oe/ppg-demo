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

export const getSKUs = (state) => {
  const { skus = {} } = getState(state) || {};

  return skus;
}
export const getSKUlist = (state) => {
  const { skulist = {} } = getSKUs(state) || {};  
  return skulist;
}

export const getProductlist = (state) => {
  const { productlist = {} } = getSKUs(state) || {};  
  return productlist;
}

export const getAccounts = (state) => {
  const { accounts = {} } = getState(state) || {};

  return accounts;
}

export const getSelectedAccount = (state) => {
  const { selectedAccount = {} } = getAccounts(state) || {};

  return selectedAccount;
}

export const getCart = (state) => {
  const {cart = {}} = getState(state) || {};
  return cart;
} 
export const getCartItems = (state) => {
  const {included = {}} = getCart(state);
  return included && included.items;
}
