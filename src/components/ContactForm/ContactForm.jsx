import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/api';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactSelectors';
import css from './ContactForm.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

   const handleChange = evt => {
    if(evt.target.name==='name'){
      setName(evt.target.value)
     }
    else if(evt.target.name==='number'){
      setNumber(evt.target.value)
    }
  };

  const handlerSubmit = e => {
    e.preventDefault();

    if (contacts.some(e => e.name === name)) {
      toast.info("This contact already exists");
      return;
    }
    dispatch(addContact({name, number}));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handlerSubmit}>
    <label className={css.label} htmlFor="name">
        Name
        </label>
    <input
    class={css.input}
  type="text"
  id="name"
  onChange={handleChange}
  name="name"
  value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<label className={css.label} htmlFor="number">
  Phone number
  </label>
<input
  class={css.input}
  onChange={handleChange}
  type="tel"
  id="number"
  name="number"
  value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
  <button type="submit" className={css.btn}>ADD</button>
  </form>
  );
};

