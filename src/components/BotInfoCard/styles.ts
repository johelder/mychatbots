import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  padding: 3.2rem;

  background-color: ${({ theme }) => theme.colors.primary.light};
  box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.shadows.primary};

  border-radius: 0.7rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  margin-left: 1.6rem;
`;

export const Title = styled.h5`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.4rem;
  font-weight: 800;

  color: ${({ theme }) => theme.colors.texts.gray_700};
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.4rem;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.texts.gray_700};
`;
