import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Home from './Components/Home/Home';
// import MyTrips from './Components/MyTrips/MyTrips';
import Login from './Components/Login/Login';

export default (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/home' component={Home} />
  </Switch>
);
