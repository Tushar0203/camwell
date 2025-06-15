"use client"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import {
    ChevronDown,
    ChevronRight,
    FileText,
    Globe,
    Home,
    Package,
    Phone,
    Shield,
    Users
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const pathname = usePathname() || '/';
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();

  // Function to handle language change
  const handleLanguageChange = (lang: string) => {
    if (lang === 'ar') {
      // If current path is in English, switch to Arabic
      if (!pathname.startsWith('/ar')) {
        const newPath = `/ar${pathname}`;
        router.push(newPath);
      }
    } else {
      // If current path is in Arabic, switch to English
      if (pathname.startsWith('/ar')) {
        const newPath = pathname.replace(/^\/ar/, '');
        router.push(newPath || '/');
      }
    }
    setShowLangMenu(false);
  };

  // Determine current language
  const currentLang = pathname.startsWith('/ar') ? 'ar' : 'en';

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
    { name: currentLang === 'ar' ? 'الرئيسية' : 'Home', path: currentLang === 'ar' ? '/ar' : '/' },
    { name: currentLang === 'ar' ? 'المنتجات' : 'Products', path: currentLang === 'ar' ? '/ar/products' : '/products' },
    { name: currentLang === 'ar' ? 'من نحن' : 'About Us', path: currentLang === 'ar' ? '/ar/about' : '/about' },
    { name: currentLang === 'ar' ? 'الضمان' : 'Warranty', path: currentLang === 'ar' ? '/ar/warranty' : '/warranty' },
    { name: currentLang === 'ar' ? 'طلب كتيب' : 'Request Brochure', path: currentLang === 'ar' ? '/ar/brochure' : '/brochure' },
    { name: currentLang === 'ar' ? 'اتصل بنا' : 'Contact Us', path: currentLang === 'ar' ? '/ar/contact' : '/contact' },
  ];

  // Restructured product categories to match the hierarchical structure in the image
  const productCategories = [
    {
      name: currentLang === 'ar' ? 'سياج شبكي ملحوم' : 'Weld Mesh Fence',
      subcategories: [
        {
          name: currentLang === 'ar' ? 'سياج نمطي' : 'Modular Fence',
          path: currentLang === 'ar' ? '/ar/products/border-fence' : '/products/border-fence',
          description: currentLang === 'ar' ? 'أنظمة سياج نمطية قابلة للتخصيص' : 'Customizable modular fencing systems'
        },
        {
          name: currentLang === 'ar' ? 'ممر الشحن' : 'Freight Corridor',
          path: currentLang === 'ar' ? '/ar/products' : '/products',
          description: currentLang === 'ar' ? 'حلول ممرات آمنة لنقل البضائع' : 'Secure corridor solutions for freight transport'
        }
      ]
    },
    {
      name: currentLang === 'ar' ? 'البوابات' : 'Gates',
      subcategories: [
        {
          name: currentLang === 'ar' ? 'بوابات السياج المتأرجحة' : 'Fence Swing Gates',
          path: currentLang === 'ar' ? '/ar/products/fence-swing-gate' : '/products/fence-swing-gate',
          description: currentLang === 'ar' ? 'خيارات بوابات متأرجحة متينة وآمنة' : 'Durable and secure swing gate options'
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

  // Language menu handlers
  const handleLangMouseEnter = () => {
    setShowLangMenu(true);
  };

  const handleLangMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowLangMenu(false);
    }, 300);
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
  return (    <nav className={`fixed w-full transition-all duration-300 ${
      scrolled || pathname !== '/' && pathname !== '/ar' 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-4'
    }`}
    style={{ zIndex: 40 }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">          <Link href={currentLang === 'ar' ? '/ar' : '/'} className="flex items-center">
            <div className={`relative transition-all duration-300 ${
              scrolled || (pathname !== '/' && pathname !== '/ar')
                ? 'bg-[#0f172a]' 
                : ''
            }`} style={{ 
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
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = 
                (pathname === item.path) || 
                (item.path === '/' && pathname === '/') ||
                (item.path === '/ar' && pathname === '/ar') ||
                (item.path === '/products' && pathname.startsWith('/products') && !pathname.startsWith('/ar/')) ||
                (item.path === '/ar/products' && pathname.startsWith('/ar/products'));
              
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
                        ? scrolled || (pathname !== '/' && pathname !== '/ar')
                          ? 'bg-blue-500/20 text-blue-600'
                          : 'bg-white/10 text-white'
                        : scrolled || (pathname !== '/' && pathname !== '/ar')
                          ? 'text-slate-700 hover:bg-blue-500/10 hover:text-blue-600'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
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
                          ${scrolled || (pathname !== '/' && pathname !== '/ar')
                            ? 'bg-blue-500/20 border border-blue-400/50'
                            : 'bg-white/10 border border-white/20'
                          }
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
                      style={{ marginTop: '20px', zIndex: 50 }}
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

            {/* Language Selector */}
            <div 
              className="relative"
              onMouseEnter={handleLangMouseEnter}
              onMouseLeave={handleLangMouseLeave}
            >
              <button
                className={`
                  relative px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-300 group flex items-center gap-1
                  ${scrolled || (pathname !== '/' && pathname !== '/ar')
                    ? 'text-slate-700 hover:bg-blue-500/10 hover:text-blue-600'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                <Globe size={16} className="text-current" />
                <span className="relative z-10">
                  {currentLang === 'ar' ? 'العربية' : 'English'}
                </span>
                <ChevronDown size={14} className="text-current" />
              </button>

              {/* Language Menu */}
              {showLangMenu && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 w-36 rounded-lg shadow-lg overflow-hidden"
                  style={{ marginTop: '8px', zIndex: 50 }}
                >
                  <div className="relative bg-[#0F172A]">
                    <ul className="py-2">
                      <li>
                        <button
                          onClick={() => handleLanguageChange('en')}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            currentLang === 'en' 
                              ? 'text-blue-400 bg-blue-500/10' 
                              : 'text-slate-300 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          English
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLanguageChange('ar')}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            currentLang === 'ar' 
                              ? 'text-blue-400 bg-blue-500/10' 
                              : 'text-slate-300 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          العربية
                        </button>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          </div>          {/* Mobile Navigation with Sheet */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Language Selector */}
            <button
              onClick={() => handleLanguageChange(currentLang === 'en' ? 'ar' : 'en')}
              className={`rounded-lg p-2 transition-colors duration-300 ${
                scrolled || (pathname !== '/' && pathname !== '/ar')
                  ? 'text-slate-700 hover:bg-slate-200' 
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle language"
            >
              <Globe size={20} className="text-current" />
            </button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className={`rounded-lg transition-colors duration-300 ${
                    scrolled || (pathname !== '/' && pathname !== '/ar')
                      ? 'text-slate-700 hover:bg-slate-200' 
                      : 'text-white hover:bg-white/20'
                  }`}
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
              <SheetContent side="right" className="w-full max-w-xs">
                <div className="flex flex-col h-full">
                  <div className="py-6">
                    <Link href={currentLang === 'ar' ? '/ar' : '/'} className="flex items-center" onClick={() => setIsOpen(false)}>
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
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    <div className="space-y-1">
                      {navItems.map((item) => {
                        const isActive = 
                          (pathname === item.path) || 
                          (item.path === '/' && pathname === '/') ||
                          (item.path === '/ar' && pathname === '/ar') ||
                          (item.path === '/products' && pathname.startsWith('/products') && !pathname.startsWith('/ar/')) ||
                          (item.path === '/ar/products' && pathname.startsWith('/ar/products'));
                        
                        return (
                          <Link
                            key={item.name}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`
                              flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg
                              ${isActive 
                                ? 'bg-blue-500/10 text-blue-600' 
                                : 'text-slate-700 hover:bg-slate-100'
                              }
                            `}
                          >
                            {getMenuIcon(item.name)}
                            {item.name}
                          </Link>
                        );
                      })}
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
