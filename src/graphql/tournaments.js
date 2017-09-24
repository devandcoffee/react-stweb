import { gql } from 'react-apollo';

export const getTournamentsList = gql`
  query {
    tourneys {
      id,
      name,
      description,
      start_date,
      amount_teams
    }
  }
`;

export const getTournament = gql`
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

export const getTournamentsTypes = gql`
  query getTournamentsTypes {
    tourneysTypes {
      id
      name
      updated_at
    }
  }
`;

export const updateTournament = gql`
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

export const createTournament = gql`
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

export const deleteTournament = gql`
  mutation deleteTournament($id: Int!) {
    deleteTourney(id: $id) {
      name
    }
  }
`;
