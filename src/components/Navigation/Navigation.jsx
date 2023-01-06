import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AppBar, Box } from '@mui/material';
import { HeaderLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          p: '0.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {isLoggedIn && (
          <Box
            margin={1}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <HeaderLink to="/contacts">Contacts</HeaderLink>
            <UserMenu />
          </Box>
        )}
        {!isLoggedIn && (
          <Box sx={{ ml: 'auto' }}>
            <HeaderLink to="/login">SignIn</HeaderLink>
            <HeaderLink to="/register">SignUp</HeaderLink>
          </Box>
        )}
      </AppBar>
      <Outlet />
    </div>
  );
};
