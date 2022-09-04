import { vi } from 'vitest';
import { renderWithWrapper, botMock } from '../../tests/__mocks__';
import BotCard from '.';

vi.mock('../../hooks/useFavorites', () => {
  return {
    useFavorites() {
      return {
        isFavorite: vi.fn(),
        toggleFavorites: vi.fn(),
      };
    },
  };
});

describe('BotCard Component', () => {
  it('should render a bot information correctly', () => {
    const { getByTestId } = renderWithWrapper(<BotCard bot={botMock} />);

    const favoriteButton = getByTestId('favorite-button');
    const botAvatar = getByTestId('bot-avatar');
    const botName = getByTestId('bot-name');

    expect(favoriteButton).toBeInTheDocument();
    expect(botAvatar).toBeInTheDocument();
    expect(botName).toBeInTheDocument();
  });

  it('should render a bot information correctly when list type is list', () => {
    vi.mock('../../hooks/useListType', () => {
      return {
        useListType() {
          return {
            activeListType: 'list',
          };
        },
      };
    });

    vi.mock('../../utils/formatDate', () => {
      return {
        formatDate: vi.fn(),
      };
    });

    const { getByTestId, queryByTestId } = renderWithWrapper(
      <BotCard bot={botMock} />,
    );

    const botBuilder = queryByTestId('bot-builder');
    const botDateCreate = getByTestId('bot-date-create');

    expect(botBuilder).not.toBeInTheDocument();
    expect(botDateCreate).toBeInTheDocument();

    vi.mock('../../hooks/useListType', () => {
      return {
        useListType() {
          return {
            activeListType: 'blocks',
          };
        },
      };
    });
  });

  it('should able to redirect user to detail page', () => {
    const { getByTestId } = renderWithWrapper(<BotCard bot={botMock} />);

    const linkToRedirect = getByTestId('bot-redirection');

    expect(linkToRedirect).toHaveAttribute('href', `/${botMock.name}/details`);
  });
});
