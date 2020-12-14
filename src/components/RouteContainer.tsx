// RouteContainer.tsx
// Container for the components selected by Router

import React, { FunctionComponent } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import '../styles/RouteContainer.scss';
// Components for main routes 
import Home from './Home';
import Model from './Model';
import Info from './Info';

const RouteContainer: FunctionComponent<{}> = () => {

  return (
    <div className="RouteContainer">
      <Switch>
        <Route path='/model'>
          <Model />
        </Route>
        <Route path='/info'>
          <Info />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )

}

export default RouteContainer;