import styled from 'styled-components';
export const UserBox = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.heading};
`;
export const Greetings = styled.p`
  margin-right: ${p => p.theme.space[4]}px;
`;
export const Name = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  border-bottom: ${p => p.theme.borders.bold};
`;
