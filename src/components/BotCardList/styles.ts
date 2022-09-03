import styled from 'styled-components';

interface IContainerProps {
  activeType: 'blocks' | 'list';
}

export const Container = styled.ul<IContainerProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${({ activeType }) => (activeType === 'blocks' ? '2.4rem' : '1rem')};

  margin-top: 1.6rem;

  flex-direction: ${({ activeType }) =>
    activeType === 'blocks' ? 'row' : 'column'};
`;
