const actionTypes = {
  authentication: {
    login: "AUTH_LOGIN_ACTION",
    logout: "AUTH_LOGOUT_ACTION",
    setUserDetails: "SET_USER_DETAILS",
  },
  accounts: {
    getAccounts: "GET_ACCOUNTS_ACTION",
    resetAccount: "RESET_SELECTED_ACCOUNT_ACTION",
    setAccount: "SET_SELECTED_ACCOUNT_ACTION",
  },
  jobs: {
    getJobs: "GET_JOBS_ACTION",
    resetJob: "RESET_SELECTED_JOB_ACTION",
    setJob: "SET_SELECTED_JOB_ACTION",
  },
  orders: {
    clearOrdersList: "CLEAR_ORDERSLIST_ACTION",
    setOrdersList: "SET_ORDERSLIST_ACTION",
  },
  role: {
    getRoleOfCustomer: "GET_ROLE_ACTION",
    resetRoleOfCustomer: "RESET_ROLE_ACTION"
  }
};

export default actionTypes;
