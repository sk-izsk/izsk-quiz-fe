import { render } from '@testing-library/react';
import React from 'react';
import { Fa500Px } from 'react-icons/fa';
import { RouterContextProvider } from '../../RouterContextProvider';
import { Drawer } from './Drawer';

const mockData = {
  open: true,
  handleDrawer: jest.fn(),
  menuItems: [
    {
      name: 'mock name',
      to: '/mockRoute',
      icon: <Fa500Px />,
    },
  ],
};
test('Drawer renders correctly', () => {
  const { asFragment } = render(
    <RouterContextProvider>
      <Drawer {...mockData} />
    </RouterContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
