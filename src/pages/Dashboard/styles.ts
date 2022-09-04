import styled, { css, keyframes } from 'styled-components';

import { TbFidgetSpinner } from 'react-icons/tb';

const loadingAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

interface IBotCardListProps {
  activeType: 'blocks' | 'list';
}

export const Container = styled.main`
  max-width: 124rem;
  height: 100%;
  margin: 0 auto;

  padding: 0 3rem 3rem;
`;

export const SectionHeader = styled.article`
  ${({ theme }) => css`
    margin-top: 3rem;

    h1 {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 3rem;
      font-weight: 800;

      color: ${({ theme }) => theme.colors.texts.gray_800};
    }

    @media (${theme.breakpoints.lg}) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 4rem;
      }
    }
  `}
`;

export const ActionsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    @media (${theme.breakpoints.lg}) {
      flex-direction: row;
    }
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    min-width: 33.2rem;

    margin: 1rem 0;

    height: 4rem;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.4rem;
    font-weight: 600;

    padding: 1rem 1.2rem;

    border-radius: 0.8rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.borders.gray_200};

    @media (${theme.breakpoints.lg}) {
      margin: 1rem;
    }
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SortButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
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

export const Separator = styled.hr`
  margin: 4rem 0;

  border-color: ${({ theme }) => theme.colors.borders.gray_200};
`;

export const BotCardList = styled.ul<IBotCardListProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${({ activeType }) => (activeType === 'blocks' ? '2.4rem' : '1rem')};

  margin-top: 1.6rem;

  flex-direction: ${({ activeType }) =>
    activeType === 'blocks' ? 'row' : 'column'};
`;

export const AddBotButton = styled.button`
  width: 5.6rem;
  height: 5.6rem;

  position: fixed;
  right: 3.2rem;
  bottom: 1.6rem;

  padding: 1.2rem;

  border-radius: 50%;
  border: none;

  background-color: ${({ theme }) => theme.colors.secondary.light_blue};
  color: ${({ theme }) => theme.colors.primary.light};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 200ms linear;

  &:hover {
    filter: brightness(0.9);
  }

  span {
    svg {
      font-size: 3.2rem;
    }
  }
`;

export const ErrorContainer = styled.main`
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

export const LoadingContainer = styled.div`
  width: 100%;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingIcon = styled(TbFidgetSpinner)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.secondary.light_blue};

  animation: ${loadingAnimation} 1s infinite linear;
`;
