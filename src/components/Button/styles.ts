import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary.light_blue};

    padding: 1rem;
    border-radius: 0.8rem;
    border: none;

    transition: filter 200ms linear;

    &:hover {
      filter: brightness(0.9);
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