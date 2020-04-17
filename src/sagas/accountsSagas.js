import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { put, takeLatest } from "redux-saga/effects";

const { accounts = {} } = actionTypes;
const { getAccounts, setAccount } = accounts;

function* getAccountDetails({ payload: AccountData }) {
  try {
    yield put({ type: getAccounts, payload: { AccountData } });
  } catch (err) {
    console.log(err);
  }
}

function* setSelectedAccount({ payload = {} }) {
  try {
    const { history, selectedAccount = null } = payload;
    yield put({ type: setAccount, payload: { selectedAccount } });
    history.push("/jobs");
  } catch (err) {
    console.log(err);
  }
}

export function* accountsSaga() {
  yield takeLatest(sagaTypes.accounts.getAccounts, getAccountDetails);
  yield takeLatest(sagaTypes.accounts.setAccount, setSelectedAccount);
}
