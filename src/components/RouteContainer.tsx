// RouteContainer.tsx
// Container for the components selected by Router

import React, { FunctionComponent } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import '../styles/RouteContainer.scss';

interface RouteContainerProps {
  routes: {
    component: FunctionComponent,
    link: string
  }[]
}

const RouteContainer: FunctionComponent<RouteContainerProps> = ({ routes }) => {
  // default Home route should be in the end
  const errorInRoutes: boolean = (routes[routes.length-1].link !== '/');
  return (
    <div className="RouteContainer">
      <Switch>
        { 
          (errorInRoutes) ? 

          <Route path='/'>
            <div className="error">
              Homepage route is not found in the correct place. Please check the routes list.
            </div>
          </Route> :
          
          routes.map((route, index) => 
            <Route 
              path={route.link}
              key={index}  
            >
              {route.component}
            </Route>
          )
        }
      </Switch>
    </div>
  )
}

export default RouteContainer;