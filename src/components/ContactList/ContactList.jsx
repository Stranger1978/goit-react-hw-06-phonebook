import React from 'react';
import style from './ContactList.module.css';
//import { store } from 'redux/store';
import { del } from 'redux/Contacts/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    return (
    <ul className={style.contactList}>
      {contacts.map(({ id, name, number }) => (
          <li key={id} className={style.contact}>
          {name}: {number}
              <button className={style.button} onClick={dispatch(del(id))}>Delete</button>
        </li>
      ))}
    </ul>
);
 }

export default ContactList;