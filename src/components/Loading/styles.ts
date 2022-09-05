import styled, { keyframes } from 'styled-components';

import { TbFidgetSpinner } from 'react-icons/tb';

const loadingAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingIcon = styled(TbFidgetSpinner)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.secondary.light_blue};

  animation: ${loadingAnimation} 600ms infinite linear;
`;
