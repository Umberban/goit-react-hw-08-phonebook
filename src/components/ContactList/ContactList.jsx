import css from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contactSelectors';
import { deleteContact } from 'redux/api';


export const ContactList =()=>{
    const dispatch = useDispatch();
    const contacts = useSelector(getFilteredContacts);

    return(
        <ul className={css.list}>
            {contacts.map(({id,name,number})=>(<li className={css.item} key={id}>
                <div>
                <p><b>Name:</b> {name}</p>
                <p><b>Phone:</b> {number}</p>
                </div>
                <button className={css.btn} type='button' onClick={()=>dispatch(deleteContact(id))}>X</button>
            </li>))}
        </ul>
    )
}
// toFix