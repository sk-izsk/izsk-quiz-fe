import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import Quiz from './Quiz';

test('Quiz renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <Quiz />
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
