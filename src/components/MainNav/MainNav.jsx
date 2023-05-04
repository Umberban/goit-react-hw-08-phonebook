import React from 'react';
import { NavLink } from 'react-router-dom';
import css from 'components/MainNav/MainNav.module.css';
import { useAuth } from 'hooks/authHook';

export const MainNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
        <NavLink className={css.title}  to="/">Home</NavLink>
        {isLoggedIn && <NavLink className={css.title} to="/contacts">Contacts</NavLink>}
    </nav>
  );
};