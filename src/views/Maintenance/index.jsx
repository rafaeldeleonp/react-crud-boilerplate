import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Crud from './components/Crud';

const Maintenance = () => (
  <Switch>
    <Route key="crud" path="/maintenance/crud" component={Crud} />
  </Switch>
);

export default Maintenance;
