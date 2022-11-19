import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/operations';
import { Form, Redirect } from 'components/RegisterForm/RegisterForm.styled';
import { TextField, Button, Box } from '@mui/material';

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
          fullWidth
          autoFocus
          autoComplete="email"
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
          Log In
        </Button>
        <Redirect to="/register">Don't have an account? Sign up</Redirect>
      </Form>
    </Box>
  );
};
