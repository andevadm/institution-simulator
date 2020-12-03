// Model.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import Model from '../../components/Model';

test('Model root element is present', () => {
  render(<Model />);
  const rootElement = document.getElementsByClassName('Model')[0];
  expect(rootElement).toBeInTheDocument();
});