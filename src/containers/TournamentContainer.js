import React from 'react';
import { gql, graphql } from 'react-apollo';
import { TournamentList } from '../components';

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

const TournamentContainer = () => (
  <TournamentsWithData />
);

export default TournamentContainer;
