import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountResponse } from '../api/response';

export interface Account {
  isLoggedIn: boolean;
  user?: AccountResponse;
}

let initialState: Account = {
  isLoggedIn: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addUser: (state: Account, action: PayloadAction<AccountResponse>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      return state;
    },
    removeUser: (state: Account, _) => {
      state.isLoggedIn = false;
      delete state.user;
      return state;
    },
  },
});

export const { addUser, removeUser } = accountSlice.actions;

export default accountSlice.reducer;
