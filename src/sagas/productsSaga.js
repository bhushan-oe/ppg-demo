import { GetProduct, GetFlowEntry, getFile } from "../helper/moltin";
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
    const imageurls = yield all(
      productDetails.map(item =>{
        return getFile(item.data.relationships.main_image.data.id)
      })
    )
    productDetails.map((item, index)=>{
      const imageurl = imageurls[index].data.link.href;
      const amount = cleanSKUArr[index].price
      if (item.data && item.data.id) {
        skuProducts[item.data.id] = {amount, imageurl, ...item.data};
      }
      return;
    })
    yield put({ type: setSKUProductList, payload: { skuProducts } });

  } catch (err) {
    console.log(err);
  }
}

export function* productSaga() {
  yield takeLatest(sagaTypes.products.getProductList, getProducts);
}
