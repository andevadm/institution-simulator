// ModelTask.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import ModelTask from '../../components/model/ModelTask';

test('ModelTask root element is present', () => {
  render(
    <Provider store={store}>
      <ModelTask id={1} />
    </Provider>
  );
  const rootElement = document.getElementsByClassName('Task')[0];
  expect(rootElement).toBeInTheDocument();
});