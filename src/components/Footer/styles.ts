import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  text-align: center;

  p {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.2rem;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.texts.gray_400};

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.texts.gray_400};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
