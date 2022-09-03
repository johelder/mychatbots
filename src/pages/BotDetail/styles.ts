import styled, { css } from 'styled-components';

export const Container = styled.main`
  max-width: 124rem;
  height: 100%;
  margin: 0 auto;

  padding: 0 3rem 3rem;
`;

export const SectionHeader = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 3.4rem;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }
`;

export const Description = styled.div`
  margin-left: 0.8rem;
`;

export const Name = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.4rem;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.texts.gray_800};
`;

export const Id = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.4rem;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.texts.gray_300};
`;

export const CreationDateContainer = styled.div`
  span {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.4rem;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.texts.gray_300};
  }
`;

export const Separator = styled.hr`
  margin: 3.2rem 0;

  border-color: ${({ theme }) => theme.colors.borders.gray_200};
`;

export const BotInfoCardContent = styled.div`
  span,
  time {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const BotInfoLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 2.4rem;

  margin-top: 1.6rem;
`;

export const SectionInformation = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;

    flex-direction: column;

    @media (${theme.breakpoints.lg}) {
      gap: 4rem;
      flex-direction: row;
      justify-content: space-between;
    }
  `}
`;

export const BotInformationContainer = styled.article`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 1rem;

    @media (${theme.breakpoints.lg}) {
      grid-template-columns: 2fr 1fr 2fr;
      grid-template-rows: 1fr 1fr;

      section.activesUsers {
        grid-column: 2/4;
        grid-row: 1/2;
      }

      section.receivedMessages {
        grid-column: 1/3;
        grid-row: 2/3;
      }
    }
  `}
`;

export const AccountStatusContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AccountStatusContent = styled.div`
  margin-top: 5rem;
`;

export const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.6rem;
  font-weight: 400;

  text-align: center;

  color: ${({ theme }) => theme.colors.texts.gray_300};
`;

export const Status = styled.strong`
  display: block;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.4rem;
  font-weight: 700;

  text-align: center;

  color: ${({ theme }) => theme.colors.texts.gray_800};

  margin-bottom: 2.4rem;
`;
