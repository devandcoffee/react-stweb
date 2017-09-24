import React from 'react';
import PropTypes from 'prop-types';
import { gql, graphql, compose } from 'react-apollo';
import * as FORM_MODES from '../constants/form';
import { TournamentForm } from '../components';

const getTournament = gql`
  query getTournament($id: Int!) {
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
      updated_at
    }
  }
`;

const getTournamentsTypes = gql`
  query getTournamentsTypes {
    tourneysTypes {
      id
      name
      updated_at
    }
  }
`;

const updateTournament = gql`
  mutation updateTournament($id: Int!, $tourney: EditTourney) {
    updateTourney(id: $id, tourney: $tourney) {
      id
      name
      description
      amount_teams
      start_date
      user {
        id
      }
      tourney_type {
        id
        name
      }
      created_at
      updated_at
    }
  }
`;

const createTournament = gql`
mutation createTournament($tourney: NewTourney) {
  createTourney(tourney: $tourney) {
    id
    name
    description
    amount_teams
    start_date
    user {
      id
    }
    tourney_type {
      id
      name
    }
    created_at
    updated_at
  }
}
`;

const deleteTournament = gql`
  mutation deleteTournament($id: Int!) {
    deleteTourney(id: $id) {
      name
    }
  }
`;

const TournamentFormWithData = compose(
  graphql(getTournament, {
    options: ({ id }) => ({ variables: { id: id ? id : 0 } }),
    name: 'getTournament',
  }),
  graphql(getTournamentsTypes, {
    name: 'getTournamentsTypes',
  }),
  graphql(createTournament, {
    name: 'createTournament',
  }),
  graphql(updateTournament, {
    name: 'updateTournament',
  }),
  graphql(deleteTournament, {
    options: ({ id }) => ({ variables: { id: id ? id : 0 } }),
    name: 'deleteTournament',
  }),
)(TournamentForm);

function TournamentFormContainer({ match }) {
  const url = match.url;
  let mode = FORM_MODES.MODE_EDITION;
  if (url.includes('delete')) {
    mode = FORM_MODES.MODE_DELETION;
  }
  if (url.includes('view')) {
    mode = FORM_MODES.MODE_PRESENTATION;
  }
  return (
    <TournamentFormWithData id={match.params.id} mode={mode} />
  )
}

TournamentFormContainer.propTypes = {
  match: PropTypes.object.isRequired,
}

export default TournamentFormContainer;
