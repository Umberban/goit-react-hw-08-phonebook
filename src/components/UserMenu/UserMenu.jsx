import React from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/authHook';
import { logOut } from 'redux/auth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const {user} = useAuth();
  return (
    <div className={css.menu} >
      <p className={css.emailText}>{user.email}</p>
      <button className={css.btn} type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};

