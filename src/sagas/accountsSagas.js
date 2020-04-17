import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { put, takeLatest, all } from "redux-saga/effects";
import { GetFlowEntry } from "../helper/moltin";

const { accounts = {}, jobs = {} } = actionTypes;
const { getAccounts, resetAccount, setAccount } = accounts;
const { resetJob } = jobs;

function* getAccountDetails({ payload }) {
  const {
    AccountList: { AccountOrganizationIds },
  } = payload;
  try {
    const customerdata = yield all(
      (
        (Array.isArray(AccountOrganizationIds) &&
          AccountOrganizationIds.length &&
          AccountOrganizationIds) ||
        []
      ).map((items) => items && GetFlowEntry("organizations", items.id))
    );
    yield put({ type: getAccounts, payload: { customerdata } });
  } catch (err) {
    console.log(err);
  }
}

function* resetSelectedAccount() {
  try {
    yield put({ type: resetAccount });
    yield put({ type: resetJob });
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

export function* accountsSagas() {
  yield takeLatest(sagaTypes.accounts.getAccounts, getAccountDetails);
  yield takeLatest(sagaTypes.accounts.setAccount, setSelectedAccount);
  yield takeLatest(sagaTypes.accounts.resetAccount, resetSelectedAccount);
}
