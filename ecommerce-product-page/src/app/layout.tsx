import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import ThemeRegistry from '@/src/components/ThemeRegistry';
import CartProvider from '@/src/contexts/CartContext';

export const metadata: Metadata = {
  title: 'Frontend Mentor | E-commerce product page',
  description: 'Generated by create next app',
  icons: '/icon.png'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <ThemeRegistry>
        <CartProvider>
          <body>{children}</body>
        </CartProvider>
      </ThemeRegistry>
    </html>
  );
}
