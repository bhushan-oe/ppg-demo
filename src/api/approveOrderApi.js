import axios from 'axios';
import { approveOrder } from './apiUrls';

export function approveOrderOfUserById (orderId) {
  const approveOrderApi = `${approveOrder}?order_id=${orderId}`;
  const accessToken = localStorage.getItem('AccessToken');

  const header = {
      'Authorization': `Bearer ${accessToken}`
  }
  return axios.post(approveOrderApi, null, {headers : header});
}