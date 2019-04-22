import React, { Component, Fragment } from 'react';

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

  handleSubmit(event) {
    event.preventDefault();

    const payload = { 
      ...this.state,
      task_status: 'In progress'
    };
    delete payload['isEditing'];
    // delete payload['task_start_date'];
    // delete payload['task_end_date'];

    this.props.onUpdateTask(payload);

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

    if (isEditing) {
      return (
        <button
          onClick={this.handleSubmit}
          type="button"
          className="btn btn-light"
        >
          Save
        </button>
      )
    }

    return (
      <Fragment>
        <div className="card">
          <div className="card-header">
            {task_status}
          </div>

          <div className="card-body">
            <h5 className="card-title">{task_name}</h5>
            <p className="card-text">{task_description}</p>
            <p className="card-text">{user_name}</p>
            <p className="card-text">{`${task_start_date} - ${task_end_date}`}</p>
            
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
        </div>
      </Fragment>
    )
  }
}

export default TasksItem;
