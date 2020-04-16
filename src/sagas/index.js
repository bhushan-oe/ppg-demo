import { all } from "redux-saga/effects";
import { loginSaga, logoutSaga } from "./authenticationSagas";
import { accountsSaga } from "./accountsSagas";

export default function* rootSaga() {
  yield all([
    loginSaga(),
    logoutSaga(),
    accountsSaga()
  ]);
}
