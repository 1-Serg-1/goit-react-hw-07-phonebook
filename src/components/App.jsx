import { GlobalStyle } from './GlobalStyle';
import React from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Phonebook />
      <GlobalStyle />
    </>
  );
};
