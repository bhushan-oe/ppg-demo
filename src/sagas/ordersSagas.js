import { GetFlowEntries, GetFlowEntry, GetOrder } from "../helper/moltin";
import { getUserDetails, getSelectedJob, getSelectedAccount } from "./selectors";
import {
  ORDER_STATUS_APPROVAL_DONE,
  ORDER_STATUS_APPROVAL_PENDING,
  ORDER_STATUS_ORDERS_APPROVED,
  ORDER_STATUS_ORDERS_PENDING,
} from "../components/orders/ordersStatus";
import { put, select, takeLatest,call, all } from "redux-saga/effects";
import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { submitOrder} from '../api/orders'


const { orders = {} } = actionTypes;
const { clearOrdersList, setOrdersList, checkout } = orders;

const generateFlowSlug = (
  filter = "ordersApproved",
  type = "customer",
  id = "",
  selectedJob = {}
) => {
  const isApprover =
    ((typeof type === "string" && type) || "").toString().toLowerCase() ===
    "approver";
  const ordersApprovedSlug = `${id}_orders_approved_f`;
  const ordersPendingSlug = `${id}_orders_pending_f`;

  switch (filter) {
    case ORDER_STATUS_APPROVAL_DONE:
      const { orders_approved_f = "" } = selectedJob;
      return (isApprover && orders_approved_f) || ordersApprovedSlug;
    case ORDER_STATUS_APPROVAL_PENDING:
      const { orders_pending_f = "" } = selectedJob;
      return (isApprover && orders_pending_f) || ordersPendingSlug;
    case ORDER_STATUS_ORDERS_PENDING:
      return ordersPendingSlug;
    default:
      return ordersApprovedSlug;
  }
};

function* clearOrders() {
  try {
    yield put({ type: clearOrdersList });
  } catch (err) {
    console.log(err);
  }
}

function* getOrders({ payload }) {
  try {
    const { filter = ORDER_STATUS_ORDERS_APPROVED } = payload;
    const userDetails = yield select(getUserDetails);
    const selectedJob = yield select(getSelectedJob);
    const { data = {} } = userDetails || {};
    const { id, token, type } = data;
    if (!id) {
      return null;
    }
    const slug = generateFlowSlug(filter, type, id, selectedJob);
    const ordersData = yield GetFlowEntries(slug, token);
    const { data: orders = [] } = ordersData;

    const getOrderDetails = yield all(
      (
        (Array.isArray(orders) &&
        orders.length &&
        orders) ||
        []
      ).map((items) => items && GetOrder(items.order_id))
    );

    yield put({ type: setOrdersList, payload: { getOrderDetails } });
  } catch (err) {
    console.log(err);
  }
}

function* checkoutSaga({payload, history}){
  try {

    const userDetails = yield select(getUserDetails);
    const selectedAccount = yield select(getSelectedAccount);
    const selectedJob = yield select(getSelectedJob);
    const {id: customerId = null } = userDetails && userDetails.data || {};
    const resp = yield call(submitOrder, payload, selectedAccount.id, selectedJob.id, customerId);
    const {data} = resp;
    history.push('/thankyou?order_id='+ data.order_id);
   
  } catch (err) {
    console.log(err);
  }
} 

export function* ordersSagas() {
  yield takeLatest(sagaTypes.orders.clearOrdersList, clearOrders);
  yield takeLatest(sagaTypes.orders.getOrdersList, getOrders);
  yield takeLatest(sagaTypes.orders.checkout, checkoutSaga);
}
