import axios from 'axios';
import { loginUrl } from './apiUrls';

export function LoginUser (username, password) {
  return axios.post(loginUrl, {username, password});
}