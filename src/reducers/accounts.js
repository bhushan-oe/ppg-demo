import actionTypes from "../actions/actionTypes";

export const initialState = {
  AccountsData: null
};

export default function accounts(state = initialState, action) {
  const { accounts = {} } = actionTypes;
  const { getAccounts } = accounts;
  const { type,payload } = action;

  switch (type) {
    case getAccounts:
      return { ...state, AccountsData: payload.AccountData  };
    default:
      return state;
  }
}
