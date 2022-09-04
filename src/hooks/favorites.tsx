import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IFormattedBot } from '../pages/Dashboard';

interface IFavoritesContext {
  favorites: IFormattedBot[];
  toggleFavorites: (botToAdd: IFormattedBot) => void;
  isFavorite: (bot: IFormattedBot) => boolean;
}

interface IFavoritesProviderProps {
  children: ReactNode;
}

const FavoritesContext = createContext({} as IFavoritesContext);

const storageKey = '@mychatbots:favorites';

const FavoritesProvider = ({ children }: IFavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<IFormattedBot[]>([]);

  const toggleFavorites = useCallback(
    (botToAdd: IFormattedBot) => {
      const mutableFavorites = [...favorites];
      const foundedFavorite = mutableFavorites.find(
        favorite => favorite.name === botToAdd.name,
      );

      if (!foundedFavorite) {
        const updatedFavorites = [...mutableFavorites, botToAdd];
        setFavorites(updatedFavorites);
        localStorage.setItem(storageKey, JSON.stringify(updatedFavorites));
        return;
      }

      const updatedFavorites = mutableFavorites.filter(
        favorite => favorite.name !== botToAdd.name,
      );

      setFavorites(updatedFavorites);
      localStorage.setItem(storageKey, JSON.stringify(updatedFavorites));
    },
    [favorites],
  );

  const isFavorite = useCallback(
    (bot: IFormattedBot) => {
      const isFavorite = favorites.find(
        favoriteBot => favoriteBot.name === bot.name,
      );

      return !!isFavorite;
    },
    [favorites],
  );

  localStorage;

  useEffect(() => {
    const loadStorageFavorites = () => {
      const storageFavorites = localStorage.getItem(storageKey);

      if (storageFavorites) {
        const parsedFavorites = JSON.parse(storageFavorites);
        setFavorites(parsedFavorites);
      }
    };

    loadStorageFavorites();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavorites = () => {
  return useContext(FavoritesContext);
};

export { FavoritesProvider, useFavorites };
