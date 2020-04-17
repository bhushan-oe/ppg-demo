import actionTypes from "../actions/actionTypes";

export const initialState = {
  ordersList: [],
};

export default function accounts(state = initialState, action) {
  const { orders = {} } = actionTypes;
  const { clearOrdersList, setOrdersList } = orders;
  const { type, payload } = action;

  switch (type) {
    case clearOrdersList:
      return { ...state, ordersList: [] };
    case setOrdersList:
      const { orders = [] } = payload;
      return { ...state, ordersList: orders };
    default:
      return state;
  }
}
