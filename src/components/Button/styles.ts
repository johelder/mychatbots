import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.colors.secondary.light_blue};

    padding: 1rem 1.6rem;
    border-radius: 0.8rem;
    border: none;

    transition: filter 200ms linear;

    &:hover {
      filter: brightness(0.9);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${theme.colors.texts.gray_400};

      &:hover {
        filter: none;
      }
    }

    span {
      font-family: ${theme.fonts.primary};
      font-size: 1.4rem;
      font-weight: 700;

      color: ${theme.colors.primary.light};
    }

    @media (${theme.breakpoints.lg}) {
      font-size: 2rem;
    }
  `}
`;
