import React, { Fragment } from 'react';
import TasksCreateFormContainer from './containers/TasksCreateFormContainer';
import TasksListContainer from './containers/TasksListContainer';

const TasksPage = () => (
    <Fragment>
        <TasksCreateFormContainer/>
        <TasksListContainer />
    </Fragment>
);

export default TasksPage;
