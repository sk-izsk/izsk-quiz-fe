import { Dispatch } from '@reduxjs/toolkit';
import { fetchQuestions } from '../api';
import { Difficulty, QuestionType } from '../utils/quizOptions';
import { addQuestions } from './questionListSlice';
import { RootState } from './store';

const getQuestion = (amount: number, category: number | null, difficulty: Difficulty, type: QuestionType) => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      console.log('this is res', amount, category, difficulty, type);
      const response = await fetchQuestions(amount, category, difficulty, type);
      if (response?.status === 200) {
        dispatch(addQuestions(response.data.results));
      }
    } catch (err) {
      console.warn(err);
    }
  };
};

const Actions = {
  getQuestion,
};

export { Actions };
