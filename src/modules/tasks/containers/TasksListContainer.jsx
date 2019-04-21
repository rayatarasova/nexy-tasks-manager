import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasksAction } from "../actions/tasksActions";

import TasksList from '../components/TasksList';

class TasksListContainer extends Component {  
    componentDidMount() {
      this.props.fetchTasksAction();
    }

    render() {
      const { tasks } = this.props;

      return (
        <TasksList tasks={tasks}/>
      );
    }
}
  
const mapStateToProps = (state) => {
    return {
      tasks: state.tasks,
    }
}
  
export default connect(
    mapStateToProps,
    { fetchTasksAction }
)(TasksListContainer);
