import { GetFlowEntries, GetFlowEntry } from "../helper/moltin";
import { getUserDetails, getSelectedJobProductIds } from "./selectors";

import { put, select, takeLatest, all } from "redux-saga/effects";
import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";

const { orders = {} } = actionTypes;



function* getProducts({ payload }) {
  try {
    //const {  } = payload;
    const userDetails = yield select(getUserDetails);
    const productIds = yield select(getSelectedJobProductIds);
    const { data = {} } = userDetails || {};
    const { id, token, type } = data;
    if (!id) {
      return null;
    }
    //get details for each productIds 
    const skuArr = yield all(productIds.map(id=>{
      return GetFlowEntry("job_products", id);
    }))

    console.log(skuArr);
    //const slug = generateFlowSlug(filter, type, id, selectedJob);
     
    // const { data: orders = [] } = ordersData;

    // yield put({ type: setOrdersList, payload: { orders } });
  } catch (err) {
    console.log(err);
  }
}

export function* productSaga() {
  //yield takeLatest(sagaTypes.orders.clearOrdersList, clearOrders);
  yield takeLatest(sagaTypes.products.getProductList, getProducts);
}
