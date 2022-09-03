import styled, { css } from 'styled-components';

export const Container = styled.main`
  max-width: 124rem;
  height: 100%;
  margin: 0 auto;

  padding: 0 3rem;
`;

export const SectionHeader = styled.article`
  ${({ theme }) => css`
    margin-top: 3rem;

    h1 {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 3rem;
      font-weight: 800;

      color: ${({ theme }) => theme.colors.texts.gray_800};

      @media (${theme.breakpoints.lg}) {
        font-size: 4rem;
      }
    }
  `}
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchInput = styled.input`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.4rem;
  font-weight: 600;

  padding: 1rem 1.2rem;
  margin: 1rem 0;

  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.borders.gray_200};
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
`;

export const SortButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FavoritesSection = styled.article`
  margin-top: 3.2rem;

  h3 {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 3rem;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.texts.dark_blue_200};
  }
`;

export const BotsCardsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2.4rem;

  margin-top: 1.6rem;
`;
