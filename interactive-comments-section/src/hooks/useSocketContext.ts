import { useContext } from 'react';
import { SocketContext } from '@/src/contexts/SocketContext';

export default function useSocketContext() {
  return useContext(SocketContext)!;
}
