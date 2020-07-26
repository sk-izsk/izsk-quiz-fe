import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { indexOf, shuffle } from 'lodash';
import { Question } from '../api/response';
export interface QuestionList {
  question: string;
  answers: string[];
  category: string;
  type: string;
  difficulty: string;
  indexOfCorrectAnswer: string | number;
}

let initialState: QuestionList[] = [];

const questionListSlice = createSlice({
  name: 'questionList',
  initialState,
  reducers: {
    addQuestions: (state: QuestionList[], action: PayloadAction<Question[]>) => {
      let questionList: QuestionList[] = [];
      action.payload.forEach((question: Question) => {
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
      state = questionList;
      return state;
    },
  },
});

export const { addQuestions } = questionListSlice.actions;

export default questionListSlice.reducer;
