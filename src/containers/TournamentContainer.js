import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { gql, graphql } from 'react-apollo';
import { TournamentList } from '../components';
import { EDIT_RECORD, REMOVE_RECORD, SHOW_RECORD } from '../shared/SmartTable';

const getTournamentsList = gql`query{
  tourneys {
    id,
    name,
    description,
    start_date,
    amount_teams
  }
}`;

const TournamentsWithData = graphql(getTournamentsList)(TournamentList);

export default class TournamentContainer extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };


  emit = (text, record, index, action) => {
    switch (action) {
      case EDIT_RECORD:
        this.context.router.history.push(`/tournaments/${record.id}`);
        break;
      case REMOVE_RECORD:
        this.context.router.history.push(`/tournaments/delete/${record.id}`);
        break;
      case SHOW_RECORD:
        this.context.router.history.push(`/tournaments/view/${record.id}`);
        break;
      default:
        break;
    }
  };

  newTournament = () => {
    this.context.router.history.push('/tournaments/new');
  }

  render() {
    return (
      <div>
        <Button onClick={this.newTournament}> New Tournament </Button>
        <TournamentsWithData emit={this.emit} />
      </div>
    );
  }
}

