"use client"
import { ArrowRight } from 'lucide-react';
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
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
            
            <div className="absolute bottom-0 left-0 right-0 p-4 xs:p-5 sm:p-6 md:p-10">
              <div className="max-w-xl">
                <h3 className="inline-block text-blue-400 text-xs sm:text-sm font-medium tracking-wide mb-3 xs:mb-4 sm:mb-5 px-2 py-0.5 bg-black/30 backdrop-blur-sm rounded drop-shadow-[0_2px_2px_rgba(0,0,0,1)] border-l-2 border-blue-500 -mt-6 sm:-mt-8 md:-mt-10">
                  {slides[currentSlide].subtitle}
                </h3>
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 xs:mb-3 sm:mb-3 leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-gray-300 text-sm md:text-base mb-3 xs:mb-4 sm:mb-6 leading-relaxed max-w-md line-clamp-2 xs:line-clamp-3 sm:line-clamp-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  {slides[currentSlide].description}
                </p>
                <div className="flex flex-wrap gap-2 xs:gap-3">
                  <Link
                    href="/products"
                    className="group flex items-center gap-1 sm:gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 xs:px-5 xs:py-2.5 sm:px-5 sm:py-2.5 rounded-md font-medium transition-all duration-300 text-sm"
                  >
                    View Products
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Indicators - more compact on mobile */}
          <div className="flex justify-center mt-3 xs:mt-4 sm:mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`w-6 xs:w-7 sm:w-8 h-1 mx-0.5 sm:mx-1 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-blue-500' : 'bg-gray-600'
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
                className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  currentSlide === index ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'
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
