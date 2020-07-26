import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import { RouterContextProvider } from './RouterContextProvider';

test('App renders correctly', () => {
  const { asFragment } = render(
    <RouterContextProvider>
      <App />
    </RouterContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
