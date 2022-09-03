import { memo } from 'react';

import { useListType } from '../../hooks/listType';

import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';

import { useTheme } from 'styled-components';
import * as S from './styles';

export type TBot = {
  id: string;
  avatar: string;
  name: string;
  builder: string;
  createdAt: string;
};

interface IBotCard {
  bot: TBot;
  isFavorite: boolean;
}

const BotCard = ({ bot, isFavorite }: IBotCard) => {
  const theme = useTheme();
  const { activeListType } = useListType();

  return (
    <S.Container activeType={activeListType}>
      <S.CardHeader activeType={activeListType}>
        <button type="button">
          {isFavorite ? (
            <TiStarFullOutline
              size={22}
              color={theme.colors.secondary.yellow}
            />
          ) : (
            <TiStarOutline size={22} color={theme.colors.secondary.yellow} />
          )}
        </button>
      </S.CardHeader>

      <S.CardBody activeType={activeListType}>
        <div>
          <img src={bot.avatar} alt="Bot Avatar" />
          <S.Name activeType={activeListType}>{bot.name}</S.Name>
        </div>

        {activeListType === 'blocks' ? (
          <S.Builder>{bot.builder}</S.Builder>
        ) : (
          <S.CreatedAt>
            Created at <time>{bot.createdAt}</time>
          </S.CreatedAt>
        )}
      </S.CardBody>
    </S.Container>
  );
};

export default memo(BotCard);
