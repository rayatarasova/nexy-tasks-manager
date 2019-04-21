import React, { Component, Fragment } from 'react';

class TasksCreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      task_name: '',
      description: '',
      assignee: '',
      start_date: '',
      end_date: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { task_name, description, assignee, start_date, end_date } = this.state;
    if (task_name && description && assignee && start_date && end_date) {
      this.props.onSubmitForm(this.state);

      this.setState({ 
        task_name: '',
        description: '',
        assignee: '',
        start_date: '',
        end_date: ''
      });
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
    const { task_name, description, assignee, start_date, end_date } = this.state;
    const { users } = this.props;

    return (
      <Fragment>
        <h2 className="h2">Create task</h2>

        <form onSubmit={this.handleSubmit} style={{ marginBottom: '2rem' }}>
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
                value={description}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                name="description"
                placeholder="task description"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-2">
              <label htmlFor="inputEmail4">Start date</label>
              <input
                value={start_date}
                onChange={this.handleChange}
                type="date"
                className="form-control"
                name="start_date"
                placeholder="start date"
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputPassword4">End date</label>
              <input
                value={end_date}
                onChange={this.handleChange}
                type="date"
                className="form-control"
                name="end_date"
                placeholder="end date"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Assignee</label>
              <select 
                value={assignee}
                onChange={this.handleChange}
                name="assignee"
                className="custom-select d-block w-100"
              > 
                <option>Not selected</option>
                
                {users.map(user => (
                  <option key={user.user_id}>
                    {user.user_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </Fragment>
    )
  }
}

export default TasksCreateForm;