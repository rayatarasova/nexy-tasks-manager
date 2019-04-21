import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "../constants/notificationConstants";

export default (state = { type: null, text: null }, action) => {
  switch(action.type) {
    case SHOW_NOTIFICATION:
      return action.payload;
    case HIDE_NOTIFICATION:
      return action.payload;
    default:
      return state;
  }
}
