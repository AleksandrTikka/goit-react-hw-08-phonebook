import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: ${p => p.theme.colors.nav};
  margin-bottom: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Input = styled.input`
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  margin-left: auto;
  width: 100%;
  :hover,
  :focus {
    outline: ${p => p.theme.borders.bold};
    outline-color: ${p => p.theme.colors.heading};
  }
`;
