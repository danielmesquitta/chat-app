import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/chat" component={Chat} />
    <Route path="/" component={NotFound} />
  </Switch>
);

export default Routes;
