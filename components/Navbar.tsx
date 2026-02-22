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
    Home,
    ImageIcon,
    Package,
    Phone,
    Shield,
    Users
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
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
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname() || '/';
  const [isOpen, setIsOpen] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(false);
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

  // Collapse mobile Products submenu when sheet closes
  useEffect(() => {
    if (!isOpen) setMobileProductsExpanded(false);
  }, [isOpen]);

  const navItems = [
    { name: lang === 'ar' ? 'الرئيسية' : 'Home', path: `/${lang}` },
    { name: lang === 'ar' ? 'المنتجات' : 'Products', path: `/${lang}/products` },
    { name: lang === 'ar' ? 'المعرض' : 'Gallery', path: `/${lang}/gallery` },
    { name: lang === 'ar' ? 'من نحن' : 'About Us', path: `/${lang}/about` },
    { name: lang === 'ar' ? 'الضمان' : 'Warranty', path: `/${lang}/warranty` },
    { name: lang === 'ar' ? 'اتصل بنا' : 'Contact Us', path: `/${lang}/contact` },
  ];

  // Restructured product categories to match the hierarchical structure in the image
  const productCategories = [
    {
      name: lang === 'ar' ? 'سياج شبكي ملحوم' : 'Weld Mesh Fence',
      subcategories: [
        {
          name: lang === 'ar' ? 'سياج موديولار مضاد للتسلق' : 'Anti Climb Modular Fence',
          path: `/${lang}/products/border-fence`,
          description: lang === 'ar' ? 'أنظمة سياج نمطية قابلة للتخصيص' : 'Customizable modular fencing systems'
        },
        {
          name: lang === 'ar' ? 'سياج موديولار الحماية العميقة' : 'Deep Guard Modular Fence',
          path: `/${lang}/products/deep-guard-modular-fence`,
          description: lang === 'ar' ? 'حلول ممرات آمنة لنقل البضائع' : 'Secure corridor solutions for freight transport'
        },
        {
          name: lang === 'ar' ? 'سياج زراعي' : 'Agricultural Fence',
          path: `/${lang}/products/agricultural-fence`,
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
     const timeout = setTimeout(() => setShowMegaMenu(false), 300);
     setHoverTimeout(timeout);
   };

   useEffect(() => {
     return () => { if (hoverTimeout) clearTimeout(hoverTimeout); };
   }, [hoverTimeout]);

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
 
   // Add this function to get icons for menu items
   const getMenuIcon = (itemName: string) => {
     const lowerName = itemName.toLowerCase();
     if (lowerName.includes('home') || lowerName.includes('الرئيسية')) {
       return <Home size={20} className="text-current" />;
     } else if (lowerName.includes('product') || lowerName.includes('المنتجات')) {
       return <Package size={20} className="text-current" />;
     } else if (lowerName.includes('gallery') || lowerName.includes('المعرض')) {
       return <ImageIcon size={20} className="text-current" />;
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
 
   return (    <nav className={`fixed w-full transition-all duration-300 bg-[#4d5156] shadow-lg`}
     style={{ zIndex: 40, ...navbarStyles }}>
       <div className="flex justify-between items-center w-full">
           <Link href={`/${lang}`} className="flex items-center w-1/3 sm:w-1/4 max-w-48 xl:max-w-none xl:w-auto shrink-0" style={{ direction: 'ltr' }}>
             <div className="relative flex justify-start xl:justify-center items-center w-full bg-white pl-2 pr-2 sm:pl-3 sm:pr-3 py-1 sm:py-3 ml-0 xl:ml-0 xl:px-14 xl:h-full xl:py-3">
               <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full xl:w-48 h-14 sm:h-13 xl:h-14"
              >
                <Image
                  src="/images/camwell.png"
                  alt="Camwell Industries Logo"
                  fill
                  className="object-contain object-left xl:object-center"
                  priority
                  sizes="(max-width: 640px) 400px, 400px"
                />
              </motion.div>

             </div>
           </Link>
         <div className="flex justify-between items-center py-2 px-4 sm:py-1">
 
           {/* Desktop Navigation */}
           <div className="hidden xl:flex items-center space-x-2" style={{ direction: 'ltr' }}>
             {navItems.map((item) => {
               const isActive = item.path === `/${lang}/products`
                 ? pathname === item.path || pathname.startsWith(`/${lang}/products/`)
                 : pathname === item.path;
               
               const isProducts = item.name === 'Products' || item.name === 'المنتجات';
               return (
                 <div
                   key={item.name}
                   className="relative"
                   onMouseEnter={isProducts ? handleMouseEnter : undefined}
                   onMouseLeave={isProducts ? handleMouseLeave : undefined}
                 >
                   <Link
                     href={item.path}
                     onClick={handleLinkClick}
                     className={`
                       relative px-4 py-2 rounded-lg text-lg font-medium
                       transition-all duration-300 group
                       ${isActive
                         ? 'bg-[#71797e] text-white'
                         : 'text-white hover:bg-[#71797e] hover:text-white'
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
                           bg-[#71797e]
                         `}
                         transition={{
                           duration: 0.2,
                           ease: "easeOut"
                         }}
                       />
                     )}
                   </Link>
 
                   {/* Invisible hover bridge to prevent menu from closing when moving to mega menu */}
                   {isProducts && showMegaMenu && (
                     <div className="absolute left-0 w-full h-8" style={{ top: '100%' }} />
                   )}
 
                   {/* Mega Menu for Products */}
                   {isProducts && showMegaMenu && (
                     <motion.div
                       initial={{ opacity: 0, y: -10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.2 }}
                       className="absolute left-1/2 transform -translate-x-1/2 w-[800px] rounded-lg shadow-lg overflow-hidden"
                       style={{ marginTop: '20px', zIndex: 50, direction: 'ltr' }}
                       onMouseEnter={handleMouseEnter}
                       onMouseLeave={handleMouseLeave}
                     >
                       <div className="relative bg-[#4d5156]">
                         {/* Content Grid - Three columns */}
                         <div className="grid grid-cols-3 gap-x-4 p-4">
                           {/* Product Categories */}
                           {productCategories.map((category) => (
                             <div key={category.name} className="space-y-3">
                               <h4 className="text-sm font-medium text-white">{category.name}</h4>
                               <ul className="space-y-2">
                                 {category.subcategories.map((subcategory) => (
                                   <li key={subcategory.name}>
                                     <Link
                                       href={subcategory.path}
                                       onClick={handleLinkClick}
                                       className="block text-sm text-white hover:bg-[#71797e] hover:text-white px-2 py-1 rounded transition-colors"
                                     >
                                       {subcategory.name}
                                     </Link>
                                   </li>
                                 ))}
                               </ul>
                             </div>
                           ))}

                           {/* Gallery Section with Vertical Divider */}
                           <div className="space-y-3 border-l border-gray-600 pl-4">
                             <h4 className="text-sm font-medium text-white">{lang === 'ar' ? 'المعرض' : 'Gallery'}</h4>
                             <ul className="space-y-2">
                               <li>
                                 <Link
                                   href={`/${lang}/gallery`}
                                   onClick={handleLinkClick}
                                   className="block text-sm text-white hover:bg-[#71797e] hover:text-white px-2 py-1 rounded transition-colors"
                                 >
                                   {lang === 'ar' ? 'المعرض' : 'Gallery'}
                                 </Link>
                               </li>
                             </ul>
                           </div>
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
          <div className="xl:hidden flex items-center gap-2" style={{ direction: 'ltr' }}>
            {/* Mobile Language Switcher */}
            <div className="relative">
              <LanguageSwitcher />
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="rounded-lg transition-colors duration-300 text-white hover:bg-white hover:text-[#00a0dc]"
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
              <SheetContent side="right" className="w-full sm:max-w-xs p-0 bg-[#4d5156] border-l border-gray-700" style={{ direction: 'ltr' }}>
                <div className="flex flex-col h-full">
                  {/* Header with Logo/Close text */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
                    <Link href={`/${lang}`} className="flex items-center" onClick={() => setIsOpen(false)}>
                      <div className="relative w-36 h-10 sm:w-44 sm:h-12">
                        <Image
                          src="/images/camwell.png"
                          alt="Camwell Industries Logo"
                          fill
                          className="object-contain object-left"
                          priority
                          sizes="(max-width: 640px) 144px, 176px"
                        />
                      </div>
                    </Link>
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="text-[#00a0dc] font-medium"
                    >
                      Close
                    </button>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto py-4">
                    <div className="space-y-1 px-4">
                      {navItems.map((item) => {
                        const isProductsItem = item.name === 'Products' || item.name === 'المنتجات';
                        const isActive = item.path === `/${lang}/products` 
                          ? pathname === item.path || pathname.startsWith(`/${lang}/products/`) 
                          : pathname === item.path;
                        
                        if (isProductsItem) {
                          return (
                            <div key={item.name}>
                              <button
                                type="button"
                                onClick={() => setMobileProductsExpanded((prev) => !prev)}
                                className={`
                                  w-full flex items-center gap-3 px-4 py-4 text-base font-medium rounded-lg
                                  ${isActive 
                                    ? 'bg-[#71797e] text-white' 
                                    : 'text-white hover:bg-[#71797e] hover:text-white'
                                  }
                                `}
                              >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                  isActive ? 'bg-[#71797e]' : 'bg-gray-700'
                                }`}>
                                  {getMenuIcon(item.name)}
                                </div>
                                {item.name}
                                <ChevronDown
                                  className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                                    mobileProductsExpanded ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>
                              {mobileProductsExpanded && (
                                <div className="pl-4 pb-2 space-y-1 border-l-2 border-gray-600 ml-5 mt-1">
                                  <Link
                                    href={`/${lang}/products`}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2.5 px-3 text-sm text-gray-300 hover:text-white hover:bg-[#71797e] rounded-lg transition-colors"
                                  >
                                    {lang === 'ar' ? 'المنتج' : 'All Products'}
                                  </Link>
                                  {productCategories.map((category) =>
                                    category.subcategories.map((sub) => (
                                      <Link
                                        key={sub.name}
                                        href={sub.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-2.5 px-3 text-sm text-gray-300 hover:text-white hover:bg-[#71797e] rounded-lg transition-colors"
                                      >
                                        {sub.name}
                                      </Link>
                                    ))
                                  )}
                                  <Link
                                    href={`/${lang}/gallery`}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2.5 px-3 text-sm text-gray-300 hover:text-white hover:bg-[#71797e] rounded-lg transition-colors"
                                  >
                                    {lang === 'ar' ? 'المعرض' : 'Gallery'}
                                  </Link>
                                </div>
                              )}
                            </div>
                          );
                        }
                        
                        return (
                          <Link
                            key={item.name}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`
                              flex items-center gap-3 px-4 py-4 text-base font-medium rounded-lg
                              ${isActive 
                                ? 'bg-[#71797e] text-white' 
                                : 'text-white hover:bg-[#71797e] hover:text-white'
                              }
                            `}
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              isActive ? 'bg-[#71797e]' : 'bg-gray-700'
                            }`}>
                              {getMenuIcon(item.name)}
                            </div>
                            {item.name}
                            {isActive && <div className="ml-auto w-2 h-2 rounded-full bg-white"></div>}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="mt-auto border-t border-gray-700 p-4 flex justify-between text-sm text-gray-300">
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
