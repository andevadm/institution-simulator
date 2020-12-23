// Info.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import Info from '../../components/Info';

test('Info root element is present', () => {
  render(
    <Provider store={store}>
      <Info />
    </Provider>
  );
  const rootElement = document.getElementsByClassName('Info')[0];
  expect(rootElement).toBeInTheDocument();
});