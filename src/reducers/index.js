import accounts from "./accounts";
import authentication from "./authentication";
import jobs from "./jobs";
import orders from "./orders";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  accounts,
  authentication,
  jobs,
  orders,
});

export default reducers;
