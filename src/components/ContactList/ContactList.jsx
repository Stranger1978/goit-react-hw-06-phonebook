import React from 'react';
import style from './ContactList.module.css';
import { store } from 'redux/store';
import { del } from 'redux/store';
import { useDispatch } from 'react-redux';

const ContactList = () => {
    const dispatch = useDispatch();

    return (
    <ul className={style.contactList}>
      {store.contacts.map(({ id, name, number }) => (
          <li key={id} className={style.contact}>
          {name}: {number}
              <button className={style.button} onClick={dispatch(del(id))}>Delete</button>
        </li>
      ))}
    </ul>
);
 }

export default ContactList;