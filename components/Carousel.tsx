"use client"
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Locale } from '@/lib/dictionary';

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
}

interface CarouselDictionary {
  slides: SlideData[];
}

const slideImages = [
  '/images/fence-swing-gates.jpg',
  '/images/fence-2.jpg',
  '/images/fence-3.jpg',
  '/images/fence-4.JPG',
  '/images/fence-5.JPG',
  '/images/fence-6.JPG'
];

// Default dictionary values to use as fallback
const defaultDictionary: CarouselDictionary = {
  slides: [
    {
      title: 'Advanced Security',
      subtitle: 'Fortifying Boundaries',
      description: 'State-of-the-art fencing solutions for maximum security'
    },
    {
      title: 'Military Grade',
      subtitle: 'Defense Solutions',
      description: 'Trusted by defense organizations across India'
    },
    {
      title: 'Innovation First',
      subtitle: 'Smart Security',
      description: 'Cutting-edge technology meets robust protection'
    },
    {
      title: 'High Durability',
      subtitle: 'Built to Last',
      description: 'Engineered to withstand extreme weather and terrain conditions'
    },
    {
      title: 'Perimeter Protection',
      subtitle: 'Total Area Coverage',
      description: 'Comprehensive fencing systems for borders, industries, and infrastructure'
    },
    {
      title: 'Rapid Deployment',
      subtitle: 'Quick & Reliable',
      description: 'Efficient installation with minimal maintenance requirements'
    }
  ]
};

const Carousel = ({ dictionary }: { dictionary?: CarouselDictionary }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Get language for RTL detection
  const params = useParams();
  const lang = params?.lang as Locale || 'en';
  const isRTL = lang === 'ar';
  
  // Choose appropriate arrows based on direction
  const PrevArrow = isRTL ? ArrowRight : ArrowLeft;
  const NextArrow = isRTL ? ArrowLeft : ArrowRight;

  // Use provided dictionary or fallback to default
  const dict = dictionary || defaultDictionary;

  // Combine dictionary slides with images
  const slides = dict.slides.map((slide, index) => ({
    ...slide,
    id: index + 1,
    image: slideImages[index % slideImages.length]
  }));

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
  }, [isAutoPlaying, goToNextSlide]);

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
    <div className="bg-white h-screen sm:min-h-[85vh] w-full overflow-hidden">
      {/* Mobile: Full screen, Desktop: Normal layout with margins */}
      <div className="h-full sm:mt-14 md:mt-16 sm:pb-4 md:pb-12 lg:pb-24 sm:h-auto">
        {/* Carousel - full width edge-to-edge */}
        <div className="relative w-full h-full sm:h-auto">
          {/* Current slide */}
          <div className="relative overflow-hidden h-full sm:h-auto">
            {/* Full viewport height on mobile, aspect ratio on larger screens */}
            <div className="h-full sm:aspect-[16/9] md:aspect-[21/9] w-full relative">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 1200px"
              />
              {/* Improved gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => handleArrowClick('prev')}
              className={`absolute ${isRTL ? 'right-2 sm:right-4' : 'left-2 sm:left-4'} top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 focus:outline-none z-10 cursor-pointer`}
              aria-label="Previous slide"
            >
              <PrevArrow className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            
            <button 
              onClick={() => handleArrowClick('next')}
              className={`absolute ${isRTL ? 'left-2 sm:left-4' : 'right-2 sm:right-4'} top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 focus:outline-none z-10 cursor-pointer`}
              aria-label="Next slide"
            >
              <NextArrow className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            
            {/* Content Overlay - Positioned at bottom with safe spacing */}
            <div className="absolute bottom-0 left-0 right-0 p-4 xs:p-5 sm:p-6 md:p-10">
              <div className="max-w-xl">
                <h3 className={`inline-block text-[#00a0dc] text-xs sm:text-sm md:text-base font-medium tracking-wide mb-2 xs:mb-3 sm:mb-4 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded drop-shadow-[0_2px_2px_rgba(0,0,0,1)] ${isRTL ? 'border-r-2' : 'border-l-2'} border-[#00a0dc]`}>
                  {slides[currentSlide].subtitle}
                </h3>
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-300 mb-3 xs:mb-4 sm:mb-5 leading-relaxed max-w-md drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  {slides[currentSlide].description}
                </p>
                
                {/* Mobile indicators - positioned within content area */}
                <div className="flex sm:hidden justify-start mt-4 gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleIndicatorClick(index)}
                      className={`w-6 h-1 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === index ? 'bg-[#00a0dc]' : 'bg-gray-600/70 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop Indicators - only show on sm and up */}
          <div className="hidden sm:flex justify-center mt-3 xs:mt-4 sm:mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`w-6 xs:w-7 sm:w-8 h-1 mx-0.5 sm:mx-1 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index ? 'bg-[#00a0dc]' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Thumbnails for larger screens */}
          <div className={`hidden md:flex justify-center mt-6 gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                  currentSlide === index ? 'ring-2 ring-[#00a0dc]' : 'opacity-70 hover:opacity-100'
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
