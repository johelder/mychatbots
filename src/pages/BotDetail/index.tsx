import { Footer } from '../../components';
import { BotInfoCard } from '../../components/BotInfoCard';
import * as S from './styles';

export const BotDetail = () => {
  return (
    <S.Container>
      <S.SectionHeader>
        <S.ProfileInfo>
          <img src="https://github.com/johelder.png" alt="Bot Avatar" />
          <S.Description>
            <S.Name>Johelder</S.Name>
            <S.Id>Id: johelder</S.Id>
          </S.Description>
        </S.ProfileInfo>

        <S.CreationDateContainer>
          <span>
            Created at <time>11/09/2019</time>
          </span>
        </S.CreationDateContainer>
      </S.SectionHeader>

      <S.Separator />

      <BotInfoCard
        title="1.000"
        description="Mensagens Recebidas"
        iconType="receivedMessages"
      />

      <BotInfoCard onlyInfo={true}>
        <S.BotInfoCardContent>
          <S.BotInfoLabel>Region and idiom</S.BotInfoLabel>
          <span>EUA - English (EN)</span>
          <S.BotInfoLabel>Timezone</S.BotInfoLabel>
          <time>(UTC - 03:00) Brasília</time>
        </S.BotInfoCardContent>
      </BotInfoCard>

      <Footer />
    </S.Container>
  );
};
