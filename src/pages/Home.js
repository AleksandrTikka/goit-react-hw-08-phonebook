// import { useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import { Box } from 'components/Box';
// import styled from 'styled-components';

//   title: {
//     
//   },
// }));

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
        <Box as="h1" fontWeight: 500,
fontSize: 48,
textAlign: 'center',>
          Dear Guest, welcome to Phonebook! If you want to proceed, please
          <Link to="/register"> Register </Link>
          or <Link to="/contacts"> Log In</Link>!
        </Box>
      ) : (
        <h1>
          Dear {user}, welcome to <Link to="/contacts">Phonebook</Link>
        </h1>
      )}
    </Container>
  );
}
