import { AuthContext } from '@/src/contexts/AuthContext';
import { useContext } from 'react';

export default function useAuthContext() {
  return useContext(AuthContext)!;
}
