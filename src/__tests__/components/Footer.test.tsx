// Footer.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../components/Footer';

test('Footer root element is present', () => {
  render(<Footer />);
  const rootElement = document.getElementsByClassName('Footer')[0];
  expect(rootElement).toBeInTheDocument();
});