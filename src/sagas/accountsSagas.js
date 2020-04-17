import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { put, takeLatest, all } from "redux-saga/effects";
import { GetOrganisationList } from '../helper/moltin'

const { accounts = {} } = actionTypes;
const { getAccounts, setAccount } = accounts;

function* getAccountDetails({ payload }) {
  const {AccountList: {AccountOrganizationIds} } = payload;
  try {
    const customerdata = yield all(
      AccountOrganizationIds.map(items => {
        return GetOrganisationList("organizations", items.id);
      })
    )
    yield put({ type: getAccounts, payload: { customerdata } });
  }catch(err){
    console.log(err)
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
