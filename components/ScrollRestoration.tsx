"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// The key we'll use in localStorage
const SCROLL_POS_KEY = 'camwell_scroll_position';

/**
 * ScrollRestoration component that handles restoring scroll position
 * after language changes and cleaning up stored positions
 */
export default function ScrollRestoration() {
  const pathname = usePathname();
  
  // On mount, check if we have a stored scroll position to restore
  useEffect(() => {
    const savedPosition = localStorage.getItem(SCROLL_POS_KEY);
    
    if (savedPosition) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition));
        localStorage.removeItem(SCROLL_POS_KEY);
      }, 0);
    }
  }, [pathname]);
  
  return null; // This is a utility component with no UI
} 