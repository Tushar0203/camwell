"use client"
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
    image: '/images/fence-swing-gates.jpg',
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

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(goToNextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleArrowClick = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      goToPrevSlide();
    } else {
      goToNextSlide();
    }
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="bg-[#0f172a] min-h-[85vh] md:min-h-screen">
      <div className="container mx-auto px-3 pt-20 pb-4 md:pt-16 md:pb-12 lg:py-24">
        {/* Carousel - optimized for mobile */}
        <div className="relative mx-auto max-w-full sm:mx-0">
          {/* Current slide */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl border border-gray-700">
            {/* Taller aspect ratio for mobile */}
            <div className="aspect-[2/3] xs:aspect-[3/4] sm:aspect-[16/9] md:aspect-[21/9] w-full relative">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 1200px"
              />
              {/* Improved gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-[#0f172a]/10"></div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => handleArrowClick('prev')}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 focus:outline-none z-10 cursor-pointer"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            
            <button 
              onClick={() => handleArrowClick('next')}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 focus:outline-none z-10 cursor-pointer"
              aria-label="Next slide"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 xs:p-5 sm:p-6 md:p-10">
              <div className="max-w-xl">
                <h3 className="inline-block text-[#1576ae] text-xs sm:text-sm md:text-base font-medium tracking-wide mb-2 xs:mb-3 sm:mb-4 px-2 py-0.5 bg-black backdrop-blur-sm rounded drop-shadow-[0_2px_2px_rgba(0,0,0,1)] border-l-2 border-[#1576ae] -mt-6 sm:-mt-8 md:-mt-10">
                  {slides[currentSlide].subtitle}
                </h3>
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 mb-3 xs:mb-4 sm:mb-5 leading-relaxed max-w-md line-clamp-2 xs:line-clamp-3 sm:line-clamp-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Indicators - more compact on mobile */}
          <div className="flex justify-center mt-3 xs:mt-4 sm:mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`w-6 xs:w-7 sm:w-8 h-1 mx-0.5 sm:mx-1 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index ? 'bg-[#1576ae]' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Thumbnails for larger screens - unchanged */}
          <div className="hidden md:flex justify-center mt-6 gap-4">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                  currentSlide === index ? 'ring-2 ring-[#1576ae]' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
