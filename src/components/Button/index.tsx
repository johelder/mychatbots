import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const Button = ({ title, ...rest }: IButtonProps) => {
  return (
    <S.Container type="button" {...rest}>
      <span>{title}</span>
    </S.Container>
  );
};
