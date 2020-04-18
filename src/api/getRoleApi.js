import axios from 'axios';
import { getRoleById } from './apiUrls';

export function getRole (jobId, custId) {
  const getRoleApi = `${getRoleById}?job_id=${jobId}&customer_id=${custId}`;
  const accessToken = localStorage.getItem('AccessToken');

  const header = {
      'Authorization': `Bearer ${accessToken}`
  }
  return axios.get(getRoleApi, {headers : header});
}