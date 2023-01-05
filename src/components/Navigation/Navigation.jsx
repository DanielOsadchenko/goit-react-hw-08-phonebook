import { UserMenu } from 'components/UserMenu/UserMenu';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <header>
        {isLoggedIn && (
          <div>
            <Link to="/home">Home</Link>
            <Link to="/contacts">Contacts</Link>
            <UserMenu />
          </div>
        )}
        {!isLoggedIn && (
          <div>
            <Link to="/home">Home</Link>
            <Link to="/login">SignIn</Link>
            <Link to="/register">SignUp</Link>
          </div>
        )}
      </header>
      <Outlet />
    </div>
  );
};
