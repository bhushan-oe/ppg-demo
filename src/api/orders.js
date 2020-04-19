import axios from 'axios';
import {  orders } from './apiUrls';

export function submitOrder (address, orgId, jobId, custId) {
    const addToCartApi = `${orders}`;
    const accessToken = localStorage.getItem('AccessToken');
  
    const header = {
        'Authorization': `Bearer ${accessToken}`
    }

    return axios.post(addToCartApi, {...address, 
        organization_id: orgId,
        job_id: jobId,
        "role": "buyer",
        customer_id: custId
    }, {headers : header});
  }