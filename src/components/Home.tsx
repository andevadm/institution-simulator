// Home.tsx
// Landing component

import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

import '../styles/Home.scss';

const Home: FunctionComponent<{}> = () => {

  return (
    <div className="Home">
      <h2>Home</h2>
      <p>
        <strong>Institution simulator</strong> presents a fantasy model of some high school state institution.
      </p>
      <p>
        <strong>Model</strong> includes a simple interface allowing you to create departments, hire staff and manage tasks.
      </p>
      <p>
        <strong>Info</strong> shows current statistics of the model.
      </p>
      <div>
        <Link to="/model" className="link-model interactive-button">
          Start
        </Link>
      </div>
    </div>
  )

}

export default Home;