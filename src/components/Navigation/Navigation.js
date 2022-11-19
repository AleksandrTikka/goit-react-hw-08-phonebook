import { useAuth } from 'hooks';
import { MainNavigation, StyledLink } from './Navigation.styled';
// import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MainNavigation>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </MainNavigation>
  );
};
