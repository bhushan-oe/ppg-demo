import { initialState as accountsInitialState } from "./accounts";
import { initialState as authenticationInitialState } from "./authentication";

export const initialState = {
  accounts: accountsInitialState,
  authentication: authenticationInitialState,
};

export default initialState;
