import { StyledLink } from '../Navigation/Navigation.styled';
import { NavBox } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavBox>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </NavBox>
  );
};
