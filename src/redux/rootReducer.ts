import { combineReducers } from '@reduxjs/toolkit';
import accountSlice from './accountSlice';
import questionListSlice from './questionListSlice';

const rootReducer = combineReducers({
  questions: questionListSlice,
  account: accountSlice,
});

export { rootReducer };
