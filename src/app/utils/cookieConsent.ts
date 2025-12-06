export type CookieCategory = 'essential' | 'analytics' | 'marketing' | 'functional';

export interface CookiePreferences {
  essential: boolean; // Always true, cannot be disabled
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: number; // When consent was given
  version: string; // For future updates to cookie policy
}

const STORAGE_KEY = 'cookie-consent-preferences';
const CONSENT_VERSION = '1.0.0';

// Default preferences (only essential cookies by default - GDPR compliant)
export const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  functional: false,
  timestamp: 0,
  version: CONSENT_VERSION,
};

// Cookie category definitions
export const cookieCategories = {
  essential: {
    id: 'essential' as CookieCategory,
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function properly. They enable basic features and cannot be disabled.',
    cookies: [
      'cookie-consent-preferences - Stores your cookie preferences',
      'Next.js session cookies - Required for website functionality',
    ],
    required: true,
  },
  analytics: {
    id: 'analytics' as CookieCategory,
    name: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
    cookies: [
      '_ga - Google Analytics tracking ID',
      '_ga_* - Google Analytics property ID',
      '_gid - Google Analytics client ID',
    ],
    required: false,
  },
  marketing: {
    id: 'marketing' as CookieCategory,
    name: 'Marketing Cookies',
    description: 'These cookies are used to track visitors across websites to display relevant advertisements.',
    cookies: [
      '_fbp - Facebook Pixel browser ID',
      'fr - Facebook Pixel tracking',
    ],
    required: false,
  },
  functional: {
    id: 'functional' as CookieCategory,
    name: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization, such as remembering your theme preference (dark/light mode).',
    cookies: [
      'theme - Stores your dark/light mode preference',
    ],
    required: false,
  },
};

/**
 * Get stored cookie preferences from localStorage
 */
export function getCookiePreferences(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    
    const preferences = JSON.parse(stored) as CookiePreferences;
    // Validate preferences structure
    if (
      typeof preferences.essential === 'boolean' &&
      typeof preferences.analytics === 'boolean' &&
      typeof preferences.marketing === 'boolean' &&
      typeof preferences.functional === 'boolean'
    ) {
      return preferences;
    }
    return null;
  } catch (error) {
    console.error('Error reading cookie preferences:', error);
    return null;
  }
}

/**
 * Check if user has given consent
 * Returns true if preferences exist (meaning consent has been given or auto-accepted)
 */
export function hasConsent(): boolean {
  const preferences = getCookiePreferences();
  return preferences !== null && preferences.timestamp > 0;
}

/**
 * Save cookie preferences to localStorage
 */
export function saveCookiePreferences(preferences: Partial<CookiePreferences>): void {
  if (typeof window === 'undefined') return;
  
  try {
    const currentPreferences = getCookiePreferences() || defaultPreferences;
    const newPreferences: CookiePreferences = {
      ...currentPreferences,
      ...preferences,
      essential: true, // Always keep essential enabled
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPreferences));
    
    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent('cookiePreferencesUpdated', { 
      detail: newPreferences 
    }));
  } catch (error) {
    console.error('Error saving cookie preferences:', error);
  }
}

/**
 * Check if a specific category is enabled
 */
export function isCategoryEnabled(category: CookieCategory): boolean {
  const preferences = getCookiePreferences();
  if (!preferences) return category === 'essential'; // Only essential allowed by default
  
  return preferences[category] === true;
}

/**
 * Accept all cookies
 */
export function acceptAllCookies(): void {
  saveCookiePreferences({
    essential: true,
    analytics: true,
    marketing: true,
    functional: true,
  });
}

/**
 * Reject all non-essential cookies
 */
export function rejectAllCookies(): void {
  saveCookiePreferences({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });
}

/**
 * Clear all cookie preferences (for testing/development)
 */
export function clearCookiePreferences(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('cookiePreferencesUpdated', { 
    detail: null 
  }));
}

