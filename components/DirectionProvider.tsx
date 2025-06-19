'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/app/[lang]/providers';

export default function DirectionProvider() {
  const { lang } = useLanguage();

  useEffect(() => {
    const html = document.documentElement;

    if (lang === 'ar') {
      html.setAttribute('lang', 'ar');
      // Keep LTR direction to avoid layout shifts
      html.setAttribute('dir', 'ltr');

      // Add a class to target Arabic mode without layout reversal
      document.body.classList.add('rtl-no-shift');

      // Inject style overrides once
      if (!document.getElementById('rtl-no-shift-style')) {
        const style = document.createElement('style');
        style.id = 'rtl-no-shift-style';
        style.textContent = `
          /* Prevent flex direction reversal for Arabic */
          .rtl-no-shift .flex-row-reverse { flex-direction: row !important; }
          @media (min-width: 640px) { .rtl-no-shift .sm\\:flex-row-reverse { flex-direction: row !important; } }
          @media (min-width: 768px) { .rtl-no-shift .md\\:flex-row-reverse { flex-direction: row !important; } }
          @media (min-width: 1024px) { .rtl-no-shift .lg\\:flex-row-reverse { flex-direction: row !important; } }
          @media (min-width: 1280px) { .rtl-no-shift .xl\\:flex-row-reverse { flex-direction: row !important; } }
        `;
        document.head.appendChild(style);
      }
    } else {
      html.setAttribute('lang', 'en');
      html.setAttribute('dir', 'ltr');
      document.body.classList.remove('rtl-no-shift');
    }
  }, [lang]);

  return null;
} 