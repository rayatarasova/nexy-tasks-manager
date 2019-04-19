import { combineReducers } from 'redux';
import usersReducer from '../modules/users/reducers/usersReducer';
import tasksReducer from '../modules/tasks/reducers/tasksReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
});

export default rootReducer;
