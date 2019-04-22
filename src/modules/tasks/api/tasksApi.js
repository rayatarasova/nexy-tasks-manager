import axios from 'axios';
const ROOT_URL = 'https://damp-eyrie-62274.herokuapp.com';

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

export const putTasksRequest = (task) => {
  return axios.request({
    method: 'put',
    url: `${ROOT_URL}/tasks/${task.task_id}`,
    data: task
  });
}

export const deleteTasksRequest = (id) => {
  return axios.request({
    method: 'delete',
    url: `${ROOT_URL}/tasks/${id}`,
  });
}


