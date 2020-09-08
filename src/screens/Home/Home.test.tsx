import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import { RouterContextProvider } from '../../RouterContextProvider';
import Home from './Home';

test('Home renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <RouterContextProvider>
        <Home />
      </RouterContextProvider>
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
