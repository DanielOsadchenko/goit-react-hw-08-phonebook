import { Container, Typography } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const Register = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h2" component="h1" mb={4}>
        SIGN UP
      </Typography>

      <RegisterForm />
    </Container>
  );
};
