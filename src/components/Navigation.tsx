// Navigation.tsx
// Component with top navigation

import React, { FunctionComponent } from 'react';
import { NavLink } from "react-router-dom";

import '../styles/Navigation.scss';

interface NavigationProps {
  routes: {
    name: string,
    link: string
  }[]
}

const Navigation: FunctionComponent<NavigationProps> = ({ routes }) =>  {
  return (
    <div className="Navigation">
      {
        // reverse list to move Home from end to begin of navigation
        routes.map((element, index) => 
          <NavLink 
            to={element.link || '#'} 
            key={`${index} : ${element.name}`}
            activeClassName="active"
            exact
          >
            {element.name}
          </NavLink>
        ).reverse()
      }
    </div>
  )
}

export default Navigation;