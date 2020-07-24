import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

export interface RouterContextProviderProps {}

const RouterContextProvider: React.FC<RouterContextProviderProps> = ({ children }) => {
  const history: any = createMemoryHistory();
  return <Router history={history}>{children} </Router>;
};

export { RouterContextProvider };
