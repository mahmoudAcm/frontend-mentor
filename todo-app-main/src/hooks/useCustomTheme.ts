import { useContext } from 'react';
import { CustomThemeContext } from '@/src/contexts/CustomThemeContext';

export default function useCustomTheme() {
  return useContext(CustomThemeContext)!;
}
