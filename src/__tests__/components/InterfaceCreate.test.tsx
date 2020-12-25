// InterfaceCreate.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import InterfaceCreate from '../../components/model/InterfaceCreate';

test('InterfaceCreate root element is present', () => {
  render(
    <Provider store={store}>
      <InterfaceCreate />
    </Provider>
  );
  const rootElement = document.getElementsByClassName('InterfaceCreate')[0];
  expect(rootElement).toBeInTheDocument();
});