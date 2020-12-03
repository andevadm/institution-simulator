// RouteContainer.tsx
// Container for the components selected by Router

import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import '../styles/RouteContainer.scss';
import Home from './Home';
import Model from './Model';
import About from './About';

function RouteContainer() {
  return (
    <div className="RouteContainer">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/model">
          <Model />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default RouteContainer;