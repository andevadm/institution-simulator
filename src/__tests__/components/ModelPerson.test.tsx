// ModelPerson.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import ModelPerson from '../../components/ModelPerson';

test('ModelPerson root element is present', () => {
  render(<ModelPerson name="Test" />);
  const rootElement = document.getElementsByClassName('Person')[0];
  expect(rootElement).toBeInTheDocument();
});