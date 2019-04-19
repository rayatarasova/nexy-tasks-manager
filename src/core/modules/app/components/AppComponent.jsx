import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouting from '../../../routing/AppRouting';

import Menu from '../../../components/Menu';

class AppComponent extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Company name</a>
          </nav>

          <div className="container-fluid">
            <div className="row">
              <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                  <Menu />
                </div>
              </nav>

              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="chartjs-size-monitor">
                  <AppRouting />
                </div>
              </main>
            </div>
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default AppComponent;
