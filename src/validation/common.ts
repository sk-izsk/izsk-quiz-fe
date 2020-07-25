import * as yup from 'yup';

const stringSchema: yup.StringSchema<string | undefined> = yup.string();

export { stringSchema };
