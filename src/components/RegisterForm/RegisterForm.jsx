import React from 'react';
import { useFormik } from 'formik';
import { initialValues } from './formInitialValues';
import { schema } from './yupSchema';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, Button, TextField } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
      resetForm();
    },
  });

  return (
    <Box sx={{ width: '500px' }}>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          required
          sx={{ mb: '1rem' }}
          variant="outlined"
          id="name"
          name="name"
          type="text"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          required
          sx={{ mb: '1rem' }}
          variant="outlined"
          id="email"
          name="email"
          type="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          required
          sx={{ mb: '1rem' }}
          variant="outlined"
          id="password"
          name="password"
          type="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          variant="contained"
          type="submit"
          size="large"
          sx={{ width: '100%' }}
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
};
