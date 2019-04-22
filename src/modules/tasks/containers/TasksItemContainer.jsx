import React, { Component } from 'react';
import { connect } from 'react-redux';
import TasksItem from '../components/TasksItem';
import { putTasksAction, deleteTasksAction } from "../actions/tasksActions";

class TasksItemContainer extends Component {
  constructor(props) {
    super(props);

    this.onUpdateTask = this.onUpdateTask.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
  }

  onUpdateTask(task) {
    this.props.putTasksAction(task);
  }

  onDeleteTask(id) {
    this.props.deleteTasksAction(id);
  }

  render() {
    const { task } = this.props;

    return (
      <TasksItem
        task={task}
        onUpdateTask={this.onUpdateTask}
        onDeleteTask={this.onDeleteTask} 
      />
    )
  }
}

export default connect(
  null,
  { putTasksAction, deleteTasksAction }
)(TasksItemContainer);