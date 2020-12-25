// ModelInstitution.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import ModelInstitution from '../../components/model/ModelInstitution';

test('ModelInstitution root and child elements are present', () => {
  render(
    <Provider store={store}>
      <ModelInstitution>
        <p>Test child</p>
      </ModelInstitution>
    </Provider>
  );
  const rootElement = document.getElementsByClassName('ModelInstitution')[0];
  expect(rootElement).toBeInTheDocument();
  const childContainer = document.getElementsByClassName('institution-departments')[0];
  expect(childContainer.innerHTML).toBe('<p>Test child</p>');
});