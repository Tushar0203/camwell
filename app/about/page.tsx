'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaBullseye, FaClock } from 'react-icons/fa';

// Define types for bubble properties
interface BubblePosition {
  x: number;
  y: number;
  xMovement: number;
}

interface BubbleProps {
  size: number;
  position: BubblePosition;
  delay: number;
  duration: number;
  color: string;
}

interface BubbleData extends BubbleProps {
  id: number;
}

// Bubble component for animated background bubbles
const Bubble: React.FC<BubbleProps> = ({ size, position, delay, duration, color }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} opacity-30 backdrop-blur-sm shadow-lg`}
      style={{
        width: size,
        height: size,
        left: `${position.x}%`,
        top: `${position.y}%`,
        boxShadow: `0 0 ${size/5}px ${size/10}px rgba(147, 197, 253, 0.3)`,
        filter: 'blur(0.5px)'
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={{ 
        y: -100, 
        opacity: [0, 0.5, 0.2, 0],
        x: position.xMovement,
        scale: [1, 1.1, 0.9, 1]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );
};

// Pulsing bubble for additional visual effect
const PulsingBubble: React.FC<{ size: number; position: { x: number; y: number; }; color: string; }> = 
  ({ size, position, color }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} opacity-10`}
      style={{
        width: size,
        height: size,
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export default function AboutPage() {
  const [bubbles, setBubbles] = useState<BubbleData[]>([]);
  const [pulsingBubbles, setPulsingBubbles] = useState<Array<{
    id: number;
    size: number;
    position: { x: number; y: number; };
    color: string;
  }>>([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  useEffect(() => {
    // Check if screen is small
    const checkScreenSize = () => {
      const smallScreen = window.innerWidth < 768;
      setIsSmallScreen(smallScreen);
    };
    
    // Initial check
    checkScreenSize();
    
    // Generate random bubbles
    const generateBubbles = () => {
      const newBubbles: BubbleData[] = [];
      const colors = [
        'bg-[#1F75B5]', 'bg-[#1F75B5]', 'bg-[#1F75B5]', 
        'bg-[#1F75B5]', 'bg-sky-300', 'bg-[#1F75B5]',
        'bg-purple-300', 'bg-cyan-300'
      ];
      
      // Don't generate bubbles for small screens
      if (window.innerWidth < 768) {
        setBubbles([]);
        return;
      }
      
      // Create a variety of bubble sizes
      const smallBubbles = 10;
      const mediumBubbles = 8;
      const largeBubbles = 5;
      
      // Small bubbles (faster)
      for (let i = 0; i < smallBubbles; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 30 + 10, // 10-40px
          position: {
            x: Math.random() * 100,
            y: Math.random() * 100 + 50,
            xMovement: (Math.random() - 0.5) * 60
          },
          delay: Math.random() * 8,
          duration: Math.random() * 5 + 10, // 10-15s (faster)
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      // Medium bubbles
      for (let i = 0; i < mediumBubbles; i++) {
        newBubbles.push({
          id: smallBubbles + i,
          size: Math.random() * 40 + 40, // 40-80px
          position: {
            x: Math.random() * 100,
            y: Math.random() * 100 + 50,
            xMovement: (Math.random() - 0.5) * 80
          },
          delay: Math.random() * 10,
          duration: Math.random() * 8 + 15, // 15-23s (medium)
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      // Large bubbles (slower)
      for (let i = 0; i < largeBubbles; i++) {
        newBubbles.push({
          id: smallBubbles + mediumBubbles + i,
          size: Math.random() * 60 + 80, // 80-140px
          position: {
            x: Math.random() * 100,
            y: Math.random() * 100 + 50,
            xMovement: (Math.random() - 0.5) * 40
          },
          delay: Math.random() * 12,
          duration: Math.random() * 10 + 20, // 20-30s (slower)
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      setBubbles(newBubbles);
    };
    
    // Generate pulsing background bubbles
    const generatePulsingBubbles = () => {
      // Don't generate pulsing bubbles for small screens
      if (window.innerWidth < 768) {
        setPulsingBubbles([]);
        return;
      }
      
      const newPulsingBubbles = [];
      const colors = [
        'bg-[#1F75B5]', 'bg-[#1F75B5]', 'bg-sky-400', 'bg-purple-400'
      ];
      
      for (let i = 0; i < 6; i++) {
        newPulsingBubbles.push({
          id: i,
          size: Math.random() * 200 + 100, // 100-300px (large background bubbles)
          position: {
            x: Math.random() * 100,
            y: Math.random() * 80,
          },
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      setPulsingBubbles(newPulsingBubbles);
    };
    
    generateBubbles();
    generatePulsingBubbles();
    
    // Add resize listener to update bubbles when screen size changes
    const handleResize = () => {
      checkScreenSize();
      generateBubbles();
      generatePulsingBubbles();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Hero Section - Premium Design */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F75B5] via-[#1F75B5] to-[#1F75B5] z-0">
          <div className="absolute inset-0 bg-[#1F75B5] bg-[#1F75B5] opacity-40"></div>
        </div>
        
        {/* Pulsing Background Bubbles - Only show on larger screens */}
        {!isSmallScreen && (
          <div className="absolute inset-0 overflow-hidden">
            {pulsingBubbles.map((bubble) => (
              <PulsingBubble
                key={`pulse-${bubble.id}`}
                size={bubble.size}
                position={bubble.position}
                color={bubble.color}
              />
            ))}
          </div>
        )}
        
        {/* Animated Bubbles - Only show on larger screens */}
        {!isSmallScreen && (
          <div className="absolute inset-0 overflow-hidden z-[1]">
            {bubbles.map((bubble) => (
              <Bubble
                key={`bubble-${bubble.id}`}
                size={bubble.size}
                position={bubble.position}
                delay={bubble.delay}
                duration={bubble.duration}
                color={bubble.color}
              />
            ))}
          </div>
        )}
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#1F75B5]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#1F75B5]/10 to-transparent"></div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 inline-block"
            >
              <span className="px-4 py-1 bg-[#1F75B5]/20 backdrop-blur-sm rounded-full text-white text-sm font-medium tracking-wider uppercase">
                About Us
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              About <span className="text-blue-300">Camwell</span> Industries
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-1 bg-[#1F75B5] mx-auto mb-10"
            ></motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto"
            >
              Leading provider of high-quality security fencing solutions in India, 
              committed to excellence and innovation.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white fill-current">
            <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Mission & Vision Section - Premium Design */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#1F75B5] rounded-full flex items-center justify-center z-10">
                <span className="text-white text-4xl font-bold">01</span>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-12 border-l-4 border-[#1F75B5] hover:shadow-[0_20px_50px_rgba(8,112,184,0.2)] transition-all duration-500">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <div className="w-16 h-1 bg-[#1F75B5] mb-8"></div>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  To provide innovative, high-quality security fencing solutions that enhance safety and
                  security for our customers while delivering exceptional value and service.
                </p>
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-50 rounded-full opacity-70"></div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#1F75B5] rounded-full flex items-center justify-center z-10">
                <span className="text-white text-4xl font-bold">02</span>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-12 border-l-4 border-[#1F75B5] hover:shadow-[0_20px_50px_rgba(79,70,229,0.2)] transition-all duration-500">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
                <div className="w-16 h-1 bg-[#1F75B5] mb-8"></div>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  To be the most trusted and preferred provider of security fencing solutions in India,
                  recognized for our commitment to quality, innovation, and customer satisfaction.
                </p>
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-indigo-50 rounded-full opacity-70"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Premium Design */}
      <section className="py-32 px-6 relative bg-gray-50">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <span className="px-4 py-1 bg-[#1F75B5] rounded-full text-white text-sm font-medium tracking-wider uppercase mb-6 inline-block">
              What Drives Us
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#1F75B5] mx-auto mb-10"></div>
            <p className="text-gray-700 text-xl max-w-3xl mx-auto">
              These principles guide everything we do at Camwell Industries.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {/* Quality */}
            <motion.div 
              variants={fadeIn}
              className="group"
            >
              <div className="bg-white rounded-2xl p-10 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 border-b-4 border-[#1F75B5] h-full flex flex-col">
                <div className="bg-gradient-to-br from-[#1F75B5] to-[#1F75B5] rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  <FaCheckCircle className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Quality</h3>
                <p className="text-gray-600 text-center flex-grow">
                  We never compromise on the quality of our materials and craftsmanship, ensuring every product meets our rigorous standards.
                </p>
              </div>
            </motion.div>

            {/* Customer Focus */}
            <motion.div 
              variants={fadeIn}
              className="group"
            >
              <div className="bg-white rounded-2xl p-10 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 border-b-4 border-[#1F75B5] h-full flex flex-col">
                <div className="bg-gradient-to-br from-[#1F75B5] to-[#1F75B5] rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  <FaUsers className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Customer Focus</h3>
                <p className="text-gray-600 text-center flex-grow">
                  Our customers&apos; needs and satisfaction are at the core of everything we do, driving our decisions and innovations.
                </p>
              </div>
            </motion.div>

            {/* Innovation */}
            <motion.div 
              variants={fadeIn}
              className="group"
            >
              <div className="bg-white rounded-2xl p-10 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 border-b-4 border-purple-600 h-full flex flex-col">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  <FaBullseye className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Innovation</h3>
                <p className="text-gray-600 text-center flex-grow">
                  We continuously strive to improve our products and processes, embracing new technologies and methodologies.
                </p>
              </div>
            </motion.div>

            {/* Reliability */}
            <motion.div 
              variants={fadeIn}
              className="group"
            >
              <div className="bg-white rounded-2xl p-10 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 border-b-4 border-sky-600 h-full flex flex-col">
                <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  <FaClock className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Reliability</h3>
                <p className="text-gray-600 text-center flex-grow">
                  We deliver on our promises, every time, with products that stand the test of time and exceed expectations.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company History Section - Premium Design */}
      <section className="py-32 px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-70 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full opacity-70 -ml-32 -mb-32"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="px-4 py-1 bg-[#1F75B5] rounded-full text-white text-sm font-medium tracking-wider uppercase mb-6 inline-block">
              Our Story
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">Our Journey</h2>
            <div className="w-20 h-1 bg-[#1F75B5] mx-auto mb-10"></div>
            <p className="text-gray-700 leading-relaxed mb-12 text-lg">
              Since our establishment, Camwell Industries has been at the forefront of security fencing innovation in India. 
              We&apos;ve grown from a small local provider to one of the most trusted names in high-security fencing solutions, 
              serving government, defense, and commercial clients across the country.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block"
            >
              <button className="relative overflow-hidden group bg-gradient-to-r from-[#1F75B5] to-[#1F75B5] text-white font-semibold py-5 px-10 rounded-lg shadow-lg">
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#1F75B5] to-[#1F75B5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center">
                  Learn More About Our History
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
