import { Button, OrganizeListTypeButton, BotCardList } from '../../components';
import { useListType } from '../../hooks/listType';

import { FiPlus as PlusIcon } from 'react-icons/fi';

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
  const { activeListType, setActiveListType } = useListType();

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
              <OrganizeListTypeButton
                type="blocks"
                isActive={activeListType === 'blocks'}
                handleActive={() => setActiveListType('blocks')}
              />
              <OrganizeListTypeButton
                type="list"
                isActive={activeListType === 'list'}
                handleActive={() => setActiveListType('list')}
              />
            </div>
          </S.ButtonsContainer>
        </S.ActionsContainer>
      </S.SectionHeader>

      {!!favoritesMock.length && (
        <S.FavoritesSection>
          <h3>Favorites</h3>
          <BotCardList botsList={favoritesMock} />

          <S.Separator />
        </S.FavoritesSection>
      )}

      <BotCardList botsList={favoritesMock} />
      <BotCardList botsList={favoritesMock} />

      <S.AddBotButton>
        <span>
          <PlusIcon />
        </span>
      </S.AddBotButton>
    </S.Container>
  );
};
