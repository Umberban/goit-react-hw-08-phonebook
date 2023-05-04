import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth';
import css from './Login.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    if(evt.target.name==='email'){
        setEmail(evt.target.value)
     }
    else if(evt.target.name==='password'){
        setPassword(evt.target.value)
    }
  };

  const handlerSubmit = e => {
    e.preventDefault();

    dispatch(login({email, password}));
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form} onSubmit={handlerSubmit}>
      <label className={css.label}>
        Email
        <input
          className={css.input}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}

        />
      </label>
      <label className={css.label}>
       Password
        <input
          className={css.input}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button className={css.btn}>Log In</button>
    </form>
  );
}

export default  LoginPage;