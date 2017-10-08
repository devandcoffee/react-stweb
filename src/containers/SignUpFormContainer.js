import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SignUp } from '../components';


export default class LoginContainer extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  handleSuccessSignUp = () => {
    this.context.router.history.push('/tournaments');
  }

  render() {
    return (<SignUp handleSubmit={this.handleSuccessSignUp} />);
  }
}

