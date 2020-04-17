import { all } from "redux-saga/effects";
import { authenticationSaga } from "./authenticationSagas";
import { accountsSaga } from "./accountsSagas";
import { jobsSaga } from "./jobsSagas";

export default function* rootSaga() {
  yield all([authenticationSaga(), accountsSaga(), jobsSaga()]);
}
