import { act, renderHook } from '@testing-library/react';
import { FavoritesProvider, useFavorites } from './useFavorites';
import { botMock } from '../tests/__mocks__';

describe('useFavorites Hook', () => {
  it('should able to add a bot to a favorite list', () => {
    const { result } = renderHook(useFavorites, {
      wrapper: FavoritesProvider,
    });

    act(() => {
      result.current.toggleFavorites(botMock);
    });

    expect(result.current.favorites).toContain(botMock);
  });

  it('should able to remove a bot from favorite list', () => {
    const { result } = renderHook(useFavorites, {
      wrapper: FavoritesProvider,
    });

    result.current.favorites = [botMock];

    act(() => {
      result.current.toggleFavorites(botMock);
    });

    expect(result.current.favorites).not.toContain(botMock);
  });
});
