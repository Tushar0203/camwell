"use client"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import {
  Box,
  ChevronRight,
  FileText,
  Grid3X3,
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
      scrolled || pathname !== '/' 
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
                className="object-contain transition-all duration-300"
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
                    onClick={() => {
                      handleLinkClick();
                      if (item.name === 'Products') {
                        setShowMegaMenu(false);
                      }
                    }}
                    className={`
                      relative px-4 py-2 rounded-lg text-sm font-medium
                      transition-all duration-300 group
                      ${isActive 
                        ? scrolled || pathname !== '/'
                          ? 'bg-[#1F75B5]/10 text-[#1F75B5]'
                          : 'bg-white/10 text-white'
                        : scrolled || pathname !== '/'
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
                      className="absolute left-1/2 transform -translate-x-1/2 w-[800px] rounded-xl shadow-2xl overflow-hidden"
                      style={{ marginTop: '20px', zIndex: 50 }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="relative bg-[#0a101e]">
                        {/* Header Section */}
                        <div className="p-6 border-b border-gray-800">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-white">Our Products</h3>
                              <p className="text-sm text-gray-400">Explore our range of security solutions</p>
                            </div>
                            <Link 
                              href="/products" 
                              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1F75B5] text-white hover:bg-[#1F75B5]/90 transition-all duration-300"
                              onClick={handleLinkClick}
                            >
                              View all products
                              <ChevronRight size={16} />
                            </Link>
                          </div>
                        </div>

                        {/* Content Grid - Two columns */}
                        <div className="grid grid-cols-2 gap-px bg-gray-800">
                          {/* Weld Mesh Fence Column */}
                          <div className="bg-[#0a101e] p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 rounded-lg bg-[#1F75B5]/20 flex items-center justify-center">
                                <Grid3X3 size={20} className="text-[#1F75B5]" />
                              </div>
                              <h4 className="text-base font-medium text-white">Weld Mesh Fence</h4>
                            </div>
                            
                            <div className="space-y-4">
                              <div>
                                <Link
                                  href="/products/border-fence"
                                  onClick={handleLinkClick}
                                  className="block text-sm font-medium text-gray-300 hover:text-white"
                                >
                                  Modular Fence
                                </Link>
                                <p className="text-xs text-gray-500 mt-0.5">
                                  Customizable modular fencing systems
                                </p>
                              </div>
                              
                              <div>
                                <Link
                                  href="/products"
                                  onClick={handleLinkClick}
                                  className="block text-sm font-medium text-gray-300 hover:text-white"
                                >
                                  Freight Corridor
                                </Link>
                                <p className="text-xs text-gray-500 mt-0.5">
                                  Secure corridor solutions for freight transport
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Gates Column */}
                          <div className="bg-[#0a101e] p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 rounded-lg bg-[#1F75B5]/20 flex items-center justify-center">
                                <Box size={20} className="text-[#1F75B5]" />
                              </div>
                              <h4 className="text-base font-medium text-white">Gates</h4>
                            </div>
                            
                            <div className="space-y-4">
                              <div>
                                <Link
                                  href="/products/fence-swing-gate"
                                  onClick={handleLinkClick}
                                  className="block text-sm font-medium text-gray-300 hover:text-white"
                                >
                                  Fence Swing Gates
                                </Link>
                                <p className="text-xs text-gray-500 mt-0.5">
                                  Durable and secure swing gate options
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 bg-[#070d19] border-t border-gray-800">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <Shield size={16} className="text-[#1F75B5]" />
                              <span>ISO 9001:2015 Certified</span>
                            </div>
                            <div className="flex items-center gap-6">
                              <Link 
                                href="/brochure"
                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                                onClick={handleLinkClick}
                              >
                                <FileText size={16} className="text-[#1F75B5]" />
                                Download Brochure
                              </Link>
                              <Link 
                                href="/contact"
                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                                onClick={handleLinkClick}
                              >
                                <Phone size={16} className="text-[#1F75B5]" />
                                Contact Sales
                              </Link>
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
                    scrolled || pathname !== '/' 
                      ? 'text-gray-900 hover:bg-gray-100' // Changed from text-charcoal to text-gray-900 for better visibility
                      : 'text-white hover:bg-white/20'
                  }`}
                  aria-label="Toggle menu"
                >
                  <svg
                    viewBox="0 -0.5 25 25"
                    fill="currentColor" // Add this to ensure the SVG inherits the text color
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
                          src="/images/Camwell-Logo.png"
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
