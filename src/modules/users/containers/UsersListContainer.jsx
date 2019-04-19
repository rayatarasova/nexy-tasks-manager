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
        <div>
          <h1>Users list:</h1>
          <UsersList users={users}/>
        </div>
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
