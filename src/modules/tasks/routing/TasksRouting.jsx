import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { TASKS_ROUTES } from './tasksRoutes';

const TasksRouting = () => (
  <Switch>
    {TASKS_ROUTES.map(route => (
      <Route key={route.path} {...route} />
    ))}
  </Switch>
);

export default TasksRouting;
