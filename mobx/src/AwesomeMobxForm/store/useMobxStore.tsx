import Demo from './demo';
import React, { createContext, useContext } from 'react';

const demo = new Demo();

const StoreContext = createContext(demo);


export const StoreContextProvider: React.FC = ({ children }) => {
  return <StoreContext.Provider value={demo}>{children}</StoreContext.Provider>;
};


export const useMobxStore = () => {
  return useContext(StoreContext);
};
