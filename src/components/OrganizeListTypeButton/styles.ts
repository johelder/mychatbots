import styled, { css } from 'styled-components';

interface IContainerProps {
  isActive: boolean;
}

export const Container = styled.button<IContainerProps>`
  ${({ theme, isActive }) => css`
    width: fit-content;

    background: none;
    border: none;

    margin-left: 0.6rem;

    svg {
      font-size: 2.4rem;
      color: ${isActive
        ? theme.colors.texts.gray_800
        : theme.colors.borders.gray_200};
    }

    @media (${theme.breakpoints.lg}) {
      svg {
        font-size: 3.2rem;
      }
    }
  `}
`;
