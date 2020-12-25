// InterfaceMain.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import InterfaceMain from '../../components/model/InterfaceMain';

test('InterfaceMain root element is present', () => {
  render(
    <Provider store={store}>
      <InterfaceMain />
    </Provider>
  );
  const rootElement = document.getElementsByClassName('InterfaceMain')[0];
  expect(rootElement).toBeInTheDocument();
});