// InterfaceReset.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import InterfaceReset from '../../components/model/InterfaceReset';

test('InterfaceReset root element is present', () => {
  render(
    <Provider store={store}>
      <InterfaceReset />
    </Provider>
  );
  const rootElement = document.getElementsByClassName('InterfaceReset')[0];
  expect(rootElement).toBeInTheDocument();
});