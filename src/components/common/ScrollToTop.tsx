import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll a la parte superior de la página cada vez que cambie la ruta
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};
