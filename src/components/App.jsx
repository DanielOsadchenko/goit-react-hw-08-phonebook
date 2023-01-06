import { Routes, Route } from 'react-router-dom';
import { Register } from './Pages/Register/Register';
import { Login } from './Pages/Login/Login';
import { ContactPage } from './Pages/ContactPage/ContactPage';
import { NotFound } from './Pages/NotFound/NotFound';
import { Navigation } from './Navigation/Navigation';
import { Home } from './Pages/Home/Home';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <PacmanLoader
      color="#36d7b7"
      loading={true}
      cssOverride={{}}
      size={70}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  ) : (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
