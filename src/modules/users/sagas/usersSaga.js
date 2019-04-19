import { FETCH_USERS, POST_USERS } from '../constants/usersConstants';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsersRequest, postUsersRequest } from '../api/usersApi';
import { fetchUsersAction, fetchUsersSuccessAction } from '../actions/usersActions';

export function* fetchUsers() {
  try {
    const { data } = yield call(fetchUsersRequest);
    yield put(fetchUsersSuccessAction(data));
  } catch (error) {
    console.log('fetchUsers error:', error.message);
  }
}

export function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS, fetchUsers)
}

export function* createUser({ payload }) {
  try {
    yield call(postUsersRequest, payload);
    yield put(fetchUsersAction());
  } catch (error) {
    console.log('createUser error:', error);
  }
}

export function * watchPostUsers() {
  yield takeEvery(POST_USERS, createUser)
}
