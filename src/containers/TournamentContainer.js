import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TournamentList } from '../components'

export default class TournamentContainer extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <TournamentList />
    )
  }
}
