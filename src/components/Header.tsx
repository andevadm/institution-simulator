// Header.tsx

import React, { FunctionComponent } from 'react';

import '../styles/Header.scss';

const Header: FunctionComponent<{}> = () => {
  return (
    <div className="Header">
      <h1>
        Institution Simulator
      </h1>
      <p>
        Fantasy model of some high school state institution
      </p>
    </div>
  )
}

export default Header;