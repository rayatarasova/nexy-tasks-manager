import { fork } from 'redux-saga/effects';
import { watchFetchUsers, watchPostUsers } from '../modules/users/sagas/usersSaga';
import { watchFetchTasks, watchPostTasks, watchDeleteTasks } from '../modules/tasks/sagas/tasksSaga';

export default function* rootSaga() {
  yield fork(watchFetchUsers);
  yield fork(watchPostUsers);
  yield fork(watchFetchTasks);
  yield fork(watchPostTasks);
  yield fork(watchDeleteTasks);
}
