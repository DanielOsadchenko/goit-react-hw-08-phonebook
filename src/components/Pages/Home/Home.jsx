import { Navigate } from 'react-router-dom';

//Використовується для редіректу на необхідну сторінку
export const Home = () => {
  return <Navigate to="/login" replace={true} />;
};
