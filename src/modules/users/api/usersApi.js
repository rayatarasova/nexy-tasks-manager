import axios from 'axios';
import { ROOT_URL } from '../../../config.json';

export const fetchUsersRequest = () => {
  return axios.request({
    method: 'get',
    url: `${ROOT_URL}/users`
  });
}

export const postUsersRequest = (newUser) => {
  return axios.request({
    method: 'post',
    url: `${ROOT_URL}/users`,
    data: newUser
  });
}


