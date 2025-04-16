"use client";

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
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
      className="fixed bottom-4 right-4 p-2 bg-[#1F75B5] hover:bg-[#1a5d90] rounded-full shadow-lg transition-colors duration-200 z-50 sm:bottom-6 sm:right-6 sm:p-2.5"
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
    </button>
  );
};

export default BackToTopButton;
