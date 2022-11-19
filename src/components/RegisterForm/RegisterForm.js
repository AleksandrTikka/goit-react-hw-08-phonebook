import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/operations';
import { Form } from './RegisterForm.styled';
import { Button } from '@mui/material';
import { TextField, Box } from '@mui/material';

// import css from './RegisterForm.module.css';

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
          placeholder="enter name"
          color="success"
          label="Name"
          type="text"
          name="name"
        />
        <TextField
          placeholder="enter email"
          color="success"
          label="Email"
          type="email"
          name="email"
        />

        <TextField
          placeholder="enter password"
          color="success"
          label="Password"
          type="password"
          name="password"
        />
        <Button variant="contained" size="small" color="success" type="submit">
          Register
        </Button>
      </Form>
    </Box>
  );
};
