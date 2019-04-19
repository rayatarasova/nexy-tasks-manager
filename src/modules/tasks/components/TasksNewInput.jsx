import React, { Component } from 'react';

class TasksNewInput extends Component {
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
      <div className="input-new-task-name">
        <input
          onChange={event => this.handleInputChange(event.target.value)}
          type="text"
          placeholder="new task"
          value={this.state.name}
        />
      </div>
    )
  }
}

export default TasksNewInput;