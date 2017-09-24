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
