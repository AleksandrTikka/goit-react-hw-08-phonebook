import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/operations';
import { Form } from 'components/RegisterForm/RegisterForm.styled';
import { TextField, Button, Box } from '@mui/material';
// import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { logIn } = authOperations;
    dispatch(
      logIn({
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
          Log In
        </Button>
      </Form>
    </Box>
  );
};
