// App.tsx
// App root

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import '../styles/App.scss';
import Header from './Header';
import Navigation from './Navigation';
import RouteContainer from './RouteContainer';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <RouteContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
