import logo from '../../assets/logo.svg';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <img src={logo} alt="Take Blip Logo" />
    </S.Container>
  );
};
