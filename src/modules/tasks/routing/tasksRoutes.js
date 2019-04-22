import { TASKS_PATH, TASKS_CREATE_PATH } from './routingConstants';

import TasksListContainer from '../containers/TasksListContainer';
import TasksCreateFormContainer from '../containers/TasksCreateFormContainer';

export const TASKS_ROUTES = [
  {
    path: TASKS_PATH,
    component: TasksListContainer,
    exact: true,
  },
  {
    path: TASKS_CREATE_PATH,
    component: TasksCreateFormContainer,
    exact: true,
  },
];
