// Model.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import Model from '../../components/Model';

test('Model root element is present', () => {
  render(
    <Provider store={store}>
      <Model />
    </Provider>
  );
  const rootElement = document.getElementsByClassName('Model')[0];
  expect(rootElement).toBeInTheDocument();
});