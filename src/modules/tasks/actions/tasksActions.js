import { 
  FETCH_TASKS,
  FETCH_TASKS_SUCCESS,
  POST_TASKS,
  PUT_TASKS,
  DELETE_TASKS
} from "../constants/tasksConstants";

export function fetchTasksAction() {
  return { type: FETCH_TASKS };
}

export function fetchTasksSuccessAction(payload) {
  return { type: FETCH_TASKS_SUCCESS, payload };
}

export function postsTasksAction(payload) {
  return { type: POST_TASKS, payload };
}

export function putTasksAction(payload) {
  return { type: PUT_TASKS, payload };
}

export function deleteTasksAction(payload) {
  return { type: DELETE_TASKS, payload };
}