import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { put, takeLatest, call } from "redux-saga/effects";
import { LoginUser } from "../api/authenticationApi";
import { GetCustomerDetails, getMoltin } from "../helper/moltin";

const { authentication = {} } = actionTypes;
const { login, logout } = authentication;

function* handleLogin({ payload }) {
  const { user = null, pass = null } = payload;
  const resp = yield call(LoginUser, user, pass);
  if (resp.status === 200) {
    localStorage.setItem("AccessToken", resp.data.access_token);
    yield put({ type: login, payload: { user: resp.data } });
    window.location.href = "/accounts"; // to fix
    //const Moltin = getMoltin(resp.data.access_token);
    //yield call(GetCustomerDetails(resp.data.access_token, Moltin));
  }
}

function* handleLogout() {
  yield put({ type: logout });
}

export function* authenticationSaga() {
  yield takeLatest(sagaTypes.authentication.login, handleLogin);
  yield takeLatest(sagaTypes.authentication.logout, handleLogout);
}
