"use client"
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || '/';

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Warranty', path: '/warranty' },
    { name: 'Contact', path: '/contact' },
  ];

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
              <div className="w-12 h-12 bg-industrial-blue rounded-lg mr-3 flex items-center justify-center text-white font-bold shadow-lg">
                C
              </div>
              <span className={`transition-colors duration-300 ${
                scrolled ? 'text-charcoal' : 'text-white font-semibold'
              }`}>
                CAMWELL
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path || 
                             (item.path === '/' && pathname === '/');
              
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
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
              );
            })}
          </div>

          {/* Mobile Navigation with Sheet */}
          <div className="md:hidden">
            <Sheet>
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
              <SheetContent side="right" className="p-0 w-3/4 sm:max-w-sm border-l-0">
                <div className={`h-full flex flex-col py-4 ${
                  scrolled ? 'bg-white' : 'bg-gray-900 backdrop-blur-md'
                }`}>
                  <div className="px-6 py-2 flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold flex items-center">
                      <div className="w-10 h-10 bg-industrial-blue rounded-lg mr-3 flex items-center justify-center text-white font-bold shadow-lg">
                        C
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
                                     (item.path === '/' && pathname === '/');
                      
                      return (
                        <SheetTrigger asChild key={item.name}>
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
