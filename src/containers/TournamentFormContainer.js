import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import * as FORM_MODES from '../constants/form';
import { TournamentForm } from '../components';
import { getTournament, getTournamentsTypes, createTournament, updateTournament, deleteTournament } from '../graphql/tournaments';

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
};

export default TournamentFormContainer;
