import { renderWithWrapper } from '../../tests/__mocks__';
import { Footer } from '.';

describe('Footer Component', () => {
  it('should show a correctly year', () => {
    const { getByTestId } = renderWithWrapper(<Footer />);
    const currentYear = String(new Date().getFullYear());
    const footerContent = getByTestId('footer-content');

    expect(footerContent).toHaveTextContent(currentYear);
  });

  it('should redirect user to terms of use page', () => {
    const { getByText } = renderWithWrapper(<Footer />);
    const termsOfUseLink = getByText('Termos de Uso');

    expect(termsOfUseLink).toHaveAttribute('href', '#');
  });
});
