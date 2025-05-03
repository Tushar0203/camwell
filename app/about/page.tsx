'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Zap } from 'lucide-react';
import { FaBullseye, FaCheckCircle, FaClock, FaUsers } from 'react-icons/fa';

const containerVariants = {
  hidden: { 
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    y: 20, 
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    }
  }
};

export default function AboutPage() {
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
      {/* Enhanced Hero Section with image background instead of blue color */}
      <section className="relative py-32 overflow-hidden">
        {/* Image background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/fence-2.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Animated security mesh pattern */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0" 
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.25'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            }}
          />
        </div>
        
        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            >
              <span className="text-blue-100">Welcome to Our Story</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
            >
              About <span className="text-blue-200 decoration-blue-400/30 decoration-4 underline-offset-8">Camwell</span> Industries
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="flex justify-center mb-6"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-300"></div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-blue-50 max-w-3xl mx-auto mb-12 opacity-90"
              style={{lineHeight: "1.6"}}
            >
            Leading provider of high-quality security fencing solutions in India, committed to excellence and innovation.
            </motion.p>
            
            {/* Trust indicators */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center gap-8 mt-16 opacity-85"
            >
              <div className="flex items-center text-blue-100 gap-2">
                <ShieldCheck size={18} />
                <span className="text-sm font-medium">Certified Quality</span>
              </div>
              <div className="flex items-center text-blue-100 gap-2">
                <Truck size={18} />
                <span className="text-sm font-medium">Nationwide Delivery</span>
              </div>
              <div className="flex items-center text-blue-100 gap-2">
                <Zap size={18} />
                <span className="text-sm font-medium">Expert Installation</span>
              </div>
            </motion.div>
          </motion.div>
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
              <div className="absolute -top-10 -left-5 w-20 h-20 bg-[#1576ae] rounded-full flex items-center justify-center z-10">
                <span className="text-white text-4xl font-bold">01</span>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-12 border-l-4 border-[#1576ae] hover:shadow-[0_20px_50px_rgba(8,112,184,0.2)] transition-all duration-500">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <div className="w-16 h-1 bg-[#1576ae] mb-8"></div>
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
              <div className="absolute -top-10 -left-5 w-20 h-20 bg-[#1576ae] rounded-full flex items-center justify-center">
                <span className="text-white text-4xl font-bold">02</span>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-12 border-l-4 border-[#1576ae] hover:shadow-[0_20px_50px_rgba(79,70,229,0.2)] transition-all duration-500">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
                <div className="w-16 h-1 bg-[#1576ae] mb-8"></div>
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
            <span className="px-4 py-1 bg-[#1576ae] rounded-full text-white text-sm font-medium tracking-wider uppercase mb-6 inline-block">
              What Drives Us
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#1576ae] mx-auto mb-10"></div>
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
              <div className="bg-white rounded-2xl p-10 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 border-b-4 border-[#1576ae] h-full flex flex-col">
                <div className="bg-gradient-to-br from-[#1576ae] to-[#1576ae] rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8 transform group-hover:scale-110 transition-transform duration-500">
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
              <div className="bg-white rounded-2xl p-10 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 border-b-4 border-[#1576ae] h-full flex flex-col">
                <div className="bg-gradient-to-br from-[#1576ae] to-[#1576ae] rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8 transform group-hover:scale-110 transition-transform duration-500">
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
            <span className="px-4 py-1 bg-[#1576ae] rounded-full text-white text-sm font-medium tracking-wider uppercase mb-6 inline-block">
              Our Story
            </span>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">Our Journey</h2>
            <div className="w-20 h-1 bg-[#1576ae] mx-auto mb-10"></div>
            <p className="text-gray-700 leading-relaxed mb-12 text-lg">
              Since our establishment, Camwell Industries has been at the forefront of security fencing innovation in India. 
              We&apos;ve grown from a small local provider to one of the most trusted names in high-security fencing solutions, 
              serving government, defense, and commercial clients across the country.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
