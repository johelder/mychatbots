import { ButtonHTMLAttributes } from 'react';
import { IoGrid as Blocks } from 'react-icons/io5';
import { MdViewAgenda as List } from 'react-icons/md';

import * as S from './styles';

export interface IOrganizeListTypeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  activeType: 'list' | 'blocks';
  isActive: boolean;
}

export const OrganizeListTypeButton = ({
  activeType,
  isActive,
  ...rest
}: IOrganizeListTypeButtonProps) => {
  return (
    <S.Container isActive={isActive} {...rest}>
      {activeType === 'blocks' ? <Blocks /> : <List />}
    </S.Container>
  );
};
