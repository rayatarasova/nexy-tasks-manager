import { fork } from 'redux-saga/effects';
import { watchFetchUsers } from './usersSaga';

export default function* rootSaga() {
  yield fork(watchFetchUsers);
}
