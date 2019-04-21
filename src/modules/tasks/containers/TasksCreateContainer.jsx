import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsTasksAction } from "../actions/tasksActions";
import { fetchUsersAction } from "../../users/actions/usersActions";

import TasksCreateForm from '../components/TasksCreateForm';

class TasksCreateContainer extends Component {
  componentDidMount() {
    if (!this.props.users || !this.props.users.length) {
      this.props.fetchUsersAction();
    }
  }

  render() {
    const { postsTasksAction, users } = this.props;

    return (
      <TasksCreateForm onSubmitForm={postsTasksAction} users={users}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}
  
export default connect(
    mapStateToProps,
    { postsTasksAction, fetchUsersAction }
)(TasksCreateContainer);