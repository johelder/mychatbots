import { createContext, ReactNode, useContext, useState } from 'react';

interface IListTypeContext {
  activeListType: 'blocks' | 'list';
  setActiveListType: (type: 'blocks' | 'list') => void;
}

interface IListTypeContextProvider {
  children: ReactNode;
}

const ListTypeContext = createContext({} as IListTypeContext);

const ListTypeContextProvider = ({ children }: IListTypeContextProvider) => {
  const [activeListType, setActiveListType] = useState<'blocks' | 'list'>(
    'blocks',
  );

  return (
    <ListTypeContext.Provider value={{ activeListType, setActiveListType }}>
      {children}
    </ListTypeContext.Provider>
  );
};

const useListType = () => {
  return useContext(ListTypeContext);
};

export { ListTypeContextProvider, useListType };
