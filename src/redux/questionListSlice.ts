import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { indexOf, shuffle } from 'lodash';
import { Question, QuestionListResponse } from '../api/response';
export interface QuestionList {
  question: string;
  answers: string[];
  category: string;
  type: string;
  difficulty: string;
  indexOfCorrectAnswer: string | number;
}

export interface Questions {
  responseCode?: number;
  questions?: QuestionList[];
}

let initialState: Questions = {};

const questionListSlice = createSlice({
  name: 'questionList',
  initialState,
  reducers: {
    addQuestions: (state: Questions, action: PayloadAction<QuestionListResponse>) => {
      let questionList: QuestionList[] = [];
      action.payload.results.forEach((question: Question) => {
        const answers = shuffle(question.incorrect_answers.concat([question.correct_answer]));
        const indexOfCorrectAnswer = indexOf(answers, question.correct_answer);
        questionList.push({
          answers,
          indexOfCorrectAnswer,
          question: question.question,
          type: question.type,
          difficulty: question.difficulty,
          category: question.category,
        });
      });
      state = { responseCode: action.payload.response_code, questions: questionList };
      return state;
    },
  },
});

export const { addQuestions } = questionListSlice.actions;

export default questionListSlice.reducer;
