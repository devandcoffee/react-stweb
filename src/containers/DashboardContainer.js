import React from 'react';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import { Dashboard } from '../components';
import ContentContainer from './ContentContainer';
import firebaseAuth from '../libraries/firebaseAuth';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
});

networkInterface.use([{
  async applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    const token = await firebaseAuth.getToken();
    req.options.headers.authorization = token ? `Bearer ${token}` : '';
    next();
  }
}]);

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
