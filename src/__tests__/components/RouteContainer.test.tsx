// RouteContainer.test.tsx

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';
import RouteContainer from '../../components/RouteContainer';

// Routes without props is not rendered due to props type check

test('RouteContainer root element is present', () => {
  render(
    <Router>
      <RouteContainer />
    </Router>
  );
  const rootElement = document.getElementsByClassName('RouteContainer')[0];
  expect(rootElement).toBeInTheDocument();
});