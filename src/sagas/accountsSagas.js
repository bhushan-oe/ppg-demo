import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { put, takeLatest } from "redux-saga/effects";

const { accounts = {} } = actionTypes;
const { getAccounts } = accounts;

function* getAccountDetails({ payload: AccountData }) {
  try {
    yield put({ type: getAccounts, payload: { AccountData } });
  } catch (err) {
    console.log(err);
  }
}

function* setSelectedAccount({ selectedAccount }) {
  return null;
}

export function* accountsSaga() {
  console.log();
  yield takeLatest(sagaTypes.accounts.getAccounts, getAccountDetails);
  yield takeLatest(sagaTypes.accounts.setAccount, setSelectedAccount);
}
