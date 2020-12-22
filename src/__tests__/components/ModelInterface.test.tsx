// ModelInterface.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import ModelInterface from '../../components/ModelInterface';

test('ModelInterface root element is present', () => {
  render(
    <Provider store={store}>
      <ModelInterface />
    </Provider>
  );
  const rootElement = document.getElementsByClassName('Interface')[0];
  expect(rootElement).toBeInTheDocument();
});