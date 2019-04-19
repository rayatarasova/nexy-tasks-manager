import { FETCH_TASKS_SUCCESS } from "../constants/tasksConstants";

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_TASKS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
