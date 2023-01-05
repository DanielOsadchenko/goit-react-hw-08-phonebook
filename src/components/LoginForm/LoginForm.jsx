import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { initialValues } from './formInitialValues';
import { schema } from './yupSchema';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { SignIn, Box } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <SignIn autoComplete="off">
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />
          <ErrorMessage name="password" component="div" />

          <button type="submit">Submit</button>
        </SignIn>
      </Formik>
    </Box>
  );
};
