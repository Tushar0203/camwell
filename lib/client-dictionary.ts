// Define the supported locales
export type Locale = 'en' | 'ar'

// Define the dictionary structure
export interface Dictionary {
  [key: string]: any;
}

// Cache dictionaries to avoid unnecessary fetches
const dictionaryCache: Record<Locale, Dictionary | null> = {
  'en': null,
  'ar': null,
};

/**
 * Client-side dictionary loader
 * This is a client-side version of the dictionary loader that doesn't use server-only
 */
export async function getDictionaryClient(locale: Locale): Promise<Dictionary> {
  // Return from cache if available
  if (dictionaryCache[locale]) {
    return dictionaryCache[locale] as Dictionary;
  }

  try {
    // Fetch the dictionary
    const dictionary = await import(`../dictionaries/${locale}.json`);
    
    // Cache the dictionary
    dictionaryCache[locale] = dictionary;
    
    return dictionary;
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error);
    
    // Fallback to English if the requested locale fails to load
    if (locale !== 'en') {
      console.warn(`Falling back to English dictionary`);
      return getDictionaryClient('en');
    }
    
    // If even English fails, return an empty dictionary
    return {};
  }
}

export const getTranslation = (lang: Locale, key: string): string => {
  // Get the dictionary from cache
  const dictionary = dictionaryCache[lang];
  
  // If dictionary exists in cache and has the key, return the translation
  if (dictionary && dictionary[key]) {
    return dictionary[key];
  }
  
  // If key doesn't exist, return the key itself as fallback
  return key;
}