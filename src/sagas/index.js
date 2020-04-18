import { all } from "redux-saga/effects";
import { authenticationSagas } from "./authenticationSagas";
import { accountsSagas } from "./accountsSagas";
import { jobsSagas } from "./jobsSagas";
import { ordersSagas } from "./ordersSagas";
import { productSaga} from "./productsSaga";
import { getRoleSagas } from "./getRoleSagas";

export default function* rootSaga() {
  yield all([
    authenticationSagas(),
    accountsSagas(),
    jobsSagas(),
    ordersSagas(),
    productSaga(),
    getRoleSagas()
  ]);
}
