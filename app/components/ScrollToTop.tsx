'use client';

import { JSX, ReactNode, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface ScrollToTopProps {
  children: ReactNode;
}

export default function ScrollToTop({ children }: ScrollToTopProps): JSX.Element {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);
  
  return <>{children}</>;
}