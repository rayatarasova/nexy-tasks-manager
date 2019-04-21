import { FETCH_USERS, POST_USERS } from '../constants/usersConstants';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsersRequest, postUsersRequest } from '../api/usersApi';
import { fetchUsersAction, fetchUsersSuccessAction } from '../actions/usersActions';
import { showNotificationAction } from '../../notification/actions/notificationActions';

export function* fetchUsers() {
  try {
    const { data } = yield call(fetchUsersRequest);
    yield put(fetchUsersSuccessAction(data));
  } catch (error) {
    console.log('fetchUsers error:', error.message);
    yield put(showNotificationAction({ type: 'danger', text: error.message }));
  }
}

export function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS, fetchUsers)
}

export function* createUser({ payload }) {
  try {
    yield call(postUsersRequest, payload);
    yield put(fetchUsersAction());
    yield put(showNotificationAction({ type: 'success', text: 'User has been created' }));
  } catch (error) {
    console.log('createUser error:', error);
    yield put(showNotificationAction({ type: 'danger', text: error.message }));
  }
}

export function * watchPostUsers() {
  yield takeEvery(POST_USERS, createUser)
}
