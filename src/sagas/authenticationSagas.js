import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { put, takeLatest, call, takeLeading} from "redux-saga/effects";
import { LoginUser } from '../api/authenticationApi';
import { GetCustomerDetails, GetCustomerToken } from '../helper/moltin'

const { authentication = {} } = actionTypes;
const { login, logout, setUserDetails } = authentication;

function* handleLogin({ payload }) {
  const { history, user = null, pass = null } = payload;
  const resp = yield call(LoginUser,user, pass)
  if (resp.status === 200) {
    localStorage.setItem('AccessToken', resp.data.access_token)
    yield put({ type: login, payload: { user: resp.data} });

    const {data} = yield GetCustomerToken(user,pass);
    const customerdata =  yield GetCustomerDetails(data.id, data.token);
    
    yield put({type: setUserDetails, payload: { userDetails: customerdata}})
    history.push("/accounts");
  }
}

function* handleLogout() {
  yield put({ type: logout });
}

function* loginSaga() {
  yield takeLeading(sagaTypes.authentication.login, handleLogin);
}

function* logoutSaga() {
  yield takeLatest(sagaTypes.authentication.logout, handleLogout);
}

export { loginSaga, logoutSaga };