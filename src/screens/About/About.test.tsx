import { render } from '@testing-library/react';
import React from 'react';
import About from './About';

test('About renders correctly', () => {
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();
});
