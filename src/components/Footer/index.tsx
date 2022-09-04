import * as S from './styles';

export const Footer = () => {
  return (
    <S.Container>
      <p data-testid="footer-content">
        &copy; {new Date().getFullYear()}, BLiP Todos os direitos reservados |{' '}
        <a href="#">Termos de Uso</a>
      </p>
    </S.Container>
  );
};
