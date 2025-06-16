'use client';

import { ReactNode, createContext, useContext } from 'react';
import { Locale } from '@/lib/dictionary';

// Create a context to hold the current locale
type LanguageContextType = {
  lang: Locale;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

// Provider component
export function Providers({ 
  children,
  lang 
}: { 
  children: ReactNode;
  lang: Locale;
}) {
  return (
    <LanguageContext.Provider value={{ lang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to use language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 