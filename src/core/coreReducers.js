import { combineReducers } from 'redux';
import usersReducer from '../modules/users/reducers/usersReducer';
import tasksReducer from '../modules/tasks/reducers/tasksReducer';
import notificationReducer from '../modules/notification/reducers/notificationReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
  notification: notificationReducer,
});

export default rootReducer;
