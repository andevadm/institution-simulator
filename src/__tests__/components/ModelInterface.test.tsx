// ModelInterface.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import ModelInterface from '../../components/ModelInterface';

test('ModelInterface root element is present', () => {
  render(<ModelInterface />);
  const rootElement = document.getElementsByClassName('ModelInterface')[0];
  expect(rootElement).toBeInTheDocument();
});