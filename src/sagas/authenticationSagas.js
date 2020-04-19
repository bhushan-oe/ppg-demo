import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { put, takeLatest, call, takeLeading } from "redux-saga/effects";
import { LoginUser } from "../api/authenticationApi";
import { GetCustomerDetails, GetCustomerToken } from "../helper/moltin";

const { authentication = {} } = actionTypes;
const { login, logout, setUserDetails } = authentication;

function* handleLogin({ payload }) {
  try {
    const { history, user = null, pass = null } = payload;
    const resp = yield call(LoginUser, user, pass);
    if (resp.status === 200) {
      localStorage.setItem("AccessToken", resp.data.access_token);
      yield put({ type: login, payload: { user: resp.data } });

      //const { data } = yield GetCustomerToken(user, pass);
      const customerdata = yield GetCustomerDetails(resp.data.customer_id);

      yield put({
        type: setUserDetails,
        payload: { userDetails: customerdata },
      });
      history.push("/accounts");
    }
  } catch (err) {
    console.log(err);
  }
}

function* handleLogout() {
  yield put({ type: logout });
}

function* authenticationSagas() {
  yield takeLeading(sagaTypes.authentication.login, handleLogin);
  yield takeLatest(sagaTypes.authentication.logout, handleLogout);
}

export { authenticationSagas };
