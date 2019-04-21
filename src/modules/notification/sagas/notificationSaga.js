import { SHOW_NOTIFICATION } from '../constants/notificationConstants';
import { put, takeEvery } from 'redux-saga/effects';
import { hideNotificationAction } from '../actions/notificationActions';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* showNotification() {
    yield delay(5000);
    yield put(hideNotificationAction({ type: null, text: null }));
}

export function* watchShowNotification() {
  yield takeEvery(SHOW_NOTIFICATION, showNotification)
}
