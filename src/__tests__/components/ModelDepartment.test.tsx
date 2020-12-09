// ModelDepartment.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import ModelDepartment from '../../components/ModelDepartment';

test('ModelDepartment root element is present', () => {
  render(<ModelDepartment name="Test" />);
  const rootElement = document.getElementsByClassName('Department')[0];
  expect(rootElement).toBeInTheDocument();
});