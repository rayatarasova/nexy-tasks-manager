import axios from 'axios';
import { ROOT_URL } from '../../../config.json';

export const fetchTasksRequest = () => {
  return axios.request({
    method: 'get',
    url: `${ROOT_URL}/tasks`
  });
}

export const postTasksRequest = (newTasks) => {
  return axios.request({
    method: 'post',
    url: `${ROOT_URL}/tasks`,
    data: newTasks
  });
}

export const putTasksRequest = ({ id, task }) => {
  return axios.request({
    method: 'put',
    url: `${ROOT_URL}/tasks/${id}`,
    data: task
  });
}

export const deleteTasksRequest = (id) => {
  return axios.request({
    method: 'delete',
    url: `${ROOT_URL}/tasks/${id}`,
  });
}


