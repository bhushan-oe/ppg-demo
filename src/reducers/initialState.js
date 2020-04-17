import { initialState as accountsInitialState } from "./accounts";
import { initialState as authenticationInitialState } from "./authentication";
import { initialState as jobsInitialState } from "./jobs";
import { initialState as ordersInitialState } from "./jobs";

export const initialState = {
  accounts: accountsInitialState,
  authentication: authenticationInitialState,
  jobs: jobsInitialState,
  orders: ordersInitialState,
};

export default initialState;
