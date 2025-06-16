"use client";

import { usePathname } from "next/navigation";
import { Locale } from "@/lib/dictionary";
import { locales } from "@/middleware";
import Link from "next/link";
import { useLanguage } from "@/app/[lang]/providers";
import { switchLocale } from "@/lib/locale-utils";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import { useEffect } from "react";

// LocalStorage key for storing scroll position
const SCROLL_POSITION_KEY = 'camwell_scroll_position';

export default function LanguageSwitcher() {
  const pathName = usePathname();
  const { lang: currentLocale } = useLanguage();

  // Language display info
  const languageInfo = {
    en: {
      name: "English",
      code: "US"
    },
    ar: {
      name: "العربية",
      code: "AR"
    }
  };

  // Ensure currentLocale is valid before accessing
  const validLocale = (currentLocale && languageInfo[currentLocale]) 
    ? currentLocale 
    : 'en';
    
  // Handle scroll restoration on initial load
  useEffect(() => {
    const savedPosition = localStorage.getItem(SCROLL_POSITION_KEY);
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
      localStorage.removeItem(SCROLL_POSITION_KEY);
    }
  }, []);
  
  // Handle language change and save scroll position
  const handleLanguageChange = (locale: Locale) => {
    // Save current scroll position to localStorage
    localStorage.setItem(SCROLL_POSITION_KEY, window.scrollY.toString());
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white border-none rounded-md font-medium transition-colors duration-200 px-4 py-2 h-auto flex items-center gap-1"
        >
          <span className="mr-1 text-sm font-medium">
            {languageInfo[validLocale].code}
          </span>
          <span className="text-sm font-medium">{languageInfo[validLocale].name}</span>
          <ChevronDown size={14} className="ml-1 opacity-80" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="min-w-[140px] p-1 bg-[#0e1525] border border-gray-800 shadow-xl rounded-md"
      >
        {locales.map((locale) => (
          <Link
            key={locale}
            href={switchLocale(pathName || '/', locale)}
            onClick={() => handleLanguageChange(locale)}
            className="block"
          >
            <DropdownMenuItem className={`flex items-center gap-2 py-2 px-3 rounded-md cursor-pointer transition-colors duration-200 ${
              validLocale === locale
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "text-gray-200 hover:bg-gray-800"
            }`}>
              <span className="text-sm font-medium mr-1">
                {languageInfo[locale].code}
              </span>
              <span className="text-sm">{languageInfo[locale].name}</span>
              
              {validLocale === locale && (
                <Check size={14} className="ml-auto opacity-80" />
              )}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 