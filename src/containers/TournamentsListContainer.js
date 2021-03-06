import React from 'react';
import { graphql } from 'react-apollo';
import { TournamentsList } from '../components';
import { getTournaments } from '../graphql/tournaments';

const TournamentsListWithData = graphql(getTournaments, {
  options: {
    notifyOnNetworkStatusChange: true,
  },
  props({ data: { loading, tourneysWithCursor, fetchMore } }) {
    return {
      loading,
      tourneysWithCursor,
      loadMoreTournaments() {
        return fetchMore({
          variables: {
            cursor: tourneysWithCursor.pageInfo.endCursor,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const totalCount = fetchMoreResult.tourneysWithCursor.totalCount;
            const newEdges = fetchMoreResult.tourneysWithCursor.edges;
            const pageInfo = fetchMoreResult.tourneysWithCursor.pageInfo;
            return {
              tourneysWithCursor: {
                totalCount,
                edges: [...previousResult.tourneysWithCursor.edges, ...newEdges],
                pageInfo,
                __typename: 'Tourneys',
              },
            };
          },
        });
      },
    };
  },
})(TournamentsList);

export default () => {
  return (
    <div>
      <TournamentsListWithData />
    </div>
  )
}

