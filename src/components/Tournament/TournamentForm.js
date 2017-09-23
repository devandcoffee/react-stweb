import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TournamentForm extends Component {
  static propTypes = {
    id: PropTypes.string,
  }

  static defaultProps = {
    id: '',
  }

  render() {
    const { id } = this.props;
    return (
      <div>
        {
          !id && <h1> New Tournament </h1>
        }
        {
          id && <h1> Editing the tournament: {id} </h1>
        }
      </div>
    )
  }
}
