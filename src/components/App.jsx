import ContactForm from './ContactForm/ContactForm';
import React from 'react';
import { nanoid } from 'nanoid';
import { SearchContact } from './SearchContact/SearchContact';
import ContactList from './ContactList/ContactList';
import { CONTACTS_KEY } from '../constants/constants';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem(CONTACTS_KEY)) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );

  const [filter, setFilter] = useState('');

  const handleSubmit = (e, newName, newNumber) => {
    e.preventDefault();
    for (const contact of contacts) {
      if (contact.name === newName) {
        alert(`Контакт с именем ${newName} уже добавлен в телефонную книгу`);
        return;
      }
    }

    setContacts(state => [
      ...state,
      {
        id: nanoid(),
        name: newName,
        number: newNumber,
      },
    ]);

    console.log(contacts);
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h2>ContactForm</h2>
      <ContactForm onSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <h3>Search by name</h3>
      <SearchContact onFilter={handleFilter} filter={filter} />
      <ContactList
        visibleContacts={getVisibleContacts()}
        onDelete={handleDeleteContact}
      />
    </>
  );
};
export default App;
