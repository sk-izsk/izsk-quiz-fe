import * as yup from 'yup';

const stringSchema: yup.StringSchema<string | undefined> = yup.string();
const emailSchema: yup.StringSchema<string | undefined> = yup.string().email();

export { stringSchema, emailSchema };
