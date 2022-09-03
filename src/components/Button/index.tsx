import * as S from './styles';

interface IButtonProps {
  title: string;
}

export const Button = ({ title }: IButtonProps) => {
  return (
    <S.Container type="button">
      <span>{title}</span>
    </S.Container>
  );
};
