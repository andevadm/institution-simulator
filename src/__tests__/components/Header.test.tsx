// Header.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/Header';

test('Header root element and title are present', () => {
  render(<Header />);
  const rootElement = document.getElementsByClassName('Header')[0];
  expect(rootElement).toBeInTheDocument();
  const title = document.getElementsByTagName('H1')[0];
  expect(title.textContent).toMatch(/Institution Simulator/);
});