// Helper function to get the appropriate route for a language
export function withLang(route: string, lang: 'en' | 'ar'): string {
  // If the route already has the correct prefix, return it
  if (lang === 'ar' && route.startsWith('/ar')) {
    return route;
  }
  
  if (lang === 'en' && !route.startsWith('/ar')) {
    return route;
  }
  
  // Convert between languages
  if (lang === 'ar') {
    // English to Arabic
    return `/ar${route === '/' ? '' : route}`;
  } else {
    // Arabic to English
    return route.replace(/^\/ar/, '') || '/';
  }
} 