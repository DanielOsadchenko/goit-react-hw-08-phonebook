import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { initialValues } from './formInitialValues';
import { schema } from './yupSchema';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="email">Email</label>
        <Field id="email" name="email" type="email" />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" type="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
