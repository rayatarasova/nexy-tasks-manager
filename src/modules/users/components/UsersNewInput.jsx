import React, { Component } from 'react';

class UsersNewInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  handleInputChange(text) {
    this.setState({name: text});
    this.props.onTextChange(text)
  }

  render() {
    return (
      <div className="input-new-user-name">
        <input
          onChange={event => this.handleInputChange(event.target.value)}
          type="text"
          placeholder="new user"
          value={this.state.name}
        />
      </div>
    )
  }
}

export default UsersNewInput;