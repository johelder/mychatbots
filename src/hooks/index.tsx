import { ReactNode } from 'react';
import { ListTypeContextProvider } from './listType';

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => {
  return <ListTypeContextProvider>{children}</ListTypeContextProvider>;
};
