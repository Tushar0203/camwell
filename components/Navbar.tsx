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
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname() || '/';
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

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
      subcategories: [
        {
          name: 'Modular Fence',
          path: '/products/border-fence',
          description: 'Customizable modular fencing systems'
        },
        {
          name: 'Freight Corridor',
          path: '/products',
          description: 'Secure corridor solutions for freight transport'
        }
      ]
    },
    {
      name: 'Gates',
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
    switch (itemName.toLowerCase()) {
      case 'home':
        return <Home size={20} className="text-current" />;
      case 'products':
        return <Package size={20} className="text-current" />;
      case 'about us':
        return <Users size={20} className="text-current" />;
      case 'warranty':
        return <Shield size={20} className="text-current" />;
      case 'request brochure':
        return <FileText size={20} className="text-current" />;
      case 'contact us':
        return <Phone size={20} className="text-current" />;
      default:
        return <ChevronRight size={20} className="text-current" />;
    }
  };

  return (
    <nav className={`fixed w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg py-3' 
        : 'bg-transparent py-4'
    }`}
    style={{ zIndex: 40 }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-32 h-12 sm:w-40 sm:h-14"
            >
              <Image
                src="/images/Camwell-Logo.png"
                alt="Camwell Industries Logo"
                fill
                className={`object-contain transition-all duration-300 ${
                  scrolled ? '' : 'logo-light'
                }`}
                priority
                sizes="128px"
              />
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
                    className={`
                      relative px-4 py-2 rounded-lg text-sm font-medium
                      transition-all duration-300 group
                      ${isActive 
                        ? scrolled
                          ? 'bg-[#1F75B5]/10 text-[#1F75B5]'
                          : 'bg-white/10 text-white'
                        : scrolled
                          ? 'text-charcoal hover:bg-[#1F75B5]/5 hover:text-[#1F75B5]'
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
                        animate={{ opacity: 1, scale: 1 }}
                        className={`
                          absolute inset-0 rounded-lg
                          ${scrolled 
                            ? 'bg-[#1F75B5]/10 border border-[#1F75B5]/20'
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
                  {item.name === 'Products' && showMegaMenu && (
                    <div className="absolute left-0 w-full h-8" style={{ top: '100%' }}></div>
                  )}

                  {/* Mega Menu for Products */}
                  {item.name === 'Products' && showMegaMenu && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-[800px] rounded-2xl shadow-2xl overflow-hidden"
                      style={{ marginTop: '20px', zIndex: 50 }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="relative bg-gradient-to-br from-[#0c1524] via-[#0f1a2b] to-[#111827] border border-blue-900/30 backdrop-blur-xl">
                        {/* Improved triangle pointer */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-gradient-to-br from-[#0c1524] to-[#111827] rotate-45 border-t border-l border-blue-900/30"></div>
                        
                        {/* Header Section */}
                        <div className="p-6 border-b border-blue-900/20">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-1">Our Products</h3>
                              <p className="text-sm text-blue-300/70">Explore our range of security solutions</p>
                            </div>
                            <Link 
                              href="/products" 
                              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
                              onClick={handleLinkClick}
                            >
                              View all 
                              <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                              >
                                →
                              </motion.span>
                            </Link>
                          </div>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-2 gap-6 p-6">
                          {productCategories.map((category, idx) => (
                            <motion.div 
                              key={category.name}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                            >
                              {/* Category Header */}
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                  {category.name === 'Weld Mesh Fence' ? (
                                    <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                      <path d="M4 4h16v16H4z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M4 12h16M12 4v16" strokeWidth="2"/>
                                    </svg>
                                  ) : (
                                    <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                      <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                  )}
                                </div>
                                <h4 className="text-lg font-medium text-white">{category.name}</h4>
                              </div>

                              {/* Subcategories */}
                              <div className="space-y-2">
                                {category.subcategories.map((subcat, subIdx) => (
                                  <motion.div
                                    key={subcat.name}
                                    initial={{ opacity: 0, x: -5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: (idx * 0.1) + (subIdx * 0.05) }}
                                  >
                                    <Link 
                                      href={subcat.path}
                                      className="group flex items-center gap-4 p-3 rounded-xl hover:bg-blue-500/10 transition-all duration-300"
                                      onClick={handleLinkClick}
                                    >
                                      <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-blue-500/20 flex items-center justify-center transition-all duration-300">
                                        <ChevronRight size={16} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300"/>
                                      </div>
                                      <div>
                                        <h5 className="text-sm font-medium text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                                          {subcat.name}
                                        </h5>
                                        <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                                          {subcat.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Footer Section */}
                        <div className="border-t border-blue-900/20 p-4 bg-blue-500/5">
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                              <Shield size={16} className="text-blue-400"/>
                              <span>Premium Security Solutions</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone size={16} className="text-blue-400"/>
                              <span>24/7 Support Available</span>
                            </div>
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
                className="p-0 w-full sm:w-80 border-l-0"
                onInteractOutside={() => setIsOpen(false)}
                onEscapeKeyDown={() => setIsOpen(false)}
              >
                <div className={`h-full flex flex-col bg-gradient-to-b from-[#0f172a] to-[#1e293b]`}>
                  {/* Header */}
                  <div className="px-6 py-4 flex justify-between items-center border-b border-white/10">
                    <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                      <div className="relative w-32 h-12">
                        <Image
                          src="/images/camwell-logo.png"
                          alt="Camwell Industries Logo"
                          fill
                          className="object-contain logo-light"
                          priority
                          sizes="128px"
                        />
                      </div>
                    </Link>
                    
                    {/* New element in top-right corner */}
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-white/70">Menu</div>
                      <SheetTrigger asChild>
                        <button
                          className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm hover:bg-blue-500/30 transition-all duration-300"
                        >
                          Close
                        </button>
                      </SheetTrigger>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 overflow-y-auto py-6 px-4">
                    <div className="space-y-2">
                      {navItems.map((item, index) => {
                        const isActive = pathname === item.path || 
                                       (item.path === '/' && pathname === '/') ||
                                       (item.path === '/products' && pathname.startsWith('/products'));
                        
                        return (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <SheetTrigger asChild>
                              <Link
                                href={item.path}
                                className={`
                                  relative flex items-center gap-3 px-4 py-3.5 rounded-xl w-full
                                  transition-all duration-300 group
                                  ${isActive 
                                    ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400'
                                    : 'text-white/70 hover:text-white hover:bg-white/10'
                                  }
                                `}
                              >
                                {/* Icon based on menu item */}
                                <div className={`
                                  w-9 h-9 rounded-lg flex items-center justify-center
                                  transition-all duration-300
                                  ${isActive
                                    ? 'bg-blue-500/20'
                                    : 'bg-white/5 group-hover:bg-white/10'
                                  }
                                `}>
                                  {getMenuIcon(item.name)}
                                </div>
                                
                                <div className="flex-1">
                                  <span className="font-medium">{item.name}</span>
                                </div>
                                
                                {/* Active indicator */}
                                {isActive && (
                                  <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-blue-400" />
                                )}
                              </Link>
                            </SheetTrigger>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto p-6 border-t border-white/10">
                    <div className="flex items-center justify-between text-white/60 text-sm">
                      <span>© {new Date().getFullYear()} Camwell</span>
                      <div className="flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                          Privacy
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors duration-200">
                          Terms
                        </Link>
                      </div>
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
