import { render } from '@testing-library/react';
import React from 'react';
import { RouterContextProvider } from '../../RouterContextProvider';
import SignUp from './SignUp';

test('SignUp renders correctly', () => {
  const { asFragment } = render(
    <RouterContextProvider>
      <SignUp />
    </RouterContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
