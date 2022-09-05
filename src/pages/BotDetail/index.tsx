import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IntelligentContacts } from '../../services/intelligentContacts';
import { formatDate } from '../../utils/formatDate';

import { BotInfoCard, Button, Footer, Error } from '../../components';
import hero from '../../assets/hero.svg';
import { TPageStatus } from '../Dashboard';

import * as S from './styles';
import { Loading } from '../../components/Loading';

export interface IBotDetail {
  name: string;
  type: string;
  image: string;
  culture: string;
  analytics: {
    user: {
      total: number;
      actived: number;
    };
    message: {
      received: number;
      sent: number;
    };
  };
  created: string;
  updated: string;
}

export const BotDetail = () => {
  const [pageStatus, setPageStatus] = useState<TPageStatus>('idle');
  const [bot, setBot] = useState<IBotDetail>();
  const { slug } = useParams();

  const formattedTimeZone = useMemo(() => {
    if (!bot) return;

    const timeZone = new Intl.DateTimeFormat(bot.culture).resolvedOptions()
      .timeZone;

    const formattedHour = new Intl.DateTimeFormat(bot.culture, {
      timeZone,
      hour: 'numeric',
      minute: 'numeric',
    }).format(new Date(bot.updated));

    return `(UTC - ${formattedHour}) ${timeZone}`;
  }, [bot]);

  const getBotDetail = useCallback(async () => {
    if (!slug) {
      return;
    }

    setPageStatus('loading');

    const response = await IntelligentContacts.getBotDetail(slug);

    if (!response.ok) {
      setPageStatus('error');
      return;
    }

    setBot(response.data);
    setPageStatus('resolved');
  }, [slug]);

  useEffect(() => {
    getBotDetail();
  }, [getBotDetail]);

  if (pageStatus === 'error') {
    return (
      <Error message="Failed to load bot details. You can try again later! 🤖 " />
    );
  }

  if (pageStatus === 'loading') {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.SectionHeader>
        <S.ProfileInfo>
          <img src={bot?.image} alt="Bot Avatar" />
          <S.Description>
            <S.Name>{bot?.name}</S.Name>
            <S.Id>Id: {bot?.name}</S.Id>
          </S.Description>
        </S.ProfileInfo>

        <S.CreationDateContainer>
          <span>
            Created at{' '}
            <time>
              {bot?.created && formatDate(bot?.created, bot?.culture)}
            </time>
          </span>
        </S.CreationDateContainer>
      </S.SectionHeader>

      <S.Separator />

      <S.SectionInformation>
        <S.BotInformationContainer>
          <BotInfoCard onlyInfo={true}>
            <S.BotInfoCardContent>
              <S.BotInfoLabel>Region and idiom</S.BotInfoLabel>
              <span>{bot?.culture}</span>
              <S.BotInfoLabel>Timezone</S.BotInfoLabel>
              <time>{formattedTimeZone}</time>
            </S.BotInfoCardContent>
          </BotInfoCard>

          <BotInfoCard
            title={bot?.analytics.message.received}
            description="Mensagens Recebidas"
            iconType="receivedMessages"
          />

          <BotInfoCard
            title={bot?.analytics.user.actived}
            description="Usuários Ativos"
            iconType="activesUsers"
          />

          <BotInfoCard
            title={bot?.analytics.message.sent}
            description="Mensagens Enviadas"
            iconType="messagesSent"
          />
        </S.BotInformationContainer>

        <S.AccountStatusContainer>
          <img src={hero} alt="A picture of a balloon" />
          <S.AccountStatusContent>
            <S.Label>Status account</S.Label>
            <S.Status>Free</S.Status>
            <Button title="Update account" />
          </S.AccountStatusContent>
        </S.AccountStatusContainer>
      </S.SectionInformation>

      <S.Separator />

      <Footer />
    </S.Container>
  );
};
