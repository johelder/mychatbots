import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useListType } from '../../hooks/listType';

import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';

import { useTheme } from 'styled-components';
import * as S from './styles';
import { formatName } from '../../utils/formatName';

export type TBot = {
  name: string;
  type: string;
  created: string;
};

interface IBotCard {
  bot: TBot;
  isFavorite: boolean;
}

const BotCard = ({ bot, isFavorite }: IBotCard) => {
  const theme = useTheme();
  const { activeListType } = useListType();

  const formattedBotName = useMemo(() => {
    return formatName(bot.name);
  }, [bot.name]);

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
      <Link to={`/${formattedBotName}/details`}>
        <S.CardBody activeType={activeListType}>
          <div>
            <img
              src="https://avatars.dicebear.com/api/bottts/your-custom-seed.svg"
              alt="Bot Avatar"
            />
            <S.Name activeType={activeListType}>{bot.name}</S.Name>
          </div>

          {activeListType === 'blocks' ? (
            <S.Builder>{bot.type}</S.Builder>
          ) : (
            <S.CreatedAt>
              Created at <time>{bot.created}</time>
            </S.CreatedAt>
          )}
        </S.CardBody>
      </Link>
    </S.Container>
  );
};

export default memo(BotCard);
