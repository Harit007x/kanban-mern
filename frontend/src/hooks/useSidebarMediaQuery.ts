import { useSidebarStore } from '@/store/sidebar-store';
import { useEffect, useState } from 'react';

export const useSidebarMediaQuery = (
  minWidth: string,
) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { sidebarOpen, setSidebarOpen } = useSidebarStore();

  useEffect(() => {
    const mediaQuery = window.matchMedia(minWidth);
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsSmallScreen(!e.matches);
      setSidebarOpen(e.matches);
    };
    setIsSmallScreen(!mediaQuery.matches);
    setSidebarOpen(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [minWidth, setSidebarOpen]);

  return { isSmallScreen, sidebarOpen, setSidebarOpen };
};
