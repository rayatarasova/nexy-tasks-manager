import { fork } from 'redux-saga/effects';
import { watchFetchUsers, watchPostUsers } from '../modules/users/sagas/usersSaga';

export default function* rootSaga() {
  yield fork(watchFetchUsers);
  yield fork(watchPostUsers);
}
