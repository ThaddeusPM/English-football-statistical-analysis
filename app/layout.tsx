'use client';

import './globals.css'


import { JSX, ReactNode} from 'react';
import { Suspense } from 'react'
import ScrollToTop from './components/ScrollToTop';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body>
         {/* Wrap all children in a Suspense boundary */}
         <Suspense fallback={<p>Loading...</p>}>
          <ScrollToTop>
            {children}
          </ScrollToTop>
        </Suspense>
      </body>
    </html>
  );
}