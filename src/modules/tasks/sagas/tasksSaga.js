import { FETCH_TASKS, POST_TASKS, DELETE_TASKS } from '../constants/tasksConstants';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTasksRequest, postTasksRequest, deleteTasksRequest } from '../api/tasksApi';
import { fetchTasksAction, fetchTasksSuccessAction } from '../actions/tasksActions';

export function* fetchTasks() {
  try {
    const { data } = yield call(fetchTasksRequest);
    yield put(fetchTasksSuccessAction(data));
  } catch (error) {
    console.log('fetchTasks error:', error.message);
  }
}

export function* watchFetchTasks() {
  yield takeEvery(FETCH_TASKS, fetchTasks)
}

export function* createTasks({ payload }) {
  try {
    yield call(postTasksRequest, payload);
    yield put(fetchTasksAction());
  } catch (error) {
    console.log('createTasks error:', error);
  }
}

export function * watchPostTasks() {
  yield takeEvery(POST_TASKS, createTasks)
}

export function* deleteTask({ payload }) {
  try {
    yield call(deleteTasksRequest, payload);
    yield put(fetchTasksAction());
  } catch (error) {
    console.log('deleteTodo Error:', error.message);
  }
}

export function * watchDeleteTasks() {
  yield takeEvery(DELETE_TASKS, deleteTask)
}
