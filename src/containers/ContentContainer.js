import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NotFound } from '../components';
import HomeContainer from './HomeContainer';
import TeamsContainer from './TeamsContainer';
import TeamFormContainer from './TeamFormContainer';
import TournamentsTableContainer from './TournamentsTableContainer';
import TournamentFormContainer from './TournamentFormContainer';
import TournamentsContainer from './TournamentsContainer';

/*
* This component will act as a renderContent for the dashboard.
*/
const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/teams" component={TeamsContainer} />
      <Route exact path="/teams/new" component={TeamFormContainer} />
      <Route exact path="/teams/:id" component={TeamFormContainer} />
      <Route exact path="/teams/view/:id" component={TeamFormContainer} />
      <Route exact path="/teams/delete/:id" component={TeamFormContainer} />
      <Route exact path="/alltournaments" component={TournamentsContainer} />
      <Route exact path="/tournaments" component={TournamentsTableContainer} />
      <Route exact path="/tournaments/new" component={TournamentFormContainer} />
      <Route exact path="/tournaments/:id" component={TournamentFormContainer} />
      <Route exact path="/tournaments/view/:id" component={TournamentFormContainer} />
      <Route exact path="/tournaments/delete/:id" component={TournamentFormContainer} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Content;
