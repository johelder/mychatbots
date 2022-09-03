import { BotCard } from '../../components';
import { TBot } from '../BotCard';

import { useListType } from '../../hooks/listType';

import * as S from './styles';

interface IBotCardListProps {
  botsList: TBot[];
}

export const BotCardList = ({ botsList }: IBotCardListProps) => {
  const { activeListType } = useListType();

  return (
    <S.Container activeType={activeListType}>
      {botsList.map((bot: TBot) => (
        <li key={bot.id}>
          <BotCard bot={bot} isFavorite={true} />
        </li>
      ))}
    </S.Container>
  );
};
