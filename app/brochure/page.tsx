"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from 'framer-motion';
import { Check, ChevronRight, Download, FileText, Send, Wrench } from 'lucide-react';
import React, { useState } from 'react';

const Brochure = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      
      <section className="relative min-h-[80vh] flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F75B5] to-[#1F75B5]"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            >
              <span className="text-blue-100">Get Everything You Need to Know</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
            >
              Your Complete <span className="text-blue-200 decoration-blue-400/30 decoration-4 underline-offset-8">Product Guide</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
            >
              Get our detailed product catalog with specifications, pricing, and installation guidelines delivered straight to your inbox.
            </motion.p>
            
          </motion.div>
        </div>
        
      </section>

      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:40px_40px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[#1F75B5] bg-blue-50 rounded-full">
              Comprehensive Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              <span className="relative inline-block">
                Why Request Our 
                <span className="relative ml-2">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#2B4162] to-[#1F75B5]">
                    Brochure?
                  </span>
                  <motion.span 
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-100 to-blue-100"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Discover everything you need to know about our premium industrial fencing solutions in one comprehensive guide.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Comprehensive Details",
                description: "Get full specifications, dimensions, and material options for all our products.",
                icon: <FileText className="w-8 h-8 text-white" />,
                gradient: "from-blue-500 via-blue-600 to-indigo-600",
                delay: 0,
              },
              {
                title: "Visual Showcase",
                description: "See high-quality images of our products installed in various environments.",
                icon: <FileText className="w-8 h-8 text-white" />,
                gradient: "from-emerald-500 via-emerald-600 to-teal-600",
                delay: 0.2,
              },
              {
                title: "Installation Guidelines",
                description: "Access easy-to-follow installation instructions and maintenance tips.",
                icon: <Wrench className="w-8 h-8 text-white" />,
                gradient: "from-orange-500 via-orange-600 to-amber-600",
                delay: 0.4,
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: benefit.delay, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full relative group overflow-hidden bg-white/80 backdrop-blur-sm border-none rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
                  
                  <CardContent className="p-8 h-full">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div 
                        className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-0.5 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        <div className="absolute inset-0 rounded-2xl opacity-75 blur-sm bg-gradient-to-br" />
                        <div className="relative h-full w-full rounded-2xl flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur">
                          {benefit.icon}
                        </div>
                      </div>
                      
                      <div className="space-y-3 relative z-10">
                        <h3 className={`text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300`}>
                          {benefit.title}
                        </h3>
                        
                        <p className="text-gray-600 group-hover:text-gray-800 leading-relaxed transition-colors duration-300">
                          {benefit.description}
                        </p>
                      </div>
                      
                      <motion.div 
                        className="mt-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          variant="ghost"
                          className={`text-sm font-medium text-gray-700 group/btn flex items-center gap-1 hover:text-gray-900 hover:bg-gray-100/50`}
                        >
                          Learn more
                          <ChevronRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      <section id="brochure-form" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white relative">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass-card shadow-2xl overflow-hidden rounded-2xl sm:rounded-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side - Info section */}
              <div className="bg-gradient-to-br from-[#1a5d90] to-[#1F75B5] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%">
                    <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                      <circle id="pattern-circle" cx="10" cy="10" r="2" fill="currentColor"></circle>
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
                  </svg>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Product Brochure</h2>
                  <p className="mb-6 sm:mb-8 text-blue-100 leading-relaxed text-sm sm:text-base">
                    Complete the form to receive our comprehensive product brochure with detailed specifications and pricing information.
                  </p>
                  
                  <ul className="space-y-4 sm:space-y-6">
                    {[
                      "Complete product specifications and dimensions",
                      "Material options and customization details",
                      "Installation guidelines and maintenance tips",
                      "Case studies and customer testimonials"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <span className="inline-flex items-center justify-center bg-blue-500/30 backdrop-blur-sm border border-blue-300/30 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-3 flex-shrink-0">
                          <Check size={14} className="sm:hidden" />
                          <Check size={16} className="hidden sm:block" />
                        </span>
                        <p className="text-blue-50 text-sm sm:text-base">{item}</p>
                      </motion.li>
                    ))}
                  </ul>
                  
                </motion.div>
              </div>
              
              {/* Right side - Form section */}
              <div className="p-6 sm:p-8 md:p-10 bg-white relative overflow-hidden">
                {/* ... Pattern background remains the same ... */}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-charcoal mb-4 sm:mb-6">Fill in your details</h3>
                  
                  {submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="h-full flex flex-col items-center justify-center text-center py-6 sm:py-10"
                    >
                      <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1
                        }}
                        className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6"
                      >
                        <Check size={40} className="text-green-600" />
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <h4 className="text-2xl font-bold text-charcoal mb-2">Thank You!</h4>
                        <p className="text-gray-600 mb-6">
                          Your brochure request has been received. We&apos;ll send it to your email shortly.
                        </p>
                        <Button 
                          onClick={() => setSubmitted(false)}
                          variant="outline"
                          className="mt-4"
                        >
                          Submit Another Request
                        </Button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="fullName" className="text-gray-700 text-sm sm:text-base">Full Name</Label>
                          <Input
                            type="text"
                            id="fullName"
                            placeholder="John Doe"
                            required
                            className="border-gray-300 focus:border-blue-700 text-sm sm:text-base h-10 sm:h-11"
                          />
                        </div>
                        
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="email" className="text-gray-700 text-sm sm:text-base">Email Address</Label>
                          <Input
                            type="email"
                            id="email"
                            placeholder="johndoe@example.com"
                            required
                            className="border-gray-300 focus:border-blue-700 text-sm sm:text-base h-10 sm:h-11"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="phone" className="text-gray-700 text-sm sm:text-base">Phone Number</Label>
                          <Input
                            type="tel"
                            id="phone"
                            placeholder="+91 98765 43210"
                            className="border-gray-300 focus:border-blue-700 text-sm sm:text-base h-10 sm:h-11"
                          />
                        </div>
                        
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="company" className="text-gray-700 text-sm sm:text-base">Company Name</Label>
                          <Input
                            type="text"
                            id="company"
                            placeholder="ABC Corporation"
                            className="border-gray-300 focus:border-blue-700 text-sm sm:text-base h-10 sm:h-11"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="interest" className="text-gray-700 text-sm sm:text-base">Products of Interest</Label>
                        <select
                          id="interest"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        >
                          <option value="">Select Product</option>
                          <option value="weld-mesh">Weld Mesh Panels</option>
                          <option value="fence-posts">Fence Posts</option>
                          <option value="swing-gates">Swing Gates</option>
                          <option value="sliding-gates">Sliding Gates</option>
                          <option value="security-spikes">Security Spikes</option>
                          <option value="razor-wire">Razor Wire</option>
                          <option value="all">All Products</option>
                        </select>
                      </div>
                      
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="message" className="text-gray-700 text-sm sm:text-base">Additional Requirements (Optional)</Label>
                        <textarea
                          id="message"
                          rows={3}
                          maxLength={500}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all duration-200 text-sm sm:text-base resize-none"
                          placeholder="Tell us about any specific information you're looking for..."
                        ></textarea>
                      </div>
                      
                      <div className="pt-2 sm:pt-4">
                        <Button
                          type="submit"
                          className="w-full text-white bg-gradient-to-r from-[#1F75B5] to-[#1F75B5] hover:from-[#1a5d90] hover:to-[#1a5d90] transition-all duration-300 h-10 sm:h-12 text-base sm:text-lg shadow-lg shadow-blue-700/20 cursor-pointer"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Processing...
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              Request Brochure
                              <Send size={16} className="sm:hidden" />
                              <Send size={18} className="hidden sm:block" />
                            </div>
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:30px_30px]"></div>
        
        {/* Add floating shapes in background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        </div>

        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      
      <style>
        {`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(15px);
          }
          50% {
            transform: translateY(5px) translateX(-5px);
          }
          75% {
            transform: translateY(10px) translateX(10px);
          }
        }
        `}
      </style>
    </div>
  );
};

export default Brochure;
