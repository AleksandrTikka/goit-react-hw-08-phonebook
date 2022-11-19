import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/operations';
import { Form } from './RegisterForm.styled';
import { Button } from '@mui/material';
import { TextField, Box } from '@mui/material';

import { Redirect } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { register } = authOperations;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          fullWidth
          autoFocus
          autoComplete="given-name"
          placeholder="enter name"
          color="success"
          label="Name"
          type="text"
          name="name"
        />
        <TextField
          autoComplete="email"
          fullWidth
          placeholder="enter email"
          color="success"
          label="Email"
          type="email"
          name="email"
        />

        <TextField
          fullWidth
          placeholder="enter password"
          color="success"
          label="Password"
          type="password"
          name="password"
        />
        <Button
          fullWidth
          variant="contained"
          size="small"
          color="success"
          type="submit"
        >
          Register
        </Button>
        <Redirect to="/login" underlineHover>
          Do you have an account? Log in
        </Redirect>
      </Form>
    </Box>
  );
};
