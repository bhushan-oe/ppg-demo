import actionTypes from "../actions/actionTypes";

export const initialState = {
  orderStatus: null,
};

export default function role(state = initialState, action) {
  const { approveOrder = {} } = actionTypes;
  const { approveOrderById } = approveOrder;
  const { type, payload } = action;

  switch (type) {
    case approveOrderById:
      return { ...state, orderStatus: payload.orderStatus };
    default:
      return state;
  }
}
