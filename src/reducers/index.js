import authentication from "./authentication";
import accounts from "./accounts";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  authentication,
  accounts
});

export default reducers;
