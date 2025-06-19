'use client';

import { useLanguage } from '@/app/[lang]/providers';

export default function DirectionProvider() {
  const { lang } = useLanguage();

  // No RTL logic here. Just handle language if needed.
  return null; // Or return children if needed.
} 