import React from 'react';
import { Route, Switch } from 'react-router';

import { NotFound } from '../components';
import HomeContainer from './HomeContainer';
import TournamentContainer from './TournamentContainer';

/*
* This component will act as a renderContent for the dashboard.
*/
const Content = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/tournaments' component={TournamentContainer} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Content;
