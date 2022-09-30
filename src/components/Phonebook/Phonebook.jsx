import React from 'react';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContainerPhonebook, SearchMessage } from './Phonebook.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
  selectFilteredContacts,
} from 'redux/selectors';

export const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filtered = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <ContainerPhonebook>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>... Loading ...</b>}
      {contacts.length !== 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          {filter === '' ? (
            <ContactList />
          ) : filtered.length === 0 ? (
            <SearchMessage>Contact not found</SearchMessage>
          ) : (
            <ContactList />
          )}
        </>
      )}
    </ContainerPhonebook>
  );
};
