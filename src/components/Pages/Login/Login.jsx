import { Container, Typography } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const Login = () => {
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
        SIGN IN
      </Typography>

      <LoginForm />
    </Container>
  );
};
