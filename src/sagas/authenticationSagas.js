import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { put, takeLatest } from "redux-saga/effects";

const { authentication = {} } = actionTypes;
const { login, logout } = authentication;

function* handleLogin({ payload }) {
  const { user = null, pass = null } = payload;
  yield put({ type: login, payload: { user, pass } });
}

function* handleLogout() {
  yield put({ type: logout });
}

function* loginSaga() {
  yield takeLatest(sagaTypes.authentication.login, handleLogin);
}

function* logoutSaga() {
  yield takeLatest(sagaTypes.authentication.logout, handleLogout);
}

export { loginSaga, logoutSaga };
