import { IoGrid as Blocks } from 'react-icons/io5';
import { MdViewAgenda as List } from 'react-icons/md';

import * as S from './styles';

interface IOrganizeListTypeButtonProps {
  type: 'list' | 'blocks';
  isActive: boolean;
}

export const OrganizeListTypeButton = ({
  type,
  isActive,
}: IOrganizeListTypeButtonProps) => {
  return (
    <S.Container isActive={isActive}>
      {type === 'blocks' ? <Blocks /> : <List />}
    </S.Container>
  );
};
