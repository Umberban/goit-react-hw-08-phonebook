import React from 'react';
import {UserMenu} from 'components/UserMenu/UserMenu';
import {AuthNav} from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/authSelectors';
import {MainNav} from 'components/MainNav/MainNav';
import css from './AppBar.module.css'

export const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <header  className={css.header} >
      <MainNav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
