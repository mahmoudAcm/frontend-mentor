import { useContext } from 'react';
import { NotificationContext } from '../contexts/NotificationContext';

export default function useNotificationContext() {
  return useContext(NotificationContext)!;
}
