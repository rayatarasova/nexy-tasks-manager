import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsUsersAction } from "../actions/usersActions";

import UsersCreateForm from '../components/UsersCreateForm';

class UsersCreateFormContainer extends Component {
    render() {
      const { postsUsersAction } = this.props;

      return (
        <UsersCreateForm onSubmitForm={postsUsersAction}/>
      );
    }
}
  
export default connect(
    null,
    { postsUsersAction }
)(UsersCreateFormContainer);
