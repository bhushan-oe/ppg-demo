import { all } from "redux-saga/effects";
import { loginSaga, logoutSaga } from "./authenticationSagas";

export default function* rootSaga() {
  yield all([loginSaga(), logoutSaga()]);
}
