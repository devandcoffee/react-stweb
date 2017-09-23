import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dashboard } from '../components';
import ContentContainer from './ContentContainer'

export default class DashboardContainer extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Dashboard>
        <ContentContainer />
      </Dashboard>
    )
  }
}
