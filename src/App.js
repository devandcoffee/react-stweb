import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LoginContainer, DashboardContainer } from './containers';

import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route path="/" component={DashboardContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
