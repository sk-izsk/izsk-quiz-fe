import { render } from '@testing-library/react';
import React from 'react';
import { QuizResultCard } from './QuizResultCard';

test('QuizResultCard renders correctly', () => {
  const { asFragment } = render(<QuizResultCard />);
  expect(asFragment()).toMatchSnapshot();
});
