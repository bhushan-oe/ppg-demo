import accounts from "./accounts";
import authentication from "./authentication";
import jobs from "./jobs";
import orders from "./orders";
import skus from './skus';
import { combineReducers } from "redux";

export const reducers = combineReducers({
  accounts,
  authentication,
  jobs,
  orders,
  skus
});

export default reducers;
