import React, { Component, Fragment } from 'react';

const statusList = ['Assigned', 'Expired', 'In progress', 'Waiting', 'Cancelled', 'Closed'];

class TasksCreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      ...props.task
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { task_id, task_name, task_description, user_name, task_start_date, task_end_date, task_status } = this.state;
    if (task_name && task_description && task_start_date && task_end_date && task_status) {
      
      const payload = {
        id: task_id,
        task: {
          task_name,
          description: task_description,
          assignee: user_name,
          start_date: task_start_date,
          end_date: task_end_date,
          status: task_status
        }
      };
      
      this.props.onSubmitForm(payload);
    } else {
      alert('Please fill all form data');
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { task_name, task_description, task_start_date, task_end_date, task_status } = this.state;

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} style={{ padding: '2rem' }}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputAddress">Name</label>
              <input
                value={task_name}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                name="task_name"
                placeholder="task name"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputAddress">Description</label>
              <input
                value={task_description}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                name="task_description"
                placeholder="task description"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-2">
              <label htmlFor="inputEmail4">Start date</label>
              <input
                value={task_start_date}
                onChange={this.handleChange}
                type="date"
                className="form-control"
                name="task_start_date"
                placeholder="start date"
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputPassword4">End date</label>
              <input
                value={task_end_date}
                onChange={this.handleChange}
                type="date"
                className="form-control"
                name="task_end_date"
                placeholder="end date"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Status</label>
              <select 
                value={task_status}
                onChange={this.handleChange}
                name="task_status"
                className="custom-select d-block w-100"
              >                 
                {statusList.map(status => (
                  <option key={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </Fragment>
    )
  }
}

export default TasksCreateForm;
