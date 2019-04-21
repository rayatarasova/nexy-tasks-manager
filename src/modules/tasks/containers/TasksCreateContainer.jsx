import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsTasksAction } from "../actions/tasksActions";

import TasksAddButton from '../components/TasksAddButton';
import TasksNewInput from '../components/TasksNewInput';

class TasksCreateContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        newTaskName: ''
      }
      
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTaskNameTextChange = this.handleTaskNameTextChange.bind(this);
    }
  
    handleTaskNameTextChange(text) {
      this.setState({
        newTaskName: text
      })
    }
  
    handleSubmit() {
        this.props.postsTasksAction({ 
          task_name: this.state.newTaskName,
          description: 'This is Task 5',
          assignee: 'test',
          start_date: '2019-05-13',
          end_date: '2019-05-18'
        })
    }

    render() {
      return (
        <div>
          <h1>Create task:</h1>
          <TasksNewInput onTextChange={this.handleTaskNameTextChange}/>
          <TasksAddButton onClick={this.handleSubmit}/>
        </div>
      );
    }
}
  
export default connect(
    null,
    { postsTasksAction }
)(TasksCreateContainer);