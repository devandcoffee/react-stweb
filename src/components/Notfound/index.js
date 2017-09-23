import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NotFound extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <h1>Page not found</h1>
    )
  }
}
