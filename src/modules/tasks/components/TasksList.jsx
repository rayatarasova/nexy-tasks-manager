import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import TasksItemContainer from '../containers/TasksItemContainer';

export default ({ tasks }) => (
  <Fragment>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
      <h2 className="h2">Tasks</h2>
      <div className="btn-toolbar mb-2 mb-md-0">
        <Link to="/tasks/create" className="btn btn-sm btn-primary">Create</Link>
      </div>
    </div>

    <div style={{ marginBottom: '2rem' }}>
        {tasks.map(
          task => <TasksItemContainer key={task.task_id} task={task}/>
        )}
    </div>
  </Fragment>
);
