import { Locale } from "./dictionary";
import { i18n } from "./i18n-config";

// Check if a locale is valid
export function isValidLocale(locale: string): locale is Locale {
  return i18n.locales.includes(locale as Locale);
}

// Get the locale from a pathname
export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/');
  const localeSegment = segments[1];
  
  if (isValidLocale(localeSegment)) {
    return localeSegment;
  }
  
  return i18n.defaultLocale;
}

// Add locale prefix to a path
export function addLocalePrefix(path: string, locale: Locale): string {
  // If path already starts with locale, return it
  if (path.startsWith(`/${locale}/`) || path === `/${locale}`) {
    return path;
  }
  
  // If path starts with a different locale, replace it
  if (path.match(/^\/[a-z]{2}\/?/)) {
    return path.replace(/^\/[a-z]{2}/, `/${locale}`);
  }
  
  // Otherwise, add locale prefix
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

// Switch locale in a path
export function switchLocale(path: string, newLocale: Locale): string {
  return addLocalePrefix(path, newLocale);
} 