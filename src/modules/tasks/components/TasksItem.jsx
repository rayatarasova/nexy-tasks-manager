import React, { Component, Fragment } from 'react';
import TasksEditForm from './TasksEditForm';

class TasksItem extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      ...this.props.task,
      isEditing: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }

  handleSubmit(updatedTask) {
    delete updatedTask['isEditing'];

    this.props.onUpdateTask(updatedTask);

    this.setState({ 
      isEditing: false
    });
  }

  render() {
    const { task, onDeleteTask } = this.props;
    const { 
      task_id,
      task_name,
      task_description,
      task_start_date,
      task_end_date,
      task_status,
      user_name
    } = task;
    const { isEditing } = this.state;

    return (
      <Fragment>
        <div className="card" style={{ marginBottom: '2rem' }}>
          <div className="card-header">
           {user_name}
          </div>

          {isEditing && (
            <TasksEditForm task={task} onSubmitForm={this.handleSubmit} />
          )}
          
          {!isEditing && (
            <div className="card-body">
              <h5 className="card-title">{task_name}</h5>
              <p className="card-text">{task_description}</p>
              <p className="card-text">{`${task_start_date} - ${task_end_date}`}</p>
              <p className="card-text">{task_status}</p>

              <div className="btn-group" role="group" aria-label="Basic example">
                <button
                  onClick={this.toggleEdit}
                  type="button"
                  className="btn btn-light"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDeleteTask(task_id)}
                  className="btn btn-light"
                >
                  Delete
                </button>
              </div>
            </div>
          )}

        </div>
      </Fragment>
    )
  }
}

export default TasksItem;
