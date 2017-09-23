import React from 'react';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import { Dashboard } from '../components';
import ContentContainer from './ContentContainer';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
});

const client = new ApolloClient({
  networkInterface,
});

const DashboardContainer = () => (
  <ApolloProvider client={client}>
    <Dashboard>
      <ContentContainer />
    </Dashboard>
  </ApolloProvider>
)

export default DashboardContainer;
