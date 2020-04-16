export const sagaTypes = {
  authentication: {
    login: "AUTH_LOGIN_SAGA",
    logout: "AUTH_LOGOUT_SAGA",
  },
  accounts: {
    getAccounts: "GET_ACCOUNTS_ACTION"
  },
  orders: {
    checkout: "CHECKOUT_SAGA"
  }
};

export default sagaTypes;
