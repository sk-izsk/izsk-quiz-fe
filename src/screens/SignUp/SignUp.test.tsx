import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import { RouterContextProvider } from '../../RouterContextProvider';
import SignUp from './SignUp';

test('SignUp renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <RouterContextProvider>
        <SignUp />
      </RouterContextProvider>
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
