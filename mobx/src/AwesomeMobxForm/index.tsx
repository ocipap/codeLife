import React from 'react';
import { StoreContextProvider, useMobxStore } from './store/useMobxStore';

function AwesomeMobxForm() {
  const store = useMobxStore();
  return (
      <input type='text' {...store.register('email')} />
  );
}

export default function() {
  return (<StoreContextProvider><AwesomeMobxForm /></StoreContextProvider>);
}
