import React, { Component } from 'react';
import { connect } from 'react-redux';
import TasksItem from '../components/TasksItem';
import { deleteTasksAction } from "../actions/tasksActions";


class TasksItemContainer extends Component {
  constructor(props) {
    super(props)
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask(id) {
    this.props.deleteTasksAction(id);
  }

  render() {
    const { task } = this.props;

    return (
      <TasksItem deleteTask={this.deleteTask} task={task}/>
    )
  }
}

export default connect(
  null,
  { deleteTasksAction }
)(TasksItemContainer);