import styled, { css } from 'styled-components';

interface IBotCardProps {
  activeType: 'blocks' | 'list';
}

export const Container = styled.section<IBotCardProps>`
  background-color: ${({ theme }) => theme.colors.primary.light};
  border-radius: 0.7rem;

  ${({ theme, activeType }) =>
    activeType === 'blocks'
      ? css`
          width: fit-content;

          padding: 0.8rem 0 3.8rem;

          box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);

          @media (${theme.breakpoints.lg}) {
            padding: 0.8rem 2rem 4.2rem;
          }
        `
      : css`
          display: grid;
          grid-template-columns: 10% 90%;
          align-items: center;

          background: ${theme.colors.primary.background};
        `}
`;

export const CardHeader = styled.header<IBotCardProps>`
  height: 100%;
  display: flex;

  button {
    background: none;
    border: none;
  }

  ${({ theme, activeType }) =>
    activeType === 'blocks'
      ? css`
          margin-left: 1rem;
        `
      : css`
          background: ${theme.colors.primary.background};
          justify-content: center;
        `}
`;

export const CardBody = styled.div<IBotCardProps>`
  width: 100%;

  display: flex;
  align-items: center;

  div {
    display: flex;
  }

  img {
    border-radius: 50%;
  }

  ${({ activeType }) =>
    activeType === 'blocks'
      ? css`
          flex-direction: column;
          padding: 0 2rem;

          div {
            flex-direction: column;
            align-items: center;
          }

          img {
            max-width: 5.5rem;
            margin: 0.2rem 0 1.6rem;
          }
        `
      : css`
          flex-direction: row;
          justify-content: space-between;
          padding: 1.6rem 2.4rem;

          box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
          background-color: ${({ theme }) => theme.colors.primary.light};

          border-radius: 0.7rem;

          div {
            flex-direction: row;
            align-items: center;
          }

          img {
            max-width: 2.8rem;
          }
        `}
`;

export const Name = styled.strong<IBotCardProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.6rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.texts.gray_700};

  margin-left: ${({ activeType }) => activeType === 'list' && '0.8rem'};
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

    color: ${({ theme }) => theme.colors.texts.gray_400};
    @media (${theme.breakpoints.lg}) {
      font-size: 1.4rem;
    }
  `}
`;
