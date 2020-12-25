// ModelDepartment.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import ModelDepartment from '../../components/model/ModelDepartment';

test('ModelDepartment root element is present', () => {
  render(
    <Provider store={store}>
      <ModelDepartment id={1} />
    </Provider>
  );
  const rootElement = document.getElementsByClassName('Department')[0];
  expect(rootElement).toBeInTheDocument();
});