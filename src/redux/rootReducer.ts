import { combineReducers } from '@reduxjs/toolkit';
import questionListSlice from './questionListSlice';

const rootReducer = combineReducers({
  questions: questionListSlice,
});

export { rootReducer };
