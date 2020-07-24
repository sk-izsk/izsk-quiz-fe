import { render } from '@testing-library/react';
import React from 'react';
import { LoadingScreen } from './Loader';

test('LoadingScreen renders correctly', () => {
  const { asFragment } = render(<LoadingScreen />);
  expect(asFragment()).toMatchSnapshot();
});
