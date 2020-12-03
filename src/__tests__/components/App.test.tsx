// App.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/App';

test('App root element is present', () => {
  render(<App />);
  const rootElement = document.getElementsByClassName('App')[0];
  expect(rootElement).toBeInTheDocument();
});