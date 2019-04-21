import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notification from '../components/Notification';

class NotificationContainer extends Component {  
    render() {
      const { notification } = this.props;
      const { type, text } = notification;

      return (
        text && <Notification text={text} type={type}/>
      );
    }
}
  
const mapStateToProps = (state) => {
    return {
      notification: state.notification,
    }
}
  
export default connect(
    mapStateToProps,
)(NotificationContainer);
