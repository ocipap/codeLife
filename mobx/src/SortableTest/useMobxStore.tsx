import React, { createContext, useContext } from 'react';
import SortableStore from './SortableStore';

const StoreContext = createContext(new SortableStore());
export const StoreProvider: React.FC = ({ children }) => {
  const store = new SortableStore();
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useMobxStore = () => {
  return useContext(StoreContext);
};
