import { vi } from 'vitest';
import { botDetailMock } from '../../tests/__mocks__';
import { IntelligentContacts } from '../../services/intelligentContacts';

vi.mock('../../services/intelligentContacts', () => {
  return {
    IntelligentContacts: {
      getBotDetail() {
        return {
          ok: true,
          data: botDetailMock,
        };
      },
    },
  };
});

describe('BotDetail Page', () => {
  it('should able to load a bot details', async () => {
    const response = await IntelligentContacts.getBotDetail('fake-name');

    expect(response.data).toEqual(botDetailMock);
  });
});
