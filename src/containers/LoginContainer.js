import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Login } from '../components'

export default class LoginContainer extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Login />
    )
  }
}
