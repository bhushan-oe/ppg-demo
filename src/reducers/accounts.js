import actionTypes from "../actions/actionTypes";

export const initialState = {
  AccountsData: null,
  selectedAccount: null,
};

export default function accounts(state = initialState, action) {
  const { accounts = {} } = actionTypes;
  const { getAccounts, setAccount } = accounts;
  const { type, payload } = action;

  switch (type) {
    case getAccounts:
      return { ...state, AccountsData: payload.customerdata.data };
    case setAccount:
      return { ...state, selectedAccount: payload.selectedAccount };
    default:
      return state;
  }
}
