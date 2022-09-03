import { ReactNode } from 'react';

import activesUsersIcon from '../../assets/activesUsersIcon.svg';
import messagesSentIcon from '../../assets/messagesSentIcon.svg';
import receivedMessagesIcon from '../../assets/receivedMessagesIcon.svg';

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
    activesUsers: {
      icon: activesUsersIcon,
      alternative_text: 'A icon of a user',
    },
    messagesSent: {
      icon: messagesSentIcon,
      alternative_text: 'A icon of messages sent',
    },
    receivedMessages: {
      icon: receivedMessagesIcon,
      alternative_text: 'A icon of received messages',
    },
  };

  return (
    <S.Container className={iconType}>
      {onlyInfo ? (
        children
      ) : (
        <S.Content>
          {iconType && (
            <img
              src={iconSwitcher[iconType].icon}
              alt={iconSwitcher[iconType].alternative_text}
            />
          )}

          <S.DescriptionContainer>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
          </S.DescriptionContainer>
        </S.Content>
      )}
    </S.Container>
  );
};
