import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { DashboardContainer, LoginContainer, SignUpFormContainer } from './containers';

import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/signup" component={SignUpFormContainer} />
          <Route path="/" component={DashboardContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
