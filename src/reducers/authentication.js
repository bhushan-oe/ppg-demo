import actionTypes from "../actions/actionTypes";

export const initialState = {
  logged: false,
  user: null,
};

export default function authentication(state = initialState, action) {
  const { authentication = {} } = actionTypes;
  const { logout, login } = authentication;
  const { type, payload = {} } = action;

  switch (type) {
    case login:
      return { ...state, logged: true, user: payload.user };
    case logout:
      return { ...state, logged: false, user: null };
    default:
      return state;
  }
}
