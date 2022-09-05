import * as S from './styles';

interface IErrorProps {
  message: string;
}

export const Error = ({ message }: IErrorProps) => {
  return (
    <S.Container>
      <span>{message}</span>
    </S.Container>
  );
};
