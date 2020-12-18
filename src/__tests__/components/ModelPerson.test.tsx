// ModelPerson.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import ModelPerson from '../../components/ModelPerson';

test('ModelPerson root element is present', () => {
  render(
    <Provider store={store}>
      <ModelPerson id="test" />
    </Provider>
  );
  const rootElement = document.getElementsByClassName('Person')[0];
  expect(rootElement).toBeInTheDocument();
});