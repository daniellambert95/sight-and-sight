'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { isCategoryEnabled } from '../utils/cookieConsent';

export default function GoogleAnalytics() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID || '';

  useEffect(() => {
    // Check initial consent state
    const checkConsent = () => {
      const enabled = isCategoryEnabled('analytics');
      setAnalyticsEnabled(enabled);
    };

    // Check on mount
    checkConsent();

    // Listen for consent changes
    const handleConsentUpdate = () => {
      checkConsent();
    };

    window.addEventListener('cookiePreferencesUpdated', handleConsentUpdate);

    return () => {
      window.removeEventListener('cookiePreferencesUpdated', handleConsentUpdate);
    };
  }, []);

  // Don't render if no GA ID or analytics not enabled
  if (!googleAnalyticsId || !analyticsEnabled) {
    return null;
  }

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}');
        `}
      </Script>
    </>
  );
}
