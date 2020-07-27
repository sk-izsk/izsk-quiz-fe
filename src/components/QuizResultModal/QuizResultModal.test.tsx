import { render } from '@testing-library/react';
import React from 'react';
import { RouterContextProvider } from '../../RouterContextProvider';
import { QuizResultModal } from './QuizResultModal';

const mockData = {
  visible: true,
  onClose: jest.fn(),
  retry: jest.fn(),
  title: 'mock title',
  type: 'mock type',
  totalQuestion: 20,
  correctAnswer: 10,
};

test('QuizResultModal renders correctly', () => {
  const { asFragment } = render(
    <RouterContextProvider>
      <QuizResultModal {...mockData} />
    </RouterContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
