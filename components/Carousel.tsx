"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const slides = [
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
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Smoother slide variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      zIndex: 0
    })
  };

  // Reduced threshold for more natural swipe
  const swipeConfidenceThreshold = 5000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { 
              type: "spring", 
              stiffness: 200, // Reduced stiffness
              damping: 25, // Adjusted damping
              duration: 0.6 
            },
            opacity: { 
              duration: 0.4,
              ease: "easeInOut"
            },
            scale: {
              duration: 0.4,
              ease: "easeInOut"
            }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7} // Reduced elasticity
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              setDirection(1);
              setCurrentSlide((prev) => (prev + 1) % slides.length);
            } else if (swipe > swipeConfidenceThreshold) {
              setDirection(-1);
              setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            }
          }}
          className="absolute inset-0"
        >
          {/* Background Image with enhanced overlay */}
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover transform scale-[1.02]"
              priority
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
            {/* Vignette effect */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/40" />
            <div className="absolute inset-0 opacity-20 bg-[url('/pattern.png')] bg-repeat bg-[length:150px_150px] sm:bg-[length:200px_200px]" />
          </motion.div>

          {/* Content with staggered animations */}
          <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl w-full"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-blue-400 font-medium mb-3 text-sm sm:text-base md:text-lg tracking-wide"
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-md"
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col gap-3 w-full sm:w-auto sm:flex-row sm:gap-4"
              >
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
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
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



















