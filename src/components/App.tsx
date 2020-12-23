// App.tsx
// App root

import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import '../styles/App.scss';
// Root child components
import Header from './Header';
import Footer from './Footer';
import RouteContainer from './RouteContainer';

const App: FunctionComponent<{}> = () => {

  return (
    <Router>
      <div className="App">
        <Header />
        <RouteContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;