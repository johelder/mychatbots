import { Button, OrganizeListTypeButton, BotCard } from '../../components';
import { TBot } from '../../components/BotCard';

import * as S from './styles';

const favoritesMock = [
  {
    id: '1',
    avatar: 'https://github.com/johelder.png',
    name: 'Johelder',
    builder: 'Johelder Humberto',
    createdAt: '11/09/2019',
  },
  {
    id: '2',
    avatar: 'https://github.com/johelder.png',
    name: 'Johelder',
    builder: 'Johelder Humberto',
    createdAt: '11/09/2019',
  },
  {
    id: '3',
    avatar: 'https://github.com/johelder.png',
    name: 'Johelder',
    builder: 'Johelder Humberto',
    createdAt: '11/09/2019',
  },
  {
    id: '4',
    avatar: 'https://github.com/johelder.png',
    name: 'Johelder',
    builder: 'Johelder Humberto',
    createdAt: '11/09/2019',
  },
];

export const Dashboard = () => {
  return (
    <S.Container>
      <S.SectionHeader>
        <h1>My chatbots</h1>

        <S.ActionsContainer>
          <S.SearchInput placeholder="Search" />
          <S.ButtonsContainer>
            <S.SortButtonsContainer>
              <Button title="Order by name" />
              <Button title="Order by creation" />
            </S.SortButtonsContainer>

            <div>
              <OrganizeListTypeButton type="blocks" isActive={true} />
              <OrganizeListTypeButton type="list" isActive={false} />
            </div>
          </S.ButtonsContainer>
        </S.ActionsContainer>
      </S.SectionHeader>

      {!!favoritesMock.length && (
        <S.FavoritesSection>
          <h3>Favorites</h3>

          <S.BotsCardsContainer>
            {favoritesMock.map((bot: TBot) => (
              <li key={bot.id}>
                <BotCard bot={bot} type="blocks" isFavorite={true} />
              </li>
            ))}
          </S.BotsCardsContainer>
        </S.FavoritesSection>
      )}
    </S.Container>
  );
};
