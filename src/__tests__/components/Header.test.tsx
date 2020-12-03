// Header.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/Header';

test('Header root element is present', () => {
  render(<Header />);
  const rootElement = document.getElementsByClassName('Header')[0];
  expect(rootElement).toBeInTheDocument();
});