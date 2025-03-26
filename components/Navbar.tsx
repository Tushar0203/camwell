"use client"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname() || '/';
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  // Add this effect to handle sheet state on breakpoint changes
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Warranty', path: '/warranty' },
    { name: 'Request Brochure', path: '/brochure' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Restructured product categories to match the hierarchical structure in the image
  const productCategories = [
    {
      name: 'Weld Mesh Fence',
      path: '/products/weld-mesh-fence',
      subcategories: [
        {
          name: 'Modular Fence',
          path: '/products/border-fence',
          description: 'Customizable modular fencing systems'
        },
        {
          name: 'Freight Corridor',
          path: '/products/freight-corridor',
          description: 'Secure corridor solutions for freight transport'
        }
      ]
    },
    {
      name: 'Gates',
      path: '/products/gates',
      subcategories: [
        {
          name: 'Fence Swing Gates',
          path: '/products/fence-swing-gate',
          description: 'Durable and secure swing gate options'
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

  return (
    <nav 
      className={`fixed w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg py-3' 
          : 'bg-black/30 backdrop-blur-md py-4'
      }`}
      style={{ zIndex: 40 }}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg mr-2 sm:mr-3 flex items-center justify-center text-white font-bold shadow-lg transition-all duration-300 ${
                scrolled 
                  ? 'bg-[#1F75B5]'
                  : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <span className="text-base sm:text-lg md:text-xl">C</span>
              </div>
              <span className={`transition-colors duration-300 ${
                scrolled ? 'text-charcoal' : 'text-white font-semibold'
              }`}>
                CAMWELL
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path || 
                             (item.path === '/' && pathname === '/') ||
                             (item.path === '/products' && pathname.startsWith('/products'));
              
              return (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={item.name === 'Products' ? handleMouseEnter : undefined}
                  onMouseLeave={item.name === 'Products' ? handleMouseLeave : undefined}
                >
                  <Link
                    href={item.path}
                    className={`relative px-3 lg:px-5 py-2.5 rounded-lg text-[11px] lg:text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? scrolled
                          ? 'text-[#1F75B5] transform scale-105'
                          : 'text-white transform scale-105'
                        : scrolled
                          ? 'text-charcoal hover:bg-[#1F75B5]/10'
                          : 'text-white/90 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 mx-4 ${scrolled ? 'bg-[#1F75B5]' : 'bg-white'}`}
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                  </Link>

                  {/* Invisible hover bridge to prevent menu from closing */}
                  {item.name === 'Products' && showMegaMenu && (
                    <div className="absolute left-0 w-full h-8" style={{ top: '100%' }}></div>
                  )}

                  {/* Mega Menu for Products */}
                  {item.name === 'Products' && showMegaMenu && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-[800px] rounded-xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#0c1524] to-[#111827] border border-blue-900/30"
                      style={{ marginTop: '20px', zIndex: 50 }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="relative">
                        {/* Triangle pointer */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-[#0c1524] rotate-45 border-t border-l border-blue-900/30"></div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        
                        <div className="p-8 relative z-10">
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-white tracking-tight">
                              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                Our Products
                              </span>
                            </h3>
                            <Link 
                              href="/products" 
                              className="text-sm font-medium text-blue-400 hover:text-blue-300 inline-flex items-center group bg-white/5 px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/10"
                            >
                              <span>View all products</span>
                              <motion.span 
                                className="ml-1"
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                              >
                                →
                              </motion.span>
                            </Link>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-6">
                            {productCategories.map((category, idx) => {
                              const isCategoryActive = pathname === category.path || 
                                pathname.startsWith(category.path + '/') ||
                                category.subcategories.some(subcat => 
                                  pathname === subcat.path || pathname.startsWith(subcat.path + '/')
                                );
                              
                              return (
                                <motion.div 
                                  key={category.name} 
                                  className="relative"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                                >
                                  <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/20">
                                    {/* Main Category */}
                                    <div className="block cursor-default">
                                      <div className={`p-5 border-b border-white/10 transition-all duration-200 hover:bg-blue-900/20 ${
                                        isCategoryActive
                                          ? 'bg-gradient-to-r from-blue-900/30 to-blue-800/20'
                                          : ''
                                      }`}>
                                        <div className="flex items-center justify-between">
                                          <h4 className={`text-xl font-bold transition-colors duration-200 ${
                                            isCategoryActive
                                              ? 'text-blue-400'
                                              : 'text-white'
                                          } hover:text-blue-400`}>
                                            {category.name}
                                          </h4>
                                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            isCategoryActive
                                              ? 'bg-blue-500/20 text-blue-400'
                                              : 'bg-white/10 text-white/70'
                                          } hover:bg-blue-500/20 hover:text-blue-400`}>
                                            <ChevronRight size={16} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    {/* Subcategories */}
                                    <div className="p-4">
                                      {category.subcategories.map((subcat, subIdx) => {
                                        const isSubcatActive = pathname === subcat.path || pathname.startsWith(subcat.path + '/');
                                        
                                        return (
                                          <motion.div
                                            key={subcat.name}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: (idx * 0.1) + (subIdx * 0.05) + 0.1 }}
                                          >
                                            <Link 
                                              href={subcat.path}
                                              className={`group block py-3 px-4 my-1 rounded-lg transition-all duration-200 ${
                                                isSubcatActive 
                                                  ? 'bg-blue-500/10' 
                                                  : 'hover:bg-white/5'
                                              }`}
                                            >
                                              <div className="flex items-center">
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 transition-all duration-200 ${
                                                  isSubcatActive
                                                    ? 'bg-blue-500/20 text-blue-400'
                                                    : 'bg-white/10 text-white/70'
                                                } group-hover:bg-blue-500/20 group-hover:text-blue-400`}>
                                                  <ChevronRight size={12} />
                                                </div>
                                                <div className="flex flex-col">
                                                  <span className={`text-base font-medium transition-colors duration-200 ${
                                                    isSubcatActive 
                                                      ? 'text-blue-400' 
                                                      : 'text-white'
                                                  } group-hover:text-blue-400`}>
                                                    {subcat.name}
                                                  </span>
                                                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200 mt-0.5">
                                                    {subcat.description}
                                                  </span>
                                                </div>
                                              </div>
                                            </Link>
                                          </motion.div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Navigation with Sheet */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className={`rounded-lg transition-colors duration-300 ${
                    scrolled 
                      ? 'text-charcoal hover:bg-gray-100' 
                      : 'text-white hover:bg-white/20'
                  }`}
                  aria-label="Toggle menu"
                >
                  <svg
                    viewBox="0 -0.5 25 25"
                    fill="none"
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
              <SheetContent 
                side="right" 
                className="p-0 w-3/4 sm:max-w-sm border-l-0"
                onInteractOutside={() => setIsOpen(false)}
                onEscapeKeyDown={() => setIsOpen(false)}
              >
                <div className={`h-full flex flex-col py-4 ${
                  scrolled ? 'bg-white' : 'bg-gray-900 backdrop-blur-md'
                }`}>
                  <div className="px-6 py-2 flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold flex items-center">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg mr-2 sm:mr-3 flex items-center justify-center text-white font-bold shadow-lg ${
                        scrolled 
                          ? 'bg-[#1F75B5]'
                          : 'bg-white/20 backdrop-blur-sm'
                      }`}>
                        <span className="text-base sm:text-lg">C</span>
                      </div>
                      <span className={scrolled ? 'text-charcoal' : 'text-white font-semibold'}>
                        CAMWELL
                      </span>
                    </Link>
                    <SheetTrigger asChild>
                      <button
                        className="text-white p-1"
                        aria-label="Close menu"
                      >
                        <X size={28} className={scrolled ? 'text-charcoal' : 'text-white'} />
                      </button>
                    </SheetTrigger>
                  </div>
                  <div className="pt-8 flex flex-col items-center h-full overflow-y-auto">
                    {navItems.map((item) => {
                      const isActive = pathname === item.path || 
                                     (item.path === '/' && pathname === '/') ||
                                     (item.path === '/products' && pathname.startsWith('/products'));
                      
                      return (
                        <React.Fragment key={item.name}>
                          <SheetTrigger asChild>
                            <Link
                              href={item.path}
                              className={`px-6 py-4 text-lg font-medium transition-all duration-300 my-1 rounded-lg w-[85%] text-center ${
                                isActive 
                                  ? 'text-[#1F75B5] bg-blue-50' 
                                  : scrolled
                                    ? 'text-charcoal hover:bg-blue-50'
                                    : 'text-white/90 hover:text-white hover:bg-white/20'
                              }`}
                            >
                              {item.name}
                            </Link>
                          </SheetTrigger>
                        </React.Fragment>
                      );
                    })}
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
