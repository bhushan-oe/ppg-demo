
import actionTypes from "../actions/actionTypes";

export const initialState = {
};

export default function cart(state = initialState, action) {
  const { cart = {} } = actionTypes;
   const { setCart } = cart;
  const { type, payload={} } = action;
    const { cart: cartdata={} } = payload;
  switch (type) {
    case setCart:
      return { ...state, ...cartdata };
    default:
      return state;
  }
}
