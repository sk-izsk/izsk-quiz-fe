import { Dispatch } from '@reduxjs/toolkit';
import { axiosAuthorization, fetchQuestions } from '../api';
import { header, setFromLocalStorage } from '../utils';
import { Difficulty, QuestionType } from '../utils/quizOptions';
import { LoginSchema } from '../validation/loginSchema';
import { SignUpSchema } from '../validation/signUpSchema';
import { addError, addUser } from './accountSlice';
import { addQuestions } from './questionListSlice';
import { RootState } from './store';

const getQuestion = (amount: number, category: number | null, difficulty: Difficulty, type: QuestionType) => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const response = await fetchQuestions(amount, category, difficulty, type);
      if (response?.status === 200) {
        dispatch(addQuestions(response.data));
      }
    } catch (err) {
      console.warn(err);
    }
  };
};

const getLogin = (loginDetail: LoginSchema) => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const response = await axiosAuthorization.post('/login', loginDetail);
      const { data } = response;
      if (data && data.length > 0) {
        dispatch(addError({ error: data }));
        return;
      }
      setFromLocalStorage('isLoggedIn', true);
      setFromLocalStorage('token', data.token);
      const userDetails = {
        nickName: data.nickName,
        email: data.email,
        quizHistory: data.quizHistory,
      };
      dispatch(addUser(userDetails));
    } catch (err) {
      console.warn(err);
    }
  };
};

const getSignUp = (SignUpDetails: SignUpSchema) => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const response = await axiosAuthorization.post('/sign-up', SignUpDetails);
      const { data } = response;
      if (data && data.length > 0) {
        dispatch(addError({ error: data }));
        return;
      }
      setFromLocalStorage('isLoggedIn', true);
      setFromLocalStorage('token', data.token);
      const userDetails = {
        nickName: data.nickName,
        email: data.email,
        quizHistory: data.quizHistory,
      };
      dispatch(addUser(userDetails));
      window.location.reload();
    } catch (err) {
      console.warn(err);
    }
  };
};

const getInformation = () => {
  return async (dispatch: Dispatch, getState: RootState) => {
    try {
      const response = await axiosAuthorization.get('/user', { headers: header });
      console.log('this is response', await response);
      const { data } = response;
      const userDetails = {
        nickName: data.nickName,
        email: data.email,
        quizHistory: data.quizHistory,
      };
      dispatch(addUser(userDetails));
    } catch (err) {
      console.warn(err);
    }
  };
};

const Actions = {
  getQuestion,
  getLogin,
  getInformation,
  getSignUp,
};

export { Actions };
