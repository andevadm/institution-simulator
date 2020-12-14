// Navigation.tsx
// Component with top navigation and link list

import React, { FunctionComponent } from 'react';
import { NavLink } from "react-router-dom";

import '../styles/Navigation.scss';

interface ComponentLink {  
  name: string;
  link: string;
}

// List of routes
export const linkList: ComponentLink[] = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Model',
    link: '/model'
  },
  {
    name: 'Info',
    link: '/info'
  }
];

const Navigation: FunctionComponent<{}> = () =>  {

  return (
    <div className="Navigation">
      {
        linkList.map((element, index) => 
          <NavLink 
            to={element.link || '#'} 
            key={`${index} : ${element.name}`}
            activeClassName="active"
            exact
          >
            {element.name}
          </NavLink>
        )
      }
    </div>
  )
}

export default Navigation;