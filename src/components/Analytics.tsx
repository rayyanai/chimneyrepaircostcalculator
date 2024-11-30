import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const TRACKING_ID = 'G-BP5E2MPZCH';

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.gtag = function() {
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', TRACKING_ID);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search + location.hash,
    });
  }, [location]);

  return null;
}