import actionTypes from "../actions/actionTypes";
import { put, takeLatest } from "redux-saga/effects";

const { accounts = {} } = actionTypes;
const { getAccounts } = accounts;

function* getAccountDetails({payload: AccountData}) {
  try {
    yield put({ type: getAccounts, payload:{AccountData}});
  } catch(err) {
    console.log(err);
  }
}
  
function* accountsSaga() {
  yield takeLatest("GET_ACCOUNT_SAGA_ACTION", getAccountDetails);
}

export { accountsSaga };