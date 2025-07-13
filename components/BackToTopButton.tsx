"use client";

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      const isBodyHidden = document.body.style.overflow === 'hidden';
      const isHtmlHidden = document.documentElement.style.overflow === 'hidden';

      if (isBodyHidden || isHtmlHidden) {
        setIsVisible(false);
      } else if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Also listen for changes to the body/html style (though direct style changes are less common)
    // A more robust solution might involve a MutationObserver or a global state,
    // but this addresses the direct style manipulation from the gallery.
    const observer = new MutationObserver(toggleVisibility);
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });


    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 p-2 bg-[#00a0dc] hover:bg-[#00a0dc] rounded-full shadow-lg transition-colors duration-200 z-50 sm:bottom-6 sm:right-6 sm:p-2.5 cursor-pointer"
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
    </button>
  );
};

export default BackToTopButton;
