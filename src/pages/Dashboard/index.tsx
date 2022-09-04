import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { IntelligentContacts } from '../../services/intelligentContacts';

import { Button, OrganizeListTypeButton, BotCard } from '../../components';
import { TBot } from '../../components/BotCard';

import { useListType } from '../../hooks/useListType';
import { useFavorites } from '../../hooks/useFavorites';

import { FiPlus as PlusIcon } from 'react-icons/fi';
import { FaSquareFull as SquareIcon } from 'react-icons/fa';

import * as S from './styles';

export interface IFormattedBot extends TBot {
  id: string;
}

export type TPageStatus = 'idle' | 'loading' | 'error' | 'resolved';

const NUMBER_ITEMS_TO_TAKE = 10;

export const Dashboard = () => {
  const [pageStatus, setPageStatus] = useState<TPageStatus>('idle');
  const [bots, setBots] = useState<IFormattedBot[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentOrderby, setCurrentOrderBy] = useState('');
  const [currentSkip, setCurrentSkip] = useState(0);

  const sentinelRef = useRef<HTMLDivElement>(null);
  const shouldLoadMoreDataRef = useRef(true);

  const { activeListType, setActiveListType } = useListType();
  const { favorites } = useFavorites();

  const filteredBots = useMemo(() => {
    return searchTerm.length > 0
      ? bots.filter(bot =>
          bot.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : [];
  }, [bots, searchTerm]);

  const handleOrderBy = (orderBy: string) => {
    if (orderBy !== currentOrderby) {
      setBots([]);
      setCurrentSkip(0);
      setCurrentOrderBy(orderBy);
      shouldLoadMoreDataRef.current = true;

      return;
    }
  };

  const getBots = useCallback(async () => {
    if (!shouldLoadMoreDataRef.current) {
      return;
    }

    setPageStatus('loading');

    const response = await IntelligentContacts.getBots({
      orderBy: currentOrderby,
      skip: currentSkip,
      take: NUMBER_ITEMS_TO_TAKE,
    });

    if (!response.ok) {
      setPageStatus('error');
      return;
    }

    if (!response.data.length) {
      shouldLoadMoreDataRef.current = false;
      setPageStatus('idle');
      return;
    }

    const formattedBots = response.data.map(bot => ({
      id: uuidv4(),
      ...bot,
    }));

    setBots(prevBots => [...prevBots, ...formattedBots]);
    shouldLoadMoreDataRef.current = true;
    setPageStatus('resolved');
  }, [currentOrderby, currentSkip]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setCurrentSkip(prevSkip => prevSkip + NUMBER_ITEMS_TO_TAKE);
      }
    });

    if (sentinelRef.current) {
      intersectionObserver.observe(sentinelRef.current);
    }

    return () => intersectionObserver.disconnect();
  }, []);

  useEffect(() => {
    getBots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOrderby, currentSkip]);

  if (pageStatus === 'error') {
    return (
      <S.ErrorContainer>
        <span>Failed to load. You can try again later! 🤖 </span>
      </S.ErrorContainer>
    );
  }

  return (
    <S.Container>
      <S.SectionHeader>
        <h1>My chatbots</h1>

        <S.ActionsContainer>
          <S.SearchInput
            placeholder="Search"
            onChange={e => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <S.ButtonsContainer>
            <S.SortButtonsContainer>
              <Button
                title="Order by name"
                onClick={() => handleOrderBy('name')}
                disabled={currentOrderby === 'name'}
              />
              <Button
                title="Order by creation"
                onClick={() => handleOrderBy('created')}
                disabled={currentOrderby === 'created'}
              />
            </S.SortButtonsContainer>

            <div>
              <OrganizeListTypeButton
                activeType="blocks"
                isActive={activeListType === 'blocks'}
                onClick={() => setActiveListType('blocks')}
              />
              <OrganizeListTypeButton
                activeType="list"
                isActive={activeListType === 'list'}
                onClick={() => setActiveListType('list')}
              />
            </div>
          </S.ButtonsContainer>
        </S.ActionsContainer>
      </S.SectionHeader>

      {!!favorites.length && (
        <S.FavoritesSection>
          <h3>Favorites</h3>
          <S.BotCardList activeType={activeListType}>
            {favorites.map(bot => (
              <li key={bot.id}>
                <BotCard bot={bot} />
              </li>
            ))}
          </S.BotCardList>

          <S.Separator />
        </S.FavoritesSection>
      )}

      {searchTerm.length > 0 ? (
        <S.BotCardList activeType={activeListType}>
          {filteredBots.map(bot => (
            <li key={bot.id}>
              <BotCard bot={bot} />
            </li>
          ))}
        </S.BotCardList>
      ) : (
        <S.BotCardList activeType={activeListType}>
          {bots.map(bot => (
            <li key={bot.id}>
              <BotCard bot={bot} />
            </li>
          ))}
        </S.BotCardList>
      )}

      {pageStatus === 'loading' && (
        <S.LoadingContainer>
          <S.LoadingIcon />
        </S.LoadingContainer>
      )}

      <div ref={sentinelRef} style={{ height: 100 }} />

      <S.AddBotButton>
        <span>{activeListType === 'list' ? <PlusIcon /> : <SquareIcon />}</span>
      </S.AddBotButton>
    </S.Container>
  );
};
