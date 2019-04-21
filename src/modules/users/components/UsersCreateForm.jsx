import React, { Component, Fragment } from 'react';

class UsersCreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      user_name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { user_name } = this.state;
    if (user_name) {
      this.props.onSubmitForm(this.state);

      this.setState({ user_name: '' });
    } else {
      alert('Please fill user name');
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
    const { user_name } = this.state;

    return (
      <Fragment>
        <h2 className="h2">Create user</h2>

        <form onSubmit={this.handleSubmit} style={{ marginBottom: '2rem' }}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputAddress">Name</label>
              <input
                value={user_name}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                name="user_name"
                placeholder="user name"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </Fragment>
    )
  }
}

export default UsersCreateForm;