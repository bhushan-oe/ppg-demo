import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { getUserDetails, getSelectedJob } from "./selectors";
import { put, select, takeLatest } from "redux-saga/effects";
import { GetFlowEntries } from "../helper/moltin";

const { orders = {} } = actionTypes;
const { clearOrdersList, setOrdersList } = orders;

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
    case "approvalDone":
      const { orders_approved_f = "" } = selectedJob;
      return (isApprover && orders_approved_f) || ordersApprovedSlug;
    case "approvalPending":
      const { orders_pending_f = "" } = selectedJob;
      return (isApprover && orders_pending_f) || ordersPendingSlug;
    case "ordersPending":
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
    const { filter = "ordersApproved" } = payload;
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

    yield { put: setOrdersList, payload: { orders } };
  } catch (err) {
    console.log(err);
  }
}

export function* ordersSagas() {
  yield takeLatest(sagaTypes.orders.clearOrdersList, clearOrders);
  yield takeLatest(sagaTypes.orders.getOrdersList, getOrders);
}
