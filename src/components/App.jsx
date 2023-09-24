import { useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Section from './Section';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { add } from 'redux/store';
import { change } from 'redux/store';
import {store} from 'redux/store';

export function App() {
  const dispatch = useDispatch();

  //const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  
  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number
    };
    
    if (store.contacts.some((contact) => name.toLowerCase() === contact.name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(add(newContact));
  };

  const changeFilter = e => {
    const filterValue = e.currentTarget;
    dispatch(change(filterValue.value));
  };
  
  //const getVisibleContact = () => {
  //  const normalizeFilter = filter.toLowerCase();
  //  return contacts.filter(contact =>
  //    contact.name.toLowerCase().includes(normalizeFilter));
  //};

  useEffect(() => {
    //  window.localStorage.setItem('contacts', JSON.stringify(contacts));
    //}, [contacts]);

    //const visibleContacts = getVisibleContact();
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section title="Contacts">
          <Filter onChange={changeFilter} />
          <ContactList />
        </Section>
      </div>
    );
  });
}