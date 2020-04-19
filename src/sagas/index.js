import { all } from "redux-saga/effects";
import { authenticationSagas } from "./authenticationSagas";
import { accountsSagas } from "./accountsSagas";
import { jobsSagas } from "./jobsSagas";
import { ordersSagas } from "./ordersSagas";
import { getRoleSagas } from "./getRoleSagas";
import { approveOrderSagas } from "./approveOrderSagas";

export default function* rootSaga() {
  yield all([
    authenticationSagas(),
    accountsSagas(),
    jobsSagas(),
    ordersSagas(),
    getRoleSagas(),
    approveOrderSagas()
  ]);
}
