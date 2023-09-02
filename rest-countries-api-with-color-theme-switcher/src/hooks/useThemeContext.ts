import { useContext } from 'react';
import { CustomThemeContext } from '@/src/contexts/CustomThemeContext';

export default function useThemeContext() {
  return useContext(CustomThemeContext)!;
}