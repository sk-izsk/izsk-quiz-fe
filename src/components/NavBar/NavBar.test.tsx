import { render } from '@testing-library/react';
import React from 'react';
import { RouterContextProvider } from '../../RouterContextProvider';
import { NavBar } from './NavBar';

test('NavBar renders correctly', () => {
  const { asFragment } = render(
    <RouterContextProvider>
      <NavBar />
    </RouterContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
