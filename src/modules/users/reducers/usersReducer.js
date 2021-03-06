import { FETCH_USERS_SUCCESS } from "../constants/usersConstants";

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_USERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
