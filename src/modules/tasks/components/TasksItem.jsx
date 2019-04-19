import React from 'react';

export default ({task, deleteTask}) => {
  return (
    <li className="list-group-item" key={task.task_id}>
        <span>
          {task.task_name}
        </span>
        <span>
          <button onClick={() => deleteTask(task.task_id)}>Delete</button>
        </span>
    </li>
  )
}