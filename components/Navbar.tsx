"use client"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    FileText,
    Home,
    Package,
    Phone,
    Shield,
    Users
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { CSSProperties } from 'react';
import { Locale } from '@/lib/dictionary';

// Add CSS to force LTR on Navbar regardless of page language
const navbarStyles: CSSProperties = {
  direction: 'ltr',
  textAlign: 'left'
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  console.log(scrolled)
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname() || '/';
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const params = useParams();
  const lang = params?.lang as Locale || 'en';

  // Add this function to close mega menu
  const handleLinkClick = () => {
    setShowMegaMenu(false);
  };

  // Add this effect to handle sheet state on breakpoint changes
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  const navItems = [
    { name: lang === 'ar' ? 'الرئيسية' : 'Home', path: `/${lang}` },
    { name: lang === 'ar' ? 'المنتجات' : 'Products', path: `/${lang}/products` },
    { name: lang === 'ar' ? 'من نحن' : 'About Us', path: `/${lang}/about` },
    { name: lang === 'ar' ? 'الضمان' : 'Warranty', path: `/${lang}/warranty` },
    { name: lang === 'ar' ? 'طلب كتيب' : 'Request Brochure', path: `/${lang}/brochure` },
    { name: lang === 'ar' ? 'اتصل بنا' : 'Contact Us', path: `/${lang}/contact` },
  ];

  // Restructured product categories to match the hierarchical structure in the image
  const productCategories = [
    {
      name: lang === 'ar' ? 'سياج شبكي ملحوم' : 'Weld Mesh Fence',
      subcategories: [
        {
          name: lang === 'ar' ? 'سياج نمطي' : 'Modular Fence',
          path: `/${lang}/products/border-fence`,
          description: lang === 'ar' ? 'أنظمة سياج نمطية قابلة للتخصيص' : 'Customizable modular fencing systems'
        },
        {
          name: lang === 'ar' ? 'ممر الشحن' : 'Freight Corridor',
          path: `/${lang}/products`,
          description: lang === 'ar' ? 'حلول ممرات آمنة لنقل البضائع' : 'Secure corridor solutions for freight transport'
        }
      ]
    },
    {
      name: lang === 'ar' ? 'البوابات' : 'Gates',
      subcategories: [
        {
          name: lang === 'ar' ? 'بوابات السياج المتأرجحة' : 'Fence Swing Gates',
          path: `/${lang}/products/fence-swing-gate`,
          description: lang === 'ar' ? 'خيارات بوابات متأرجحة متينة وآمنة' : 'Durable and secure swing gate options'
        }
      ]
    }
  ];

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowMegaMenu(false);
    }, 300); // Small delay to prevent accidental closing
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    // Check initial scroll position
    if (window.scrollY > 10) {
      setScrolled(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  // Add this function to get icons for menu items
  const getMenuIcon = (itemName: string) => {
    const lowerName = itemName.toLowerCase();
    if (lowerName.includes('home') || lowerName.includes('الرئيسية')) {
      return <Home size={20} className="text-current" />;
    } else if (lowerName.includes('product') || lowerName.includes('المنتجات')) {
      return <Package size={20} className="text-current" />;
    } else if (lowerName.includes('about') || lowerName.includes('من نحن')) {
      return <Users size={20} className="text-current" />;
    } else if (lowerName.includes('warranty') || lowerName.includes('الضمان')) {
      return <Shield size={20} className="text-current" />;
    } else if (lowerName.includes('brochure') || lowerName.includes('كتيب')) {
      return <FileText size={20} className="text-current" />;
    } else if (lowerName.includes('contact') || lowerName.includes('اتصل')) {
      return <Phone size={20} className="text-current" />;
    } else {
      return <ChevronRight size={20} className="text-current" />;
    }
  };

  return (    <nav className={`fixed w-full transition-all duration-300 bg-[#0F172A] shadow-lg py-3`}
    style={{ zIndex: 40, ...navbarStyles }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">          
          <Link href={`/${lang}`} className="flex items-center" style={{ direction: 'ltr' }}>
            <div className="relative bg-[#0f172a] transition-all duration-300" style={{ 
              borderRadius: 0,
              paddingRight: '3rem', // Increased padding on right side
            }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-36 h-10 sm:w-44 sm:h-12"
              >
                <Image
                  src="/images/Camwell-Logo.png"
                  alt="Camwell Industries Logo"
                  fill
                  className="object-contain object-left transition-all duration-300"
                  priority
                  sizes="176px"
                />
              </motion.div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2" style={{ direction: 'ltr' }}>
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              
              return (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={item.name === 'Products' || item.name === 'المنتجات' ? handleMouseEnter : undefined}
                  onMouseLeave={item.name === 'Products' || item.name === 'المنتجات' ? handleMouseLeave : undefined}
                >
                  <Link
                    href={item.path}
                    onClick={() => {
                      handleLinkClick();
                      if (item.name === 'Products' || item.name === 'المنتجات') {
                        setShowMegaMenu(false);
                      }
                    }}                    className={`
                      relative px-4 py-2 rounded-lg text-sm font-medium
                      transition-all duration-300 group
                      ${isActive 
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'text-slate-300 hover:bg-blue-500/10 hover:text-blue-400'
                      }
                    `}
                  >
                    <span className="relative z-10">
                      {item.name}
                    </span>
                      {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}                        className={`
                          absolute inset-0 rounded-lg
                          bg-blue-500/20 border border-blue-400/50
                        `}
                        transition={{ 
                          duration: 0.2,
                          ease: "easeOut"
                        }}
                      />
                    )}
                  </Link>

                  {/* Invisible hover bridge to prevent menu from closing */}
                  {(item.name === 'Products' || item.name === 'المنتجات') && showMegaMenu && (
                    <div className="absolute left-0 w-full h-8" style={{ top: '100%' }}></div>
                  )}

                  {/* Mega Menu for Products */}
                  {(item.name === 'Products' || item.name === 'المنتجات') && showMegaMenu && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-[600px] rounded-lg shadow-lg overflow-hidden"
                      style={{ marginTop: '20px', zIndex: 50, direction: 'ltr' }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="relative bg-[#0F172A]">
                        {/* Content Grid - Two columns */}
                        <div className="grid grid-cols-2 gap-2 p-4">
                          {productCategories.map((category) => (
                            <div key={category.name} className="space-y-3">
                              <h4 className="text-sm font-medium text-white">{category.name}</h4>
                              <ul className="space-y-2">
                                {category.subcategories.map((subcategory) => (
                                  <li key={subcategory.name}>
                                    <Link
                                      href={subcategory.path}
                                      onClick={handleLinkClick}
                                      className="block text-sm text-slate-300 hover:text-white"
                                    >
                                      {subcategory.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}

            {/* Language Switcher */}
            <div className="relative">
              <LanguageSwitcher />
            </div>
          </div>          {/* Mobile Navigation with Sheet */}
          <div className="lg:hidden flex items-center gap-2" style={{ direction: 'ltr' }}>
            {/* Mobile Language Switcher */}
            <div className="relative">
              <LanguageSwitcher />
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="rounded-lg transition-colors duration-300 text-slate-300 hover:bg-blue-500/10 hover:text-blue-400"
                  aria-label="Toggle menu"
                >
                  <svg
                    viewBox="0 -0.5 25 25"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                  >
                    <path
                      d="M5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM19.5 13.25C19.9142 13.25 20.25 12.9142 20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75V13.25ZM7.834 15.75C7.41979 15.75 7.084 16.0858 7.084 16.5C7.084 16.9142 7.41979 17.25 7.834 17.25V15.75ZM17.167 17.25C17.5812 17.25 17.917 16.9142 17.917 16.5C17.917 16.0858 17.5812 15.75 17.167 15.75V17.25ZM7.834 7.75C7.41979 7.75 7.084 8.08579 7.084 8.5C7.084 8.91421 7.41979 9.25 7.834 9.25V7.75ZM17.167 9.25C17.5812 9.25 17.917 8.91421 17.917 8.5C17.917 8.08579 17.5812 7.75 17.167 7.75V9.25ZM5.5 13.25H19.5V11.75H5.5V13.25ZM7.834 17.25H17.167V15.75H7.834V17.25ZM7.834 9.25H17.167V7.75H7.834V9.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-0 bg-[#0F172A] border-l border-gray-800" style={{ direction: 'ltr' }}>
                <div className="flex flex-col h-full">
                  {/* Header with Logo/Close text */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                    <Link href={`/${lang}`} className="flex items-center" onClick={() => setIsOpen(false)}>
                      <div className="relative w-36 h-10">
                        <Image
                          src="/images/Camwell-Logo.png"
                          alt="Camwell Industries Logo"
                          fill
                          className="object-contain object-left"
                          priority
                        />
                      </div>
                    </Link>
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto py-4">
                    <div className="space-y-1 px-4">
                      {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        
                        return (
                          <Link
                            key={item.name}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`
                              flex items-center gap-3 px-4 py-4 text-base font-medium rounded-lg
                              ${isActive 
                                ? 'bg-blue-600/20 text-blue-400' 
                                : 'text-slate-300 hover:bg-blue-500/10 hover:text-blue-400'
                              }
                            `}
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              isActive ? 'bg-blue-600/20' : 'bg-[#1a2234]'
                            }`}>
                              {getMenuIcon(item.name)}
                            </div>
                            {item.name}
                            {isActive && <div className="ml-auto w-2 h-2 rounded-full bg-blue-400"></div>}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="mt-auto border-t border-gray-800 p-4 flex justify-between text-sm text-gray-400">
                    <span>© 2025 Camwell</span>
                    <div className="flex gap-4">
                      <Link href={`/${lang}/privacy-policy`}>Privacy</Link>
                      <Link href={`/${lang}/terms-of-service`}>Terms</Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
