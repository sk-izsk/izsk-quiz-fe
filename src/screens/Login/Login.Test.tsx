import { render } from '@testing-library/react';
import React from 'react';
import { RouterContextProvider } from '../../RouterContextProvider';
import Login from './Login';

test('Login renders correctly', () => {
  const { asFragment } = render(
    <RouterContextProvider>
      <Login />
    </RouterContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
