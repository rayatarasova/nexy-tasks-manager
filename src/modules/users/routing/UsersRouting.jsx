import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { USERS_ROUTES } from './usersRoutes';

const UsersRouting = () => (
  <Switch>
    {USERS_ROUTES.map(route => (
      <Route key={route.path} {...route} />
    ))}
  </Switch>
);

export default UsersRouting;
