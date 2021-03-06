import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Login } from '../components';


export default class LoginContainer extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  handleSuccessLogin = () => {
    this.context.router.history.push('/tournaments');
  }

  goToSignUp = () => {
    console.log("GO TO!")
    this.context.router.history.push('/signup');
  }

  render() {
    return (<Login handleSubmit={this.handleSuccessLogin} goToSignUp={this.goToSignUp} />);
  }
}

