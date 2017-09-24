import { gql } from 'react-apollo';

export const getTeamsList = gql`
  query getTeamsList {
    teams {
      id
      name
      description
    }
  }
`;

export const getTeam = gql`
  query getTeam($id: Int!) {
    team(id: $id) {
      id
      name
      description
    }
  }
`;

export const createTeam = gql`
  mutation createTeam($team: NewTeam) {
    createTeam(team: $team) {
      id
      name
      description
      created_at
      updated_at
    }
  }
`;

export const updateTeam = gql`
  mutation updateTeam($id: Int!, $team: EditTeam) {
    updateTeam(team: $team) {
      id
      name
      description
      created_at
      updated_at
    }
  }
`;

export const deleteTeam = gql`
  mutation deleteTeam($id: Int!) {
    deleteTeam(id: $id) {
      name
    }
  }
`;
