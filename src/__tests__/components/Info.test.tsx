// Info.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import Info from '../../components/Info';

test('Info root element is present', () => {
  render(<Info />);
  const rootElement = document.getElementsByClassName('Info')[0];
  expect(rootElement).toBeInTheDocument();
});