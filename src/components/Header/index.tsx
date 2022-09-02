import Logo from '../../assets/logo.svg';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <img src={Logo} />
    </S.Container>
  );
};
