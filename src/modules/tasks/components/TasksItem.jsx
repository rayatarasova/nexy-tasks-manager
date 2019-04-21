import React from 'react';

export default ({task, deleteTask}) => {
  return (
    <div className="card">
      <div className="card-header">
        {task.task_status}
      </div>

      <div className="card-body">
        <h5 className="card-title">{task.task_name}</h5>
        <p className="card-text">{task.task_description}</p>
        <p className="card-text">{task.user_name}</p>
        <p className="card-text">{`${task.task_start_date} - ${task.task_end_date}`}</p>
        <button
          onClick={() => deleteTask(task.task_id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
