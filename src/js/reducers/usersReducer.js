import { FETCH_USERS_SUCCESS } from "../constants/actionTypes";

const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
