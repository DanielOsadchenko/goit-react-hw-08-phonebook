import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(16),
  });