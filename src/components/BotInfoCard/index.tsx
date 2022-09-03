import { ReactNode } from 'react';

import activesUsersIcon from '../../assets/activesUsersIcon.svg';
import messagesSentIcon from '../../assets/messagesSentIcon.svg';
import receivedMessagesIcon from '../../assets/activesUsersIcon.svg';

import * as S from './styles';

interface IBotInfoCard {
  onlyInfo?: boolean;
  iconType?: 'activesUsers' | 'messagesSent' | 'receivedMessages';
  title?: string;
  description?: string;
  children?: ReactNode;
}

export const BotInfoCard = ({
  onlyInfo = false,
  iconType,
  title,
  description,
  children,
}: IBotInfoCard) => {
  const iconSwitcher = {
    activesUsers: activesUsersIcon,
    messagesSent: messagesSentIcon,
    receivedMessages: receivedMessagesIcon,
  };

  return (
    <S.Container>
      {onlyInfo ? (
        children
      ) : (
        <S.Content>
          <img src={iconType && iconSwitcher[iconType]} alt="Card Info Icon" />
          <S.DescriptionContainer>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
          </S.DescriptionContainer>
        </S.Content>
      )}
    </S.Container>
  );
};
