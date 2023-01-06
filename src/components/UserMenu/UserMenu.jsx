import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex' }}>
      <Typography variant="h6" color="#e8eaf6">
        Welcome, {user.name}
      </Typography>
      <Button
        sx={{ ml: '2rem' }}
        variant="contained"
        color="error"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
