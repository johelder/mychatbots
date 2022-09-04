import { renderWithWrapper } from '../../tests/__mocks__/renderMock';
import { Header } from '.';

describe('Header Component', () => {
  it('should render Take Blip Logo correctly', () => {
    const { getByTestId } = renderWithWrapper(<Header />);
    const takeBlipLogo = getByTestId('takeblip-logo');

    expect(takeBlipLogo).toBeInTheDocument();
  });
});
