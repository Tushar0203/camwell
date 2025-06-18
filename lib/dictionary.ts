import 'server-only'

// Define the supported locales
export type Locale = 'en' | 'ar'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries: Record<Locale, () => Promise<any>> = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  ar: () => import('../dictionaries/ar.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en()
}


// Add proper type definitions
type Dictionary = {
  [key: string]: {
    [key: string]: string
  }
}

// Update your dictionary declarations with proper typing
const dictionary: Dictionary = {
  // ... existing dictionary content ...
}