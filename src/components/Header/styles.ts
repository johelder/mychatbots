import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.secondary.dark_blue};
`;
