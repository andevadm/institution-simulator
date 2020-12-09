// Navigation.test.tsx

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import Navigation from '../../components/Navigation';

// Navigation without props is not rendered due to props type check

test('Navigation root element and route links are present', () => {
  const routeProps  = [
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Home',
      link: '/'
    }
  ];
  render(
    <Router>
      <Navigation routes={routeProps} />
    </Router>
  );
  const rootElement = document.getElementsByClassName('Navigation')[0];
  expect(rootElement).toBeInTheDocument();
  for (let prop of routeProps) {
    let a = screen.getByText(prop.name);
    expect(a.tagName).toBe('A');
    expect(a.href).toMatch(new RegExp(prop.link));
  }

});