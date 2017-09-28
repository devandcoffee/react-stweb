import { gql } from 'react-apollo';

export const getTournaments = gql`
  query getTournaments($cursor: String) {
    tourneysWithCursor(first: 10, after: $cursor) {
      totalCount
      edges{
        node {
          id
          name
          description
        }
        cursor
      }
      pageInfo{
        endCursor
        hasNextPage
      }
    }
  }
`;

export const getTournamentsList = gql`
  query getTournamentList($limit: Int!, $offset: Int!) {
    tourneysWithOffset(limit: $limit, offset: $offset) {
      tourneys {
        id,
        name,
        description,
        start_date,
        amount_teams
      }
      metaInfo {
        totalCount,
        currentPage
      }
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
