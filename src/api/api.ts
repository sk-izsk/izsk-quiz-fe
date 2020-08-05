import { Difficulty, QuestionType } from '../utils/quizOptions';
import { SignUpSchema } from '../validation/signUpSchema';
import { axiosAuthorization, axiosQuiz } from './axios';

const quizUrl = (amount: number, category: number | null, difficulty: Difficulty, type: QuestionType) => {
  return `?amount=${amount}${category !== null ? `&category=${category}` : ''}${
    difficulty !== null ? `&difficulty=${difficulty}` : ''
  }${type !== null ? `&type=${type}` : ''}`;
};

const fetchQuestions = async (amount: number, category: number | null, difficulty: Difficulty, type: QuestionType) => {
  try {
    const response = await axiosQuiz.get(quizUrl(amount, category, difficulty, type));
    return {
      status: response.status,
      data: response.data,
    };
  } catch (err) {
    console.warn(err);
  }
};

const postSignUp = async (signUpDetails: SignUpSchema) => {
  try {
    const response = await axiosAuthorization.post('/sign-up', signUpDetails);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (err) {
    console.warn(err);
  }
};

export { quizUrl, fetchQuestions, postSignUp };
