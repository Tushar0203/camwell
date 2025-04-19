"use client"
import { motion, PanInfo } from 'framer-motion'; // Import PanInfo type
import { ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/fence-1.jpg',
    title: 'Advanced Security',
    subtitle: 'Fortifying Boundaries',
    description: 'State-of-the-art fencing solutions for maximum security'
  },
  {
    id: 2,
    image: '/images/fence-2.jpg',
    title: 'Military Grade',
    subtitle: 'Defense Solutions',
    description: 'Trusted by defense organizations across India'
  },
  {
    id: 3,
    image: '/images/fence-3.jpg',
    title: 'Innovation First',
    subtitle: 'Smart Security',
    description: 'Cutting-edge technology meets robust protection'
  }
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    // Remove this line to keep autoplay running after manual navigation
    // setIsAutoPlaying(false);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // Remove this line to keep autoplay running after manual navigation
    // setIsAutoPlaying(false);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (event.key === 'ArrowRight') {
        goToNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(goToNextSlide, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Optional: Add touch swipe support
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      goToPrevSlide();
    } else if (info.offset.x < -100) {
      goToNextSlide();
    }
  };

  // Modify the click handler for indicators
  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
    // Optional: Pause briefly when manually selecting a slide
    setIsAutoPlaying(false);
    // Resume autoplay after a short delay
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={false}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
            style={{ pointerEvents: currentSlide === index ? 'auto' : 'none' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          </motion.div>
        ))}

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl w-full"
          >
            <motion.h2 
              className="text-blue-400 font-medium mb-3 text-sm sm:text-base md:text-lg tracking-wide"
            >
              {slides[currentSlide].subtitle}
            </motion.h2>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-md"
            >
              {slides[currentSlide].description}
            </motion.p>
            <div className="flex flex-col gap-3 w-full sm:w-auto sm:flex-row sm:gap-4">
              <Link
                href="/products"
                className="group flex justify-center items-center gap-2 bg-white text-charcoal px-6 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 text-base w-full sm:w-auto"
              >
                View Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="group flex justify-center items-center gap-2 border-2 border-white text-white px-6 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 text-base w-full sm:w-auto"
              >
                Contact Us
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === index 
                ? 'bg-white w-8 sm:w-10' 
                : 'bg-white/40 w-3 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;



















