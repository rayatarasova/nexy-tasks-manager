import React, { Fragment } from 'react';
import TasksCreateContainer from './containers/TasksCreateContainer';
import TasksListContainer from './containers/TasksListContainer';

const TasksPage = () => (
    <Fragment> 
        <TasksCreateContainer/>
        <TasksListContainer />
    </Fragment>
);

export default TasksPage;
