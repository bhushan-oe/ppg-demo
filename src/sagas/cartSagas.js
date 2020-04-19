import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { call, takeLatest, put, select } from "redux-saga/effects";
import { getUserDetails, getSelectedJob, getSelectedAccount } from "./selectors";
import { AddToCart, GetCart} from '../api/addToCart'
const {  cart = {} } = actionTypes;



function* addToCart({ payload = {} }) {
  try {

    const userDetails = yield select(getUserDetails);
    const selectedAccount = yield select(getSelectedAccount);
    const selectedJob = yield select(getSelectedJob);
    const { history, cartItems = {} } = payload;
    const cartItemsArr = Object.keys(cartItems).map(function(e) {
        const {sku_id:sku, price, quantity } = cartItems[e]
        return {sku, price, quantity };
      })
    const resp = yield call(AddToCart,cartItemsArr, selectedAccount.id, selectedJob.id, userDetails.data.id);
 
    history.push("/checkout");

  } catch (err) {
    console.log(err);
  }
}

function* getCart() {
    try {

        const userDetails = yield select(getUserDetails);
        const selectedAccount = yield select(getSelectedAccount);
        const selectedJob = yield select(getSelectedJob);
        const {id: customerId = null } = userDetails && userDetails.data || {};
        const resp = yield call(GetCart, selectedAccount.id, selectedJob.id, customerId);
     
        yield put({
            type: cart.setCart,
            payload: { cart: resp.data },
          });

      } catch (err) {
        console.log(err);
      }
}

export function* cartSagas() {
  yield takeLatest(sagaTypes.cart.addToCart, addToCart);
  yield takeLatest(sagaTypes.cart.getCart, getCart);
  }
