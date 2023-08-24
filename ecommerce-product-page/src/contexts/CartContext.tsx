'use client';

import { createContext, ReactNode, useEffect, useState } from 'react';
import { Product } from '@/src/types';

interface State {
  items: number;
  totalAmount: number;
  products: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: () => void;
}

export const CartContext = createContext<State | null>(null);

const key = '__products';

export default function CartProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (product: Product) => {
    setTotalAmount(product.amount);
    setProducts(() => [product]);
    localStorage.setItem(key, JSON.stringify({ products: [product], totalAmount: product.amount }));
  };

  const removeFromCart = () => {
    setTotalAmount(0);
    setProducts([]);
    localStorage.removeItem(key);
  };

  //restoring saved state
  useEffect(() => {
    const json = localStorage.getItem(key);
    if (json) {
      const values = JSON.parse(json);
      setProducts(values.products as Product[]);
      setTotalAmount(values.totalAmount as number);
    }
  }, []);

  return (
    <CartContext.Provider value={{ items: products.length, products, totalAmount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
