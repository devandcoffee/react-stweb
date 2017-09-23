import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Home } from '../components'

export default class HomeContainer extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Home />
    )
  }
}
