import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsUsersAction } from "../actions/usersActions";

import UsersAddButton from '../components/UsersAddButton';
import UsersNewInput from '../components/UsersNewInput';

class UsersCreateContainer extends Component {
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
        this.props.postsUsersAction({ user_name: this.state.newUserName })
    }

    render() {
      return (
        <div>
          <h1>Create user:</h1>
          <UsersNewInput onTextChange={this.handleUserNameTextChange}/>
          <UsersAddButton onClick={this.handleSubmit}/>
        </div>
      );
    }
}
  
export default connect(
    null,
    { postsUsersAction }
)(UsersCreateContainer);