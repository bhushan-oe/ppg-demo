import { all } from "redux-saga/effects";
import { authenticationSaga } from "./authenticationSagas";
import { accountsSaga } from "./accountsSagas";

export default function* rootSaga() {
  yield all([authenticationSaga(), accountsSaga()]);
}
