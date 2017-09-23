import React from 'react';
import { TournamentForm } from '../components';

function TournamentFormContainer({ match }) {
  return (
    <TournamentForm id={match.params.id} />
  )
}
export default TournamentFormContainer;
