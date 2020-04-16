import accounts from "./accounts";
import authentication from "./authentication";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  accounts,
  authentication,
});

export default reducers;
