'use client';

import { createContext, ReactNode, useState } from 'react';
import { Country } from '@/src/types';

const useStore = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [details, setDetails] = useState<Country | null>(null);

  return {
    isDialogOpen,
    setDialogOpen,
    details,
    setDetails
  };
};

type UseStoreReturnType = ReturnType<typeof useStore>;

export const CountryDetailsContext = createContext<UseStoreReturnType | null>(null);

export default function CountryDetailsProvider({ children }: { children: ReactNode }) {
  const store = useStore();
  return <CountryDetailsContext.Provider value={store}>{children}</CountryDetailsContext.Provider>;
}
