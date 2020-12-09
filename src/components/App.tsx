// App.tsx
// App root

import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import '../styles/App.scss';

// Root child components
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import RouteContainer from './RouteContainer';

// Components for main routes 
import Home from './Home';
import Model from './Model';
import Info from './Info';

interface ComponentLink {
  component: FunctionComponent;  
  name: string;
  link: string;
}

const App: FunctionComponent<{}> = () => {

  // List of routes
  const routeComponents: ComponentLink[] = [
    {
      component: Info,
      name: 'Info',
      link: '/info'
    },
    {
      component: Model,
      name: 'Model',
      link: '/model'
    },
    // Home should be a last component - default routing path
    {
      component: Home,
      name: 'Home',
      link: '/'
    }
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation routes={routeComponents} />
        <RouteContainer routes={routeComponents} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;