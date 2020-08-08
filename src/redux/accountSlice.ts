import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountResponse } from '../api/response';
import { getFromLocalStorage } from '../utils';

export interface Account {
  isLoggedIn: boolean;
  error?: string;
  user?: AccountResponse;
}

let initialState: Account = {
  isLoggedIn: getFromLocalStorage('isLoggedIn') !== null ? getFromLocalStorage('isLoggedIn') : false,
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
    addError: (state: Account, action: PayloadAction<{ error: string }>) => {
      state.isLoggedIn = false;
      state.error = action.payload.error;
    },
  },
});

export const { addUser, removeUser, addError } = accountSlice.actions;

export default accountSlice.reducer;
