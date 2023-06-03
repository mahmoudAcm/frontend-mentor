import { useAppSelector } from '@/src/store';

export default function useUsesSelector() {
  return useAppSelector(state => state.users);
}