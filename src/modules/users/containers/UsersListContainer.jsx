import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsersAction } from "../actions/usersActions";

import UsersList from '../components/UsersList';

class UsersListContainer extends Component {  
    componentDidMount() {
        this.props.fetchUsersAction();
    }

    render() {
      const { users } = this.props;

      return (
        <UsersList users={users}/>
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
    { fetchUsersAction }
)(UsersListContainer);
