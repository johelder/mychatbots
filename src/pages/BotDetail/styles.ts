import styled from 'styled-components';

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
    max-width: 5.6rem;
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
