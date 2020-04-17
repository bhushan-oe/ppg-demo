import accounts from "./accounts";
import authentication from "./authentication";
import jobs from "./jobs";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  accounts,
  authentication,
  jobs,
});

export default reducers;
