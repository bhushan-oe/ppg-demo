export const sagaTypes = {
  authentication: {
    login: "AUTH_LOGIN_SAGA",
    logout: "AUTH_LOGOUT_SAGA",
  },
  accounts: {
    getAccounts: "GET_ACCOUNTS_SAGA",
    resetAccount: "RESET_SELECTED_ACCOUNT_SAGA",
    setAccount: "SET_SELECTED_ACCOUNT_SAGA",
  },
  jobs: {
    getJobs: "GET_JOBS_SAGA",
    resetJob: "RESET_SELECTED_JOB_SAGA",
    setJob: "SET_SELECTED_JOB_SAGA",
  },
  orders: {
    checkout: "CHECKOUT_SAGA",
    clearOrdersList: "CLEAR_ORDERSLIST_SAGA",
    getOrdersList: "GET_ORDERSLIST_SAGA",
  },
  products: {
    getProductList: "GET_PRODUCT_SAGA"
  },
  role: {
    getRoleOfCustomer: "GET_ROLE_SAGA",
    resetRoleOfCustomer: "RESET_ROLE_SAGA"
  },
  approveOrder: {
    approveOrderById: "APPROVE_ORDER_SAGA"
  },
  cart : {
    addToCart : "ADD_TO_CART",
    getCart : "GET_CART"
  }
};

export default sagaTypes;
