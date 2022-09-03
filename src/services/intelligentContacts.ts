import { TBot } from '../components/BotCard';
import { IBotDetail } from '../pages/BotDetail';
import { api } from './api';

interface getBotsParams {
  orderBy: string;
  skip: number;
  take: number;
}

export const IntelligentContacts = {
  async getBots({ orderBy, skip, take }: getBotsParams) {
    try {
      const response = await api.get<TBot[]>(
        `/bots?Skip=${skip}&Take=${take}&Filters[orderBy]=${orderBy}`,
      );

      return {
        ok: true,
        data: response.data,
      };
    } catch (error: unknown) {
      return {
        ok: false,
        data: [],
        error,
      };
    }
  },

  async getBotDetail(botName: string) {
    try {
      const response = await api.get<IBotDetail>(`/${botName}/details`);

      return {
        ok: true,
        data: response.data,
      };
    } catch (error: unknown) {
      return {
        ok: false,
        error,
      };
    }
  },
};
