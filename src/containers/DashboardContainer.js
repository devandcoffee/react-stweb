import React from 'react';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
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
  <LocaleProvider locale={enUS}>
    <ApolloProvider client={client}>
      <Dashboard>
        <ContentContainer />
      </Dashboard>
    </ApolloProvider>
  </LocaleProvider>
)

export default DashboardContainer;
