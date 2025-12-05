'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { isCategoryEnabled } from '../utils/cookieConsent';

export default function MetaPixel() {
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  const facebookPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';

  useEffect(() => {
    // Check initial consent state
    const checkConsent = () => {
      const enabled = isCategoryEnabled('marketing');
      setMarketingEnabled(enabled);
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

  // Don't render if no Pixel ID or marketing not enabled
  if (!facebookPixelId || !marketingEnabled) {
    return null;
  }

  return (
    <>
      {/* Meta Pixel Code */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${facebookPixelId}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
