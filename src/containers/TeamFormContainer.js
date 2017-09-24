import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import * as FORM_MODES from '../constants/form';
import { TeamForm } from '../components';
import { getTeam, createTeam, updateTeam, deleteTeam } from '../graphql/teams';

const TeamFormWithData = compose(
  graphql(getTeam, {
    options: ({ id }) => ({ variables: { id: id ? id : 0 } }),
    name: 'getTeam',
  }),
  graphql(createTeam, {
    name: 'createTeam',
  }),
  graphql(updateTeam, {
    name: 'updateTeam',
  }),
  graphql(deleteTeam, {
    options: ({ id }) => ({ variables: { id: id ? id : 0 } }),
    name: 'deleteTeam',
  }),
)(TeamForm);

function TeamFormContainer({ match }) {
  const url = match.url;
  let mode = FORM_MODES.MODE_EDITION;
  if (url.includes('delete')) {
    mode = FORM_MODES.MODE_DELETION;
  }
  if (url.includes('view')) {
    mode = FORM_MODES.MODE_PRESENTATION;
  }
  return (
    <TeamFormWithData id={match.params.id} mode={mode} />
  )
}

TeamFormContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

export default TeamFormContainer;
