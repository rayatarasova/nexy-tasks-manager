import { FETCH_USERS_SUCCESS } from "../constants/actionTypes";

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_USERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
