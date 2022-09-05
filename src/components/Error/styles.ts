import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;

  span {
    display: block;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.8rem;
    font-weight: 600;

    margin-top: 10rem;

    color: ${({ theme }) => theme.colors.secondary.dark_blue};
  }
`;
