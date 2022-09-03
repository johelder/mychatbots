import { memo } from 'react';

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
  type: 'blocks' | 'list';
  isFavorite: boolean;
}

const BotCard = ({ bot, type, isFavorite }: IBotCard) => {
  const theme = useTheme();

  return (
    <S.Container type={type}>
      <S.CardHeader type={type}>
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

      <S.CardBody type={type}>
        <div>
          <img src={bot.avatar} alt="Bot Avatar" />
          <S.Name type={type}>{bot.name}</S.Name>
        </div>

        {true && <S.Builder>{bot.builder}</S.Builder>}

        {false && (
          <S.CreatedAt>
            Created at <time>{bot.createdAt}</time>
          </S.CreatedAt>
        )}
      </S.CardBody>
    </S.Container>
  );
};

export default memo(BotCard);
