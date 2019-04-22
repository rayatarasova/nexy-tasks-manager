import { USERS_PATH, USERS_CREATE_PATH } from './routingConstants';

import UsersListContainer from '../containers/UsersListContainer';
import UsersCreateFormContainer from '../containers/UsersCreateFormContainer';

export const USERS_ROUTES = [
  {
    path: USERS_PATH,
    component: UsersListContainer,
    exact: true,
  },
  {
    path: USERS_CREATE_PATH,
    component: UsersCreateFormContainer,
    exact: true,
  },
];
