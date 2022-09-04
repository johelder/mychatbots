import styled, { css } from 'styled-components';

interface IBotCardProps {
  activeType: 'blocks' | 'list';
}

export const Container = styled.section<IBotCardProps>`
  background-color: ${({ theme }) => theme.colors.primary.light};
  border-radius: 0.7rem;

  a {
    text-decoration: none;
  }

  ${({ theme, activeType }) =>
    activeType === 'blocks'
      ? css`
          display: flex;
          flex-direction: column;

          width: 14.4rem;
          height: 19.2rem;
          padding-bottom: 3.8rem;

          box-shadow: 0px 2px 12px ${theme.colors.shadows.primary};

          @media (${theme.breakpoints.lg}) {
            width: 18.8rem;

            padding-bottom: 4.2rem;
          }
        `
      : css`
          display: grid;
          grid-template-columns: 10% 90%;
          align-items: center;

          background: ${theme.colors.primary.background};

          @media (${theme.breakpoints.lg}) {
            grid-template-columns: 5% 95%;
          }
        `}
`;

export const CardHeader = styled.header<IBotCardProps>`
  height: 100%;
  display: flex;

  padding: 0.8rem 0 0.8rem;

  button {
    background: none;
    border: none;

    svg {
      font-size: 2.6rem;
      color: ${({ theme }) => theme.colors.secondary.yellow};
    }
  }

  ${({ theme, activeType }) =>
    activeType === 'blocks'
      ? css`
          margin-left: 1rem;

          @media (${theme.breakpoints.lg}) {
            margin: 0;
            padding-left: 0.8rem;
          }
        `
      : css`
          background: ${theme.colors.primary.background};
          justify-content: center;
        `}

  ${({ theme }) => css`
    @media (${theme.breakpoints.lg}) {
      button {
        svg {
          font-size: 3.2rem;
        }
      }
    } ;
  `}
`;

export const CardBody = styled.div<IBotCardProps>`
  width: 100%;

  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    width: 5.5rem;
    height: 5.5rem;
  }

  div {
    display: flex;
  }

  ${({ activeType, theme }) =>
    activeType === 'blocks'
      ? css`
          flex-direction: column;
          padding: 0 4rem;

          img {
            margin: 0.2rem 0 1.6rem;
          }

          div {
            flex-direction: column;
            align-items: center;
          }
        `
      : css`
          flex-direction: row;
          justify-content: space-between;
          padding: 2rem 2.4rem;

          box-shadow: 0px 2px 12px ${theme.colors.shadows.primary};
          background-color: ${({ theme }) => theme.colors.primary.light};

          border-radius: 0.7rem;

          img {
            width: 3rem;
            height: 3rem;
          }

          div {
            flex-direction: row;
            align-items: center;
          }
        `}
`;

export const Name = styled.strong<IBotCardProps>`
  ${({ theme, activeType }) => css`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.2rem;
    font-weight: 700;

    text-align: center;

    color: ${theme.colors.texts.gray_700};

    margin-left: ${activeType === 'list' && '0.8rem'};

    @media (${theme.breakpoints.lg}) {
      font-size: 1.6rem;
    }
  `}
`;

export const Builder = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.texts.gray_400};
`;

export const CreatedAt = styled.span`
  ${({ theme }) => css`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.2rem;
    font-weight: 400;

    text-align: end;

    color: ${({ theme }) => theme.colors.texts.gray_400};
    @media (${theme.breakpoints.lg}) {
      font-size: 1.4rem;
    }
  `}
`;
