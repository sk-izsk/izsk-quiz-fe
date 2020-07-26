import { QuestionListResponse } from '../api/response';
import questionList, { addQuestions, Questions } from './questionListSlice';

const initialState: Questions = {};

interface Payload {
  questions: QuestionListResponse;
}

describe('question list reducer', () => {
  it('should handle initial state', () => {
    expect(questionList(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle add question', () => {
    expect(
      questionList(initialState, {
        type: addQuestions.type,
        payload: {
          response_code: 0,
          results: [
            {
              category: 'mock category',
              type: 'mock type',
              difficulty: 'mock difficulty',
              question: 'mock question',
              correct_answer: 'mock-1',
              incorrect_answers: ['mock-2', 'mock-3'],
            },
          ],
        } as Payload['questions'],
      }),
    ).toEqual({
      responseCode: 0,
      questions: [
        {
          question: 'mock question',
          answers: ['mock-2', 'mock-3', 'mock-1'],
          category: 'mock category',
          type: 'mock type',
          difficulty: 'mock difficulty',
          indexOfCorrectAnswer: 2,
        },
      ],
    });
  });
});
