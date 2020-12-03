// About.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import About from '../../components/About';

test('About root element is present', () => {
  render(<About />);
  const rootElement = document.getElementsByClassName('About')[0];
  expect(rootElement).toBeInTheDocument();
});