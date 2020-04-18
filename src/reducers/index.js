import accounts from "./accounts";
import authentication from "./authentication";
import jobs from "./jobs";
import orders from "./orders";
import skus from './skus';
import role from "./role";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  accounts,
  authentication,
  jobs,
  orders,
  skus,
  role
});

export default reducers;
