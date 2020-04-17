export const sagaTypes = {
  authentication: {
    login: "AUTH_LOGIN_SAGA",
    logout: "AUTH_LOGOUT_SAGA",
  },
  accounts: {
    getAccounts: "GET_ACCOUNTS_SAGA",
    setAccount: "SET_ACCOUNT_SAGA",
  },
  jobs: {
    getJobs: "GET_JOBS_SAGA",
    setJob: "SET_JOB_SAGA",
  },
  orders: {
    checkout: "CHECKOUT_SAGA",
  },
};

export default sagaTypes;
