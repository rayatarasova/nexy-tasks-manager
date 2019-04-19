import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsersAction, postsUsersAction } from "../actions/usersActions";

import UsersAddButton from '../components/UsersAddButton';
import UsersNewInput from '../components/UsersNewInput';
import UsersList from '../components/UsersList';

class UsersContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        newUserName: ''
      }
      
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleUserNameTextChange = this.handleUserNameTextChange.bind(this);
    }
  
    handleUserNameTextChange(text) {
      this.setState({
        newUserName: text
      })
    }
  
    handleSubmit() {
      // this.props.dispatch(postsUsers({ user_name: this.state.newTodoText }));
      this.props.postsUsersAction({ user_name: this.state.newUserName })
    }
  
    componentDidMount() {
        this.props.fetchUsersAction();
    }

    render() {
      const { users } = this.props;

      return (
        <div className="app">
          <h1>Users</h1>
          <UsersNewInput onTextChange={this.handleUserNameTextChange}/>
          <UsersAddButton onClick={this.handleSubmit}/>
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
    { fetchUsersAction, postsUsersAction }
)(UsersContainer);
