import * as S from './styles';

interface ISortButtonProps {
  title: string;
}

export const SortButton = ({ title }: ISortButtonProps) => {
  return (
    <S.Container type="button">
      <span>{title}</span>
    </S.Container>
  );
};
