import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useListType } from '../../hooks/useListType';
import { useFavorites } from '../../hooks/useFavorites';

import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';

import { IFormattedBot } from '../../pages/Dashboard';

import { formatName } from '../../utils/formatName';
import { formatDate } from '../../utils/formatDate';

import { useTheme } from 'styled-components';
import * as S from './styles';

export type TBot = {
  name: string;
  type: string;
  created: string;
};

interface IBotCard {
  bot: IFormattedBot;
}

const BotCard = ({ bot }: IBotCard) => {
  const theme = useTheme();
  const { activeListType } = useListType();
  const { isFavorite, toggleFavorites } = useFavorites();

  const formattedBotName = useMemo(() => {
    return formatName(bot.name);
  }, [bot.name]);

  const handleToggleFavorites = () => {
    toggleFavorites(bot);
  };

  return (
    <S.Container activeType={activeListType}>
      <S.CardHeader activeType={activeListType}>
        <button
          type="button"
          onClick={handleToggleFavorites}
          data-testid="favorite-button"
        >
          {isFavorite(bot) ? <TiStarFullOutline /> : <TiStarOutline />}
        </button>
      </S.CardHeader>
      <Link to={`/${formattedBotName}/details`} data-testid="bot-redirection">
        <S.CardBody activeType={activeListType}>
          <div>
            <img
              src="https://avatars.dicebear.com/api/bottts/your-custom-seed.svg"
              alt="Bot Avatar"
              data-testid="bot-avatar"
            />
            <S.Name activeType={activeListType} data-testid="bot-name">
              {bot.name}
            </S.Name>
          </div>

          {activeListType === 'blocks' ? (
            <S.Builder data-testid="bot-builder">{bot.type}</S.Builder>
          ) : (
            <S.CreatedAt data-testid="bot-date-create">
              Created at <time>{formatDate(bot.created)}</time>
            </S.CreatedAt>
          )}
        </S.CardBody>
      </Link>
    </S.Container>
  );
};

export default memo(BotCard);
