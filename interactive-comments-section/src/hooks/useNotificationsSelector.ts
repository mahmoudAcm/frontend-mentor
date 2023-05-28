import { useAppSelector } from '@/src/store';

export default function useNotificationsSelector() {
  return useAppSelector(state => state.notifications);
}