import styled from 'styled-components';
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
