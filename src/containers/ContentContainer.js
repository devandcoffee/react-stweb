import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NotFound } from '../components';
import HomeContainer from './HomeContainer';
import PlayerFormContainer from './PlayerFormContainer';
import PlayersTableContainer from './PlayersTableContainer';
import TeamsTableContainer from './TeamsTableContainer';
import TeamFormContainer from './TeamFormContainer';
import TournamentsTableContainer from './TournamentsTableContainer';
import TournamentFormContainer from './TournamentFormContainer';
import TournamentsListContainer from './TournamentsListContainer';

/*
* This component will act as a renderContent for the dashboard.
*/
const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/teams" component={TeamsTableContainer} />
      <Route exact path="/teams/new" component={TeamFormContainer} />
      <Route exact path="/teams/:id" component={TeamFormContainer} />
      <Route exact path="/teams/view/:id" component={TeamFormContainer} />
      <Route exact path="/teams/delete/:id" component={TeamFormContainer} />
      <Route exact path="/alltournaments" component={TournamentsListContainer} />
      <Route exact path="/players" component={PlayersTableContainer} />
      <Route exact path="/players/:id" component={PlayerFormContainer} />
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
