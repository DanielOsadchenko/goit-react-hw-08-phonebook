import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required().min(2).max(16),
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(16),
  });