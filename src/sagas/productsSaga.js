import { GetProduct, GetFlowEntry } from "../helper/moltin";
import { getUserDetails, getSelectedJobProductIds } from "./selectors";

import { put, select, takeLatest, all } from "redux-saga/effects";
import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";

const { skus = {} } = actionTypes;



function* getProducts({ payload }) {

  try {
    //const {  } = payload;
    const userDetails = yield select(getUserDetails);
    const productIds = yield select(getSelectedJobProductIds);
    const { data = {} } = userDetails || {};
    const { id, token, type } = data;
    const {setSKUList, setSKUProductList} = skus;
    if (!id) {
      return null;
    }
    //get details for each productIds 
    const SKUs = yield all(productIds.map(id=>{
      return GetFlowEntry("job_products", id);
    }))

    const cleanSKUArr = SKUs.map(item=>{
      const { sku_id, id, price } = item.data;
      return { sku_id, id, price };
    })
    
    yield put({ type: setSKUList, payload: { skulist: cleanSKUArr } });
    
    //get product details from SKUids
    const productDetails = yield all(cleanSKUArr.map(item=>{
      return GetProduct(item.sku_id, token);
    }))
    const skuProducts = {};
    productDetails.map(item=>{
      if (item.data && item.data.id) {
        skuProducts[item.data.id] = item.data;
      }
      return;
    })
    yield put({ type: setSKUProductList, payload: { skuProducts } });
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
