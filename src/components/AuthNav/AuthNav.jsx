import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.auth} to="/login">
        Log In
      </NavLink>
      <NavLink className={css.auth} to="/register">
        Register
      </NavLink>
    </div>
  );
};
