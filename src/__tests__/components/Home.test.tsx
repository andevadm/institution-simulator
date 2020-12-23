// Home.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Home from '../../components/Home';

test('Home root element is present', () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const rootElement = document.getElementsByClassName('Home')[0];
  expect(rootElement).toBeInTheDocument();
});