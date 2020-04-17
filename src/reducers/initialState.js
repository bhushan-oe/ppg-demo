import { initialState as accountsInitialState } from "./accounts";
import { initialState as authenticationInitialState } from "./authentication";
import { initialState as jobsInitialState } from "./jobs";

export const initialState = {
  accounts: accountsInitialState,
  authentication: authenticationInitialState,
  jobs: jobsInitialState,
};

export default initialState;
