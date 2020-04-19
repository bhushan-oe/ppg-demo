import axios from 'axios';
import {  addToCart } from './apiUrls';

export function AddToCart (cartItems, orgId, jobId, custId) {
  const addToCartApi = `${addToCart}?organization_id=${orgId}&job_id=${jobId}&customer_id=${custId}`;
  const accessToken = localStorage.getItem('AccessToken');

  const header = {
      'Authorization': `Bearer ${accessToken}`
  }
  return axios.post(addToCartApi, {cart_items: cartItems}, {headers : header});
}

export function GetCart (orgId, jobId, custId) {
    const getCartApi = `${addToCart}?organization_id=${orgId}&job_id=${jobId}&customer_id=${custId}`;
    const accessToken = localStorage.getItem('AccessToken');
  
    const header = {
        'Authorization': `Bearer ${accessToken}`
    }
    return axios.get(getCartApi, {headers : header});
  
}