import React, { Fragment } from 'react';
import TasksCreateContainer from './containers/TasksCreateContainer';
import TasksListContainer from './containers/TasksListContainer';

const TasksPage = () => (
    <Fragment>
        <h1 class="h2">Tasks</h1>
        <TasksCreateContainer/>
        <TasksListContainer />
    </Fragment>
);

export default TasksPage;
