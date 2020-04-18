import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { put, call, takeLeading } from "redux-saga/effects";
import { getRole } from "../api/getRoleApi";
const { role = {} } = actionTypes;
const { getRoleOfCustomer, resetRoleOfCustomer } = role;

function* getRoleValue({ payload }) {
  try {
    const { id, customer_id } = payload;
    const resp = yield call(getRole, id, customer_id);
    if (resp.status === 200) {
      yield put({ type: getRoleOfCustomer, payload: { customerRole: resp.data.data.name } });
    }
  } catch (err) {
    console.log(err);
  }
}

function* resetRoleValue() {
  try {
    yield put({ type: resetRoleOfCustomer });
  } catch (err) {
    console.log(err);
  }
}

function* getRoleSagas() {
  yield takeLeading(sagaTypes.role.getRoleOfCustomer, getRoleValue);
  yield takeLeading(sagaTypes.role.resetRoleOfCustomer, resetRoleValue);
}

export { getRoleSagas };
