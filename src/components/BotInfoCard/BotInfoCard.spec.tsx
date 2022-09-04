import { renderWithWrapper } from '../../tests/__mocks__';
import { BotInfoCard } from '.';

describe('BotInfoCard', () => {
  it('should render a correct icon with correctly alternative text', () => {
    const { getByAltText } = renderWithWrapper(
      <BotInfoCard
        iconType="activesUsers"
        title={1000}
        description="Usuários Ativos"
      />,
    );
    const userAlternativeText = getByAltText('A icon of a user');

    expect(userAlternativeText).toBeInTheDocument();
  });
});
