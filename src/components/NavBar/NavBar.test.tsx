import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import { RouterContextProvider } from '../../RouterContextProvider';
import { NavBar } from './NavBar';

test('NavBar renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <RouterContextProvider>
        <NavBar />
      </RouterContextProvider>
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
