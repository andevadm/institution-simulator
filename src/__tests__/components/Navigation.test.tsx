// Navigation.test.tsx

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import { render, screen } from '@testing-library/react';
import Navigation, { linkList } from '../../components/Navigation';

// Navigation without props is not rendered due to props type check

test('Navigation root element and route links are present', () => {
  render(
    <Provider store={store}>
      <Router>
        <Navigation />
      </Router>
    </Provider>
  );
  const rootElement = document.getElementsByClassName('Navigation')[0];
  expect(rootElement).toBeInTheDocument();
  for (let component of linkList) {
    let a = screen.getByText(component.name) as HTMLAnchorElement;
    expect(a.tagName).toBe('A');
    expect(a.href).toMatch(new RegExp(component.link));
  }

});