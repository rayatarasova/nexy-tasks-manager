import axios from 'axios';
const ROOT_URL = 'https://damp-eyrie-62274.herokuapp.com';

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


