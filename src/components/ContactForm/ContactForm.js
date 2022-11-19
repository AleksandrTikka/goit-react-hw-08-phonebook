import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

import { addContact } from 'redux/contacts/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Label, Error } from './ContactForm.styled';

import { Box } from '../Box';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import toast from 'react-hot-toast';

const Input = styled(Field)`
  width: 100%;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  :hover,
  :focus {
    outline: ${p => p.theme.borders.bold};
    outline-color: ${p => p.theme.colors.heading};
  }
`;

const errorName =
  "Name is required and it may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const errorNumber =
  'Phone number is required and it must be digits and can contain spaces, dashes, parentheses and can start with +';
const regularName =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
// const regularNumber =
//   /+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().required('input is required').matches(regularName, {
    message: errorName,
  }),
  number: yup
    .string()
    .required('input is required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message: errorNumber,
      }
    ),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleFormSubmit = values => {
    const compareContact = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    compareContact
      ? toast.error(`${values.name} is already in contacts`)
      : dispatch(addContact(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        handleFormSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <Box mb={4} display="flex" flexDirection="column">
          <Label htmlFor="name">
            Name
            <Input
              type="text"
              name="name"
              placeholder="enter name"
              // value={this.state.name}
              // onChange={this.handleInputChange}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // required
            />
            <ErrorMessage
              name="name"
              render={msg => <Error>{errorName}</Error>}
            />
          </Label>
          <Label htmlFor="number">
            Number
            <Input
              type="tel"
              name="number"
              placeholder="enter number"
              // value={this.state.number}
              // onChange={this.handleInputChange}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              // required
            />
            <ErrorMessage
              name="number"
              render={msg => <Error>{errorNumber}</Error>}
            />
          </Label>
        </Box>
        <Box display="flex" justifyContent="center">
          <IconButton color="success" type="submit" name="addContact">
            <AddCircleIcon />
          </IconButton>
        </Box>
      </Form>
    </Formik>
  );
};

export default ContactForm;
