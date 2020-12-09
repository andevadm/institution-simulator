// RouteContainer.test.tsx

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';
import RouteContainer from '../../components/RouteContainer';
import Home from '../../components/Home';

// Routes without props is not rendered due to props type check

test('RouteContainer root element is present', () => {
  const routeProps  = [
    {
      component: Home,
      link: '/'
    }
  ];
  render(
    <Router>
      <RouteContainer routes={routeProps} />
    </Router>
  );
  const rootElement = document.getElementsByClassName('RouteContainer')[0];
  expect(rootElement).toBeInTheDocument();
});