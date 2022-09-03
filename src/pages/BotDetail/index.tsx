import { BotInfoCard, Button, Footer } from '../../components';
import hero from '../../assets/hero.svg';

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

      <S.SectionInformation>
        <S.BotInformationContainer>
          <BotInfoCard onlyInfo={true}>
            <S.BotInfoCardContent>
              <S.BotInfoLabel>Region and idiom</S.BotInfoLabel>
              <span>EUA - English (EN)</span>
              <S.BotInfoLabel>Timezone</S.BotInfoLabel>
              <time>(UTC - 03:00) Brasília</time>
            </S.BotInfoCardContent>
          </BotInfoCard>

          <BotInfoCard
            title="1.000"
            description="Mensagens Recebidas"
            iconType="receivedMessages"
          />

          <BotInfoCard
            title="2.000"
            description="Usuários Ativos"
            iconType="activesUsers"
          />

          <BotInfoCard
            title="2.000"
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
