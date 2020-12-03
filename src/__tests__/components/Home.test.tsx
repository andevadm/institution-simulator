// Home.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../components/Home';

test('Home root element is present', () => {
  render(<Home />);
  const rootElement = document.getElementsByClassName('Home')[0];
  expect(rootElement).toBeInTheDocument();
});