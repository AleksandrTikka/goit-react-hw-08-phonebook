import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

import Section from 'components/Section';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations.js';
import ContactList from 'components/ContactList';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box
      textAlign="center"
      bg="bgApp"
      pt={4}
      mx="auto"
      mt="50px"
      width="450px"
      flexWrap="wrap"
      justifyContent="center"
      border="normal"
      borderRadius="md"
      borderColor="border"
      as="main"
    >
      <Box as="h1" textAlign="center" color="heading" fontSize="l">
        Phonebook
      </Box>
      <Section>{<ContactForm />}</Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        {contacts.length > 0 && <ContactList />}
      </Section>
    </Box>
  );
}
