import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { botListMock, renderWithWrapper } from '../../tests/__mocks__';
import { IntelligentContacts } from '../../services/intelligentContacts';
import { FavoritesProvider } from '../../hooks/useFavorites';
import { Dashboard } from '.';

vi.mock('../../services/intelligentContacts', () => {
  return {
    IntelligentContacts: {
      getBots() {
        return {
          ok: true,
          data: botListMock,
        };
      },
    },
  };
});

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
}));

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

describe('Dashboard Page', () => {
  it('should able to load a list of bots', async () => {
    const response = await IntelligentContacts.getBots({
      orderBy: '',
      skip: 0,
      take: 4,
    });

    expect(response.data).toEqual(botListMock);
  });

  it('should able to search a bot', async () => {
    vi.mock('../../utils/formatDate', () => {
      return {
        formatDate: vi.fn(),
      };
    });

    const user = userEvent.setup();
    const { getByPlaceholderText, findByDisplayValue, queryByDisplayValue } =
      renderWithWrapper(
        <FavoritesProvider>
          <Dashboard />
        </FavoritesProvider>,
      );
    const searchInput = getByPlaceholderText('Search');
    await user.type(searchInput, 'fake-name');
    const searchResult = await findByDisplayValue('fake-name');

    expect(searchResult).toBeInTheDocument();

    await user.type(searchInput, 'not-found-name');
    const notFoundSearch = queryByDisplayValue('not-found-name');

    expect(notFoundSearch).not.toBeInTheDocument();
  });
});
