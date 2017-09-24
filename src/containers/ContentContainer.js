import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NotFound } from '../components';
import HomeContainer from './HomeContainer';
import TeamsContainer from './TeamsContainer';
import TournamentContainer from './TournamentContainer';
import TournamentFormContainer from './TournamentFormContainer';

/*
* This component will act as a renderContent for the dashboard.
*/
const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/teams" component={TeamsContainer} />
      <Route exact path="/tournaments" component={TournamentContainer} />
      <Route exact path="/tournaments/new" component={TournamentFormContainer} />
      <Route exact path="/tournaments/:id" component={TournamentFormContainer} />
      <Route exact path="/tournaments/view/:id" component={TournamentFormContainer} />
      <Route exact path="/tournaments/delete/:id" component={TournamentFormContainer} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Content;
