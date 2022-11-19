import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 300px;
  gap: ${p => p.theme.space[3]}px;
`;

export const Redirect = styled(Link)`
  color: ${p => p.theme.colors.nav};
  :hover,
  :focus {
    color: ${p => p.theme.colors.hover};
  }
`;
