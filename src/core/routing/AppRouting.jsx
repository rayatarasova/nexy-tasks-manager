import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CORE_ROUTES } from './coreRoutes';

const AppRouting = () => (
  <Switch>
    {CORE_ROUTES.map(route => (
      <Route key={route.path} {...route} />
    ))}
  </Switch>
);

export default AppRouting;
