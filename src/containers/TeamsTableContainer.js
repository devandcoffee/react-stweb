import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { graphql } from 'react-apollo';
import { TeamsTable } from '../components';
import { getTeamsList } from '../graphql/teams';
import { EDIT_RECORD, REMOVE_RECORD, SHOW_RECORD } from '../shared/SmartTable';

const TeamsWithData = graphql(getTeamsList)(TeamsTable);

export default class TeamsContainer extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  emit = (text, record, index, action) => {
    switch (action) {
      case EDIT_RECORD:
        this.context.router.history.push(`/teams/${record.id}`);
        break;
      case REMOVE_RECORD:
        this.context.router.history.push(`/teams/delete/${record.id}`);
        break;
      case SHOW_RECORD:
        this.context.router.history.push(`/teams/view/${record.id}`);
        break;
      default:
        break;
    }
  };

  newTeam = () => {
    this.context.router.history.push('/teams/new');
  }

  render() {
    return (
      <div>
        <Button onClick={this.newTeam}> New Team </Button>
        <TeamsWithData emit={this.emit} />
      </div>
    );
  }
}

