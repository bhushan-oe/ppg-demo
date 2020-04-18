import accounts from "./accounts";
import authentication from "./authentication";
import jobs from "./jobs";
import orders from "./orders";
import skus from './skus';
import role from "./role";
import cart from './cart';

import { combineReducers } from "redux";

export const reducers = combineReducers({
  accounts,
  authentication,
  jobs,
  orders,
  skus,
  role,
  cart
});

export default reducers;
