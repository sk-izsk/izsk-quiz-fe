import { render } from '@testing-library/react';
import React from 'react';
import { CardContainer } from './CardContainer';

const mockData = {
  inset: true,
  cardAction: <div>mock</div>,
  cardLoading: true,
  cardBordered: true,
};

test('CardContainer renders correctly', () => {
  const { asFragment } = render(<CardContainer {...mockData} />);
  expect(asFragment()).toMatchSnapshot();
});
