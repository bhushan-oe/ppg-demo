import actionTypes from "../actions/actionTypes";

export const initialState = {
  customerRole: null,
};

export default function role(state = initialState, action) {
  const { role = {} } = actionTypes;
  const { getRoleOfCustomer, resetRoleOfCustomer } = role;
  const { type, payload } = action;

  switch (type) {
    case getRoleOfCustomer:
      return { ...state, customerRole: payload.customerRole };
    case resetRoleOfCustomer:
      return { ...state, customerRole: null };
    default:
      return state;
  }
}
