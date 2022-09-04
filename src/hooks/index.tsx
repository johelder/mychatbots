import { ReactNode } from 'react';
import { FavoritesProvider } from './favorites';
import { ListTypeContextProvider } from './listType';

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
