import { vi } from 'vitest';
import { botListMock } from '../../tests/__mocks__';
import { IntelligentContacts } from '../../services/intelligentContacts';

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

describe('Dashboard Page', () => {
  it('should able to load a list of bots', async () => {
    const response = await IntelligentContacts.getBots({
      orderBy: '',
      skip: 0,
      take: 4,
    });

    expect(response.data).toEqual(botListMock);
  });
});
