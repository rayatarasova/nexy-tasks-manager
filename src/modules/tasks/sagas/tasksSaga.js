import { FETCH_TASKS, POST_TASKS, DELETE_TASKS } from '../constants/tasksConstants';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTasksRequest, postTasksRequest, deleteTasksRequest } from '../api/tasksApi';
import { fetchTasksAction, fetchTasksSuccessAction } from '../actions/tasksActions';
import { showNotificationAction } from '../../notification/actions/notificationActions';

export function* fetchTasks() {
  try {
    const { data } = yield call(fetchTasksRequest);
    yield put(fetchTasksSuccessAction(data));
  } catch (error) {
    console.log('fetchTasks error:', error.message);
    yield put(showNotificationAction({ type: 'danger', text: error.message }));
  }
}

export function* watchFetchTasks() {
  yield takeEvery(FETCH_TASKS, fetchTasks)
}

export function* createTasks({ payload }) {
  try {
    yield call(postTasksRequest, payload);
    yield put(fetchTasksAction());
    yield put(showNotificationAction({ type: 'success', text: 'Task has been created' }));
  } catch (error) {
    console.log('createTasks error:', error);
    yield put(showNotificationAction({ type: 'danger', text: error.message }));
  }
}

export function * watchPostTasks() {
  yield takeEvery(POST_TASKS, createTasks)
}

export function* deleteTask({ payload }) {
  try {
    yield call(deleteTasksRequest, payload);
    yield put(fetchTasksAction());
    yield put(showNotificationAction({ type: 'success', text: 'Task has been deleted' }));
  } catch (error) {
    console.log('deleteTodo Error:', error.message);
    yield put(showNotificationAction({ type: 'danger', text: error.message }));
  }
}

export function * watchDeleteTasks() {
  yield takeEvery(DELETE_TASKS, deleteTask);
}
