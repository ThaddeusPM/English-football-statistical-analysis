'use client';

import './globals.css'
import type { Metadata } from 'next'


import { JSX, ReactNode, useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body>
        <ScrollToTop>
          {children}
        </ScrollToTop>
      </body>
    </html>
  );
}