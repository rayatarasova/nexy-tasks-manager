import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "../constants/notificationConstants";

export function showNotificationAction(payload) {
  return { type: SHOW_NOTIFICATION, payload };
}

export function hideNotificationAction(payload) {
  return { type: HIDE_NOTIFICATION, payload };
}
