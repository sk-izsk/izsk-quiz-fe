import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import { QuizOptionsModal } from './QuizOptionsModal';

test('QuizOptionsModal renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <QuizOptionsModal />
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
