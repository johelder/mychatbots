import { ReactNode } from 'react';
import { FavoritesProvider } from './useFavorites';
import { ListTypeContextProvider } from './useListType';

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => {
  return (
    <ListTypeContextProvider>
      <FavoritesProvider>{children}</FavoritesProvider>
    </ListTypeContextProvider>
  );
};
