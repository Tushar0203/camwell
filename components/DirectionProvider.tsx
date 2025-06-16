'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/app/[lang]/providers';

export default function DirectionProvider() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  useEffect(() => {
    // Set HTML attributes for language and direction
    const htmlElement = document.documentElement;
    
    if (isArabic) {
      htmlElement.setAttribute('lang', 'ar');
      htmlElement.setAttribute('dir', 'rtl');
      
      // Add RTL specific styles
      document.body.classList.add('rtl-layout');
      
      // Add RTL CSS
      const style = document.createElement('style');
      style.id = 'rtl-style';
      style.textContent = `
        /* RTL layout overrides */
        .rtl-layout {
          text-align: right;
        }
        
        /* Flip icons and directional elements */
        .rtl-layout .flip-in-rtl {
          transform: scaleX(-1);
        }
        
        /* Adjust margins and paddings */
        .rtl-layout .mr-auto {
          margin-right: 0 !important;
          margin-left: auto !important;
        }
        
        .rtl-layout .ml-auto {
          margin-left: 0 !important;
          margin-right: auto !important;
        }
        
        /* Additional RTL fixes for arrows and icons */
        .rtl-layout .rtl-mirror {
          transform: scaleX(-1);
        }
        
        .rtl-layout .rtl-swap-margin {
          margin-left: 0.75rem !important;
          margin-right: 0 !important;
        }
        
        .rtl-layout .rtl-swap-margin-reverse {
          margin-right: 0.75rem !important;
          margin-left: 0 !important;
        }
        
        /* RTL flex direction */
        .rtl-layout .rtl-flex-row-reverse {
          flex-direction: row-reverse;
        }
        
        /* RTL border adjustment */
        .rtl-layout .rtl-border-right {
          border-right: 2px solid;
          border-left: none !important;
        }
        
        .rtl-layout .rtl-border-left {
          border-left: 2px solid;
          border-right: none !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      htmlElement.setAttribute('lang', 'en');
      htmlElement.setAttribute('dir', 'ltr');
      
      // Remove RTL specific styles
      document.body.classList.remove('rtl-layout');
      
      // Remove RTL CSS
      const style = document.getElementById('rtl-style');
      if (style) {
        document.head.removeChild(style);
      }
    }
    
    return () => {
      // Cleanup
      const style = document.getElementById('rtl-style');
      if (style) {
        document.head.removeChild(style);
      }
    };
  }, [isArabic]);

  // This component doesn't render anything
  return null;
} 