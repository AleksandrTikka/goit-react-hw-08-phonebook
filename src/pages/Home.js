// import { useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { StyledLink } from './Home/Home.styled';
import { Container } from '@mui/material';
import { Box } from 'components/Box';

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <Container
      sx={{
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {!isLoggedIn ? (
        <Box as="h1" fontWeight="500px" fontSize="48" textAlign="center">
          Dear Guest, welcome to Phonebook! If you want to proceed, please
          <StyledLink to="/register"> Register </StyledLink>
          or <StyledLink to="/contacts"> Log In</StyledLink>!
        </Box>
      ) : (
        <Box as="h1" fontWeight="500px" fontSize="48" textAlign="center">
          Dear {user}, welcome to{' '}
          <StyledLink to="/contacts">Phonebook</StyledLink>
        </Box>
      )}
    </Container>
  );
}
