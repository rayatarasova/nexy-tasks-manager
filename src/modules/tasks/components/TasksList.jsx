import React, { Fragment } from "react";
import TasksItemContainer from '../containers/TasksItemContainer';

export default ({ tasks }) => (
  <Fragment>
    <h2 className="h2">Tasks</h2>
    <div style={{ marginBottom: '2rem' }}>
        {tasks.map(
          task => <TasksItemContainer key={task.task_id} task={task}/>
        )}
    </div>
  </Fragment>
);