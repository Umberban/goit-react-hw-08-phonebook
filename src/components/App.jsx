import { lazy} from 'react';
import { Skeleton} from '@chakra-ui/react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/authHook';
import { Backdrop } from './Backdrop/Backdrop';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { refreshUser } from 'redux/auth';
import { PrivateRoute } from './PrivatRoute';
import { ControledRoute } from './ControledRoute';

const HomePage = lazy(() => import ('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
  ) : (
      <Routes>
        <Route path="/" element={<Backdrop />}>
          <Route index element={<HomePage />} />
          <Route
          path="/register"
          element={
            <ControledRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
          <Route
          path="/login"
          element={
            <ControledRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
          <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        </Route>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>

  );
};