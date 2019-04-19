import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouting from '../../../routing/AppRouting';

import Menu from '../../../components/Menu';

class AppComponent extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Menu />
          <AppRouting />
        </Fragment>
      </Router>
    );
  }
}

export default AppComponent;
