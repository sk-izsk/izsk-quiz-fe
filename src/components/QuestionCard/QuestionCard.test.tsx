import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import { QuestionCard } from './QuestionCard';

test('QuestionCard renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <QuestionCard />
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
