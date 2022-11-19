import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { ThreeDots } from 'react-loader-spinner';

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
      width="350px"
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
        {isLoading && (
          <Box display="flex" justifyContent="center">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </Box>
        )}
        {error && <p>{error}</p>}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <Box mb={4}>contacts not added yet...</Box>
        )}
      </Section>
    </Box>
  );
}
