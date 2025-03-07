"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

const MotionDiv = motion.div;

const Carousel: React.FC = () => {


  return (
    <section className="hero-section relative h-screen flex items-center justify-center bg-gradient-to-r from-charcoal to-industrial-blue overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 opacity-60 z-10"></div>
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-40"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-10"></div>
    
    <div className="relative z-20 container mx-auto px-4 text-center">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight opacity-90">
          Securing Boundaries<br /><span className="text-light-gray">Ensuring Safety</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light opacity-90">
          Industry-leading security fencing solutions crafted with precision and innovation
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/brochure"
            className="group opacity-90 inline-flex items-center gap-2 bg-white text-charcoal px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Request Brochure
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="/contact"
            className="group opacity-90 inline-flex items-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-md font-medium hover:bg-white/10 transition-colors duration-300 transform hover:scale-105"
          >
            Contact Us
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </MotionDiv>
    </div>
    
    {/* Scrolling indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <MotionDiv
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <span className="w-0.5 h-8 bg-white/50 rounded-full"></span>
      </MotionDiv>
    </div>
  </section>
  )
}

export default Carousel
