// Header.tsx

import React, { FunctionComponent } from 'react';

import '../styles/Header.scss';
import Navigation from './Navigation';

const Header: FunctionComponent<{}> = () => {

  return (
    <header className="Header">
      <h1>
        Institution Simulator
      </h1>
      <Navigation />
    </header>
  )

}

export default Header;