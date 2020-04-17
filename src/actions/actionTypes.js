const actionTypes = {
  authentication: {
    login: "AUTH_LOGIN_ACTION",
    logout: "AUTH_LOGOUT_ACTION",
    setUserDetails: "SET_USER_DETAILS"
  },
  accounts: {
    getAccounts: "GET_ACCOUNTS_ACTION",
    setAccount: "SET_SELECTED_ACCOUNT_ACTION",
  },
  jobs: {
    getJobs: "GET_JOBS_ACTION",
    setJob: "SET_SELECTED_JOB_ACTION",
  },
};

export default actionTypes;
