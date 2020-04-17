import actionTypes from "../actions/actionTypes";

export const initialState = {
  logged: false,
  user: null,
  userDetails: null
};

export default function authentication(state = initialState, action) {
  const { authentication = {} } = actionTypes;
  const { logout, login, setUserDetails } = authentication;
  const { type, payload = {} } = action;
  switch (type) {
    case login:
      return { ...state, logged: true, user: payload.user };
    case logout:
      return { ...state, logged: false, user: null };
    case setUserDetails:
      return { ...state, logged: true, userDetails: payload.userDetails };
    default:
      return state;
  }
}
