import { useContext } from 'react';
import { CountryDetailsContext } from '@/src/contexts/CountryDetailsContext';

export default function useCountryDetailsContext() {
  return useContext(CountryDetailsContext)!;
}
