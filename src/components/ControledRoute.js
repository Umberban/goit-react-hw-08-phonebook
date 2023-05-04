import { useAuth } from 'hooks/authHook';
import { Navigate } from 'react-router-dom';

export const ControledRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};