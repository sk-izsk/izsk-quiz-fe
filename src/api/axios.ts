import axios from 'axios';

export const BASE_URL_QUIZ: string = `https://opentdb.com/api.php`;

export const BASE_URL: string = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';

const axiosQuiz = axios.create({
  baseURL: BASE_URL_QUIZ,
});

const axiosAuthorization = axios.create({
  baseURL: BASE_URL,
});

export { axiosQuiz, axiosAuthorization };
