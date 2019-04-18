import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// import Tasks from '../components/Tasks';
import Users from '../components/Users';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* <Route path='/tasks' component={Tasks} /> */}
            <Route path='/users' component={Users} />
            <Redirect from="/" to="users" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
