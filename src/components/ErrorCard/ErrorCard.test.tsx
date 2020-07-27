import { render } from '@testing-library/react';
import React from 'react';
import { ErrorCard } from './ErrorCard';

test('ErrorCard renders correctly', () => {
  const { asFragment } = render(<ErrorCard />);
  expect(asFragment()).toMatchSnapshot();
});
