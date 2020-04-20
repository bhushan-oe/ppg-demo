import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { put, call, takeLeading } from "redux-saga/effects";
import { approveOrderOfUserById } from "../api/approveOrderApi";
const { approveOrder = {} } = actionTypes;
const { approveOrderById} = approveOrder;

function* approveOrderOfUser({ payload }) {
    const { orders: { getOrdersList} } = sagaTypes;
  try {
    const resp = yield call(approveOrderOfUserById, payload);
    if (resp.status === 200) {
      yield put({ type: approveOrderById, payload: { orderStatus: "STATUS" } });
      yield put({ type: getOrdersList, payload: {filter: "approvalPending" }});
    }
  } catch (err) {
    console.log(err);
  }
}

function* approveOrderSagas() {
  yield takeLeading(sagaTypes.approveOrder.approveOrderById, approveOrderOfUser);
}

export { approveOrderSagas };
