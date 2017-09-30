import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { graphql } from 'react-apollo';
import { TournamentsTable } from '../components';
import { getTournamentsList } from '../graphql/tournaments';
import { EDIT_RECORD, REMOVE_RECORD, SHOW_RECORD } from '../shared/SmartTable';

const ITEMS_PER_PAGE = 10;

const TournamentsWithData = graphql(getTournamentsList, {
  options() {
    return {
      variables: {
        offset: 0,
        limit: ITEMS_PER_PAGE,
      },
      fetchPolicy: 'network-only',
    };
  },
  props({ data: { loading, tourneysWithOffset, fetchMore } }) {
    return {
      loading,
      tourneysWithOffset,
      loadPage(offset) {
        return fetchMore({
          variables: {
            offset,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) { return previousResult; }
            return fetchMoreResult;
          },
        });
      },
    };
  },
})(TournamentsTable);

export default class TournamentsTableContainer extends Component {
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

