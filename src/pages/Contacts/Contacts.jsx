import {ContactForm} from 'components/ContactForm/ContactForm';
import {ContactList} from 'components/ContactList/ContactList';
import {Filter} from 'components/Filter/Filter';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/api';
import { getIsLoading } from 'redux/contactSelectors';
import { LoadTable } from 'components/LoadTable/LoadTable';

 const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
    <ContactForm/>
    <Filter/>
    <div>{isLoading && <LoadTable/>}
    <ContactList/>
    </div>
    </>

  )
}
export default ContactsPage;