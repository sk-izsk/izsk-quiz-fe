import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from '../api/response';

let initialState: Question[] = [];

const questionListSlice = createSlice({
  name: 'questionList',
  initialState,
  reducers: {
    addQuestions: (state: Question[], action: PayloadAction<Question[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addQuestions } = questionListSlice.actions;

export default questionListSlice.reducer;
