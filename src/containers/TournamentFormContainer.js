import React from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';
import { TournamentForm } from '../components';

const getTournament = gql`query getTournament($id: Int!) {
  tourney(id: $id) {
    id
    name
    amount_teams
    start_date
    amount_teams
    description
    user {
      id
    }
    tourney_type {
      id
      name
    }
  }
}`;

const TournamentFormWithData = graphql(getTournament, {
  options: ({ id }) => ({ variables: { id: id ? id : 0 } }),
})(TournamentForm);

function TournamentFormContainer({ match }) {
  return (
    <TournamentFormWithData id={match.params.id} />
  )
}

TournamentFormContainer.propTypes = {
  match: PropTypes.object.isRequired,
}

export default TournamentFormContainer;
