import actionTypes from "../actions/actionTypes";

export const initialState = {
  orders: [],
};

export default function accounts(state = initialState, action) {
  const { orders = {} } = actionTypes;
  const { clearOrdersList, getOrdersList } = orders;
  const { type, payload } = action;

  switch (type) {
    case clearOrdersList:
      return { ...state, orders: [] };
    case getOrdersList:
      return { ...state, orders: payload };
    default:
      return state;
  }
}
