export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuestionListResponse {
  response_code: number;
  results: Question[];
}

export interface QuizHistory {
  date: Date;
  correctAnswer: number;
  totalQuestion: number;
  title: string;
  type: string;
}

export interface AccountResponse {
  email: string;
  nickName: string;
  quizHistory: QuizHistory[];
}
