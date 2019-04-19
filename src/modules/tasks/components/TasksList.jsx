import React from "react";
import TasksItemContainer from '../containers/TasksItemContainer';

export default ({ tasks }) => (
    <ul className="list-group list-group-flush">
        {tasks.map(
          task => <TasksItemContainer key={task.task_id} task={task}/>
        )}
    </ul>
);
