import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <Link to="/">
        <img src={logo} alt="Take Blip Logo" data-testid="takeblip-logo" />
      </Link>
    </S.Container>
  );
};
