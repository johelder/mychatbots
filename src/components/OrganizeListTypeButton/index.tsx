import { IoGrid as Blocks } from 'react-icons/io5';
import { MdViewAgenda as List } from 'react-icons/md';

import * as S from './styles';

export interface IOrganizeListTypeButtonProps {
  type: 'list' | 'blocks';
  isActive: boolean;
  handleActive: () => void;
}

export const OrganizeListTypeButton = ({
  type,
  isActive,
  handleActive,
}: IOrganizeListTypeButtonProps) => {
  return (
    <S.Container isActive={isActive} onClick={handleActive}>
      {type === 'blocks' ? <Blocks /> : <List />}
    </S.Container>
  );
};
