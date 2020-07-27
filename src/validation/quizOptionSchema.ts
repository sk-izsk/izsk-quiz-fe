import * as yup from 'yup';
import { numberSchema, stringSchema } from '.';
export interface QuizOptionSchema {
  numberOfQuestions?: number;
  categoryValue?: number | null;
  difficultyLevel?: string | null;
  questionType?: string | null;
}

const quizOptionSchema = yup.object<QuizOptionSchema>().shape({
  numberOfQuestions: numberSchema
    .min(1, 'Number of questions must be more than 0')
    .max(50, 'Number of questions must be less than or equal to 50'),
  categoryValue: yup.number().nullable(),
  difficultyLevel: stringSchema.nullable(),
  questionType: stringSchema.nullable(),
});

export { quizOptionSchema };
