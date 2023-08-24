import { useContext } from 'react';
import { CartContext } from '@/src/contexts/CartContext';

export default function useCartContext() {
  return useContext(CartContext)!;
}
