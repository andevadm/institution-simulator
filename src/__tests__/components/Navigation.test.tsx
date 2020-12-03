// Navigation.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import Navigation from '../../components/Navigation';

test('Navigation root element is present', () => {
  render(<Navigation />);
  const rootElement = document.getElementsByClassName('Navigation')[0];
  expect(rootElement).toBeInTheDocument();
});