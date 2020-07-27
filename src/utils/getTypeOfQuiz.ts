import { QuestionList } from '../redux/questionListSlice';

const getTypeOfQuiz = (quizArray: QuestionList[]) => {
  if (quizArray !== undefined) {
    if (quizArray.length > 1) {
      if (quizArray[0].category !== quizArray[1].category) {
        return 'Any Category';
      } else {
        return quizArray[0].category;
      }
    } else {
      return quizArray[0].category;
    }
  }
};

const getDifficultyOfQuiz = (quizArray: QuestionList[]) => {
  if (quizArray !== undefined) {
    if (quizArray.length > 1) {
      if (quizArray[0].type !== quizArray[1].type) {
        return 'Any Type';
      } else {
        return quizArray[0].type;
      }
    } else {
      return quizArray[0].type;
    }
  }
};

export { getTypeOfQuiz, getDifficultyOfQuiz };
