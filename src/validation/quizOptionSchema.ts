import * as yup from 'yup';
import { stringSchema } from '.';
export interface QuizOptionSchema {
  numberOfQuestions?: number;
  categoryValue?: number | null;
  difficultyLevel?: string | null;
  questionType?: string | null;
}

const quizOptionSchema = yup.object<QuizOptionSchema>().shape({
  numberOfQuestions: yup.number().min(1).max(50),
  categoryValue: yup.number().nullable(),
  difficultyLevel: stringSchema.nullable(),
  questionType: stringSchema.nullable(),
});

export { quizOptionSchema };
