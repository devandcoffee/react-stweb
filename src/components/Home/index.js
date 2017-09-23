import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HomeComponent extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <h1>Home</h1>
    )
  }
}
