import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { put, takeLatest } from "redux-saga/effects";
import AccountData from "../components/shared/AccountData";

const { accounts = {} } = actionTypes;
const { getAccounts } = accounts;

function* getAccountDetails({payload: AccountData}) {
  console.log("here")
  try {
    console.log("in watchers")
    yield put({ type: getAccounts, AccountData});
  } catch(err) {
    console.log(err);
  }
  
  // const { customerId = null } = payload;
}
  
function* accountsSaga() {
  console.log("in saga")
  yield takeLatest(sagaTypes.accounts.getAccounts, getAccountDetails);
}

export { accountsSaga };