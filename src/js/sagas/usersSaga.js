// import { takeEvery, call, put } from "redux-saga/effects";

// export default function* watcherSaga() {
//   yield takeEvery("DATA_REQUESTED", workerSaga);
// }

// function* workerSaga() {
//   try {
//     const payload = yield call(fetchUsers);
//     yield put({ type: "DATA_LOADED", payload });
//   } catch (e) {
//     yield put({ type: "API_ERRORED", payload: e });
//   }
// }

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
//     response.json()
//   );
// }
import { FETCH_USERS } from '../constants/actionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsersRequest } from '../api/usersApi';
import { fetchUsersSuccess } from '../actions/usersActions';

export function* fetchUsers() {
  try {
    const users = yield call(fetchUsersRequest);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    console.log('fetchUsers error:', error.message);
  }
}

export function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS, fetchUsers)
}
