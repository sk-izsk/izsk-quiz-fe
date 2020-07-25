import axios from 'axios';

export const BASE_URL_QUIZ: string = `https://opentdb.com/api.php`;

const axiosQuiz = axios.create({
  baseURL: BASE_URL_QUIZ,
});

export { axiosQuiz };
