'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Package, Check, ChevronRight, Download, ArrowUpRight, Plus, Minus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Custom styles for hiding scrollbars
const scrollbarHideStyles = `
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

// First, let's organize components into logical categories
const categorizedComponents = {
  "Primary Structure": [
    "A. GATE POST",
    "B. GATE FRAME",
    "C. WICKET GATE FRAME",
    "D. WELD MESH PANEL FOR GATE INFILL",
    "E. COIL SUPPORT FRAME",
  ],
  "Fastening System": [
    "H. TOP AND BOTTOM HINGES",
    "I. LOCK/HANDLE /ALDROP",
  ],
  "Security Enhancement": [
    "F. PTCC – 850 MM DIAMETER/16 LOOPS/3.5MM CORE WIRE",
    "G. FLAT WRAP (PTCC): 610 MM DIAMETER/10 LOOPS/3.50 MM CORE WIRE",
  ],
};

interface Component {
  title: string;
}

interface PartModalProps {
  component: Component | null;
  isOpen: boolean;
  onClose: () => void;
}

// Fix the PartModal component definition to resolve the static flag issue
const PartModal = ({ component, isOpen, onClose }: PartModalProps) => {
  if (!component) return null;
  
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on the body when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function to re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur effect */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal - improved mobile responsiveness */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-20"
            onClick={onClose}
          >
            <div 
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header - improved for mobile */}
              <div className="relative">
                <div className="bg-gradient-to-r from-[#1F75B5] to-[#1F75B5] p-4 sm:p-6">
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <button 
                      onClick={onClose}
                      className="rounded-full p-2 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-white/10 p-2 sm:p-3 rounded-xl">
                      <Package className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                          {component.title.includes("MESH") ? "Primary Structure" : 
                           component.title.includes("CLAMP") ? "Fastening System" :
                           component.title.includes("ARM") || component.title.includes("RAZOR") ? "Security Enhancement" :
                           ""}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-white line-clamp-2 sm:line-clamp-none">
                        {component.title}
                      </h3>
                      <div className="h-0.5 w-12 bg-blue-400/30 mt-1 sm:mt-2"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/5 to-transparent"></div>
              </div>
              
              {/* Content - improved scrolling and spacing for mobile */}
              
              
              {/* Footer - improved for mobile */}
              <div className="border-t border-gray-100 p-3 sm:p-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-3">
                <Button 
                  variant="outline" 
                  onClick={onClose} 
                  className="gap-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 text-gray-700 hover:text-gray-900 transition-all duration-300 cursor-pointer px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg w-full sm:w-auto"
                >
                  <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Close
                </Button>
                <Button 
                  className="bg-[#1F75B5] hover:bg-[#1F75B5] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md cursor-pointer w-full sm:w-auto"
                  onClick={() => {
                    // Close the modal first
                    onClose();
                    // Use window.location to navigate to the contact page
                    window.location.href = "/contact?product=" + encodeURIComponent(component.title);
                  }}
                >
                  Request Quote
                  <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

interface CategorySectionProps {
  title: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
  components: Component[];
}

const CategorySection = ({ title, items, isOpen, onToggle, components }: CategorySectionProps) => (
  <div className={`border border-gray-200 rounded-xl mb-6 bg-white transition-all duration-300 relative ${
    isOpen ? 'shadow-xl ring-2 ring-blue-200/50 transform scale-[1.01]' : 'hover:shadow-md hover:border-blue-200/70'
  }`}>
    <button
      onClick={onToggle}
      className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
    >
      <div className="flex items-center gap-3 sm:gap-5">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300
          ${isOpen 
            ? 'bg-[#1F75B5] text-white shadow-lg shadow-blue-100 scale-110' 
            : 'bg-blue-50 text-[#1F75B5] group-hover:bg-blue-100'}`}>
          {title === "Primary Structure" && <Package className="w-6 h-6 sm:w-7 sm:h-7" />}
          {title === "Fastening System" && <Shield className="w-6 h-6 sm:w-7 sm:h-7" />}
          {title === "Security Enhancement" && <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7" />}
        </div>
        <div>
          <h3 className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
            isOpen ? 'text-[#1a5d90]' : 'text-gray-900'
          }`}>{title}</h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">{items.length} components</p>
        </div>
      </div>
      <div className={`transition-all duration-300 ${isOpen ? 'bg-blue-50 p-2 sm:p-3 rounded-full' : 'p-1.5 sm:p-2'}`}>
        {isOpen ? (
          <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-[#1F75B5]" />
        ) : (
          <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#1F75B5]" />
        )}
      </div>
    </button>
    
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key={`${title}-content`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
              opacity: { duration: 0.2 }
            }}
          >
            <div className="px-4 sm:px-6 pb-6 sm:pb-8 pt-2">
              <div className="h-px w-full bg-gradient-to-r from-blue-100 via-gray-200 to-blue-100 my-4 sm:my-5"></div>
              <div className="space-y-4 sm:space-y-6">
                {components.filter(comp => items.includes(comp.title)).map((component, idx) => (
                  <motion.div 
                    key={`${title}-${component.title}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group relative border border-blue-100"
                  >
                    <div className="border-l-[6px] border-[#1F75B5] pl-3 sm:pl-5 py-3 sm:py-4 bg-gradient-to-r from-blue-50 to-white flex items-center">
                      <h4 className="text-[#1a5d90] font-bold text-sm sm:text-lg line-clamp-1">{component.title}</h4>
                      <div className="ml-auto mr-3 sm:mr-4 flex items-center gap-1 text-[#1F75B5]">
                        <span className="text-[10px] sm:text-xs font-medium">Details</span>
                        <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </div>
                    </div>
                    
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
);

export default function BorderFencePage() {
  const [openCategory, setOpenCategory] = useState<string>('');
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleCategory = (category: string) => {
    // Prevent toggling during animation
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // If the same category is clicked, close it
    if (openCategory === category) {
      setOpenCategory('');
    } else {
      // If a different category is clicked, open it and close the previous one
      setOpenCategory(category);
    }
    
    // Reset animation lock after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 400); // Match this with the animation duration
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const components = [
    {
      title: "A. GATE POST"
    },
    {
      title: "B. GATE FRAME"
    },
    {
      title: "C. WICKET GATE FRAME"
    },
    {
      title: "D. WELD MESH PANEL FOR GATE INFILL"
    },
    {
      title: "E. COIL SUPPORT FRAME"
    },
    {
      title: "F. PTCC – 850 MM DIAMETER/16 LOOPS/3.5MM CORE WIRE"
    },
    {
      title: "H. TOP AND BOTTOM HINGES"
    },
    {
      title: "I. LOCK/HANDLE /ALDROP"
    },
    {
      title: "G. FLAT WRAP (PTCC): 610 MM DIAMETER/10 LOOPS/3.50 MM CORE WIRE"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Apply scrollbar hide styles */}
      <style jsx global>{scrollbarHideStyles}</style>
      
      {/* Add smooth scroll behavior */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      {/* Hero Section - improved for mobile */}
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-[#1F75B5]">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          {/* Improved pattern overlay with better opacity and scaling */}
          <div className="absolute inset-0 opacity-15 bg-[url('/pattern.png')] bg-repeat bg-[length:200px_200px] sm:bg-[length:300px_300px] z-20"></div>
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 h-40 sm:h-64 w-40 sm:w-64 rounded-full bg-blue-400/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 h-48 sm:h-80 w-48 sm:w-80 rounded-full bg-purple-400/10 blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-30">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm text-blue-100 rounded-full text-xs sm:text-sm font-medium">
                  Next-Generation Security
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-8 leading-tight tracking-tight">
                Fence Swing Gate
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 px-2">
                Advanced perimeter protection combining cutting-edge materials with smart technology for uncompromised security in the most challenging environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button className="bg-white text-[#1a5d90] hover:bg-blue-50 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 font-medium">
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Download Specifications
                </Button>
                <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl transition-all duration-300">
                  Request Consultation
                  <ChevronRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-20 bg-gradient-to-b from-transparent to-white/5 z-30"></div>
      </section>

      {/* Stats Section - improved for mobile */}
      <section className="py-10 sm:py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {[
                { value: "99.8%", label: "Security Rating" },
                { value: "25+ Years", label: "Durability" },
                { value: "1,200 km", label: "Deployed" },
                { value: "ISO 9001", label: "Certified" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#1a5d90] mb-1 sm:mb-2">{stat.value}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Components Section - improved for mobile */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-50/60 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-[0.015]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-16">
            <span className="bg-blue-50 text-[#1F75B5] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 inline-block shadow-sm">
              System Components
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Advanced Security Elements
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto px-2">
              Each component is engineered to the highest standards, ensuring maximum security 
              and seamless integration within the complete system.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {Object.entries(categorizedComponents).map(([category, items]) => (
              <CategorySection
                key={category}
                title={category}
                items={items}
                isOpen={openCategory === category}
                onToggle={() => toggleCategory(category)}
                components={components}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Part Detail Modal */}
      <PartModal 
        component={selectedComponent}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Technical Specifications Section - improved for mobile */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="bg-blue-50 text-[#1F75B5] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 inline-block">
                  Military-Grade Protection
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Technical Excellence in Every Detail
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Our border fence system meets and exceeds international security standards, 
                  providing a robust defense against various threat scenarios while withstanding 
                  the harshest environmental conditions.
                </p>
                <div className="space-y-3 sm:space-y-5">
                  {[
                    "Advanced anti-corrosion treatment for extended lifespan in extreme conditions",
                    "Modular design for rapid deployment and efficient maintenance",
                    "Seamless integration with existing security infrastructure",
                    "Weather-resistant in temperatures from -40°C to +70°C",
                    "Compliance with ISO 9001, ISO 14001, and BSI standards"
                  ].map((feature, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 sm:gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Check size={16} className="text-[#1F75B5] h-3 w-3 sm:h-4 sm:w-4" />
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <Button className="mt-6 sm:mt-10 bg-[#1F75B5] hover:bg-[#1F75B5] text-white px-5 sm:px-8 py-3 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
                  View Complete Specifications
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative mt-8 lg:mt-0"
              >
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Replace with actual technical diagram */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1F75B5] to-[#1F75B5]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shield size={80} className="text-white/20 sm:h-[140px] sm:w-[140px]" />
                    </div>
                    
                    {/* Grid overlay for technical feel */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:15px_15px] sm:bg-[size:20px_20px]"></div>
                    
                    {/* Technical diagram elements (simplified) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 relative">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/20"></div>
                        <div className="absolute top-0 bottom-0 left-1/4 w-1 bg-white/20"></div>
                        <div className="absolute top-0 bottom-0 right-1/4 w-1 bg-white/20"></div>
                        <div className="absolute top-1/4 left-0 right-0 h-1 bg-white/10"></div>
                        <div className="absolute top-3/4 left-0 right-0 h-1 bg-white/10"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Certification badges */}
                <div className="absolute -right-4 -bottom-4 sm:-right-6 sm:-bottom-6 bg-white rounded-xl shadow-lg p-3 sm:p-4 flex gap-2 sm:gap-3">
                  {[1, 2, 3].map((badge) => (
                    <div key={badge} className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gray-100 flex items-center justify-center">
                      <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Shield size={14} className="text-[#1F75B5] sm:h-5 sm:w-5" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section - improved for mobile */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1a5d90] to-[#1F75B5] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3)_0%,transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Ready to Secure Your Perimeter?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-10 max-w-2xl mx-auto">
                Connect with our security experts to design a custom border fence solution that meets your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button className="bg-white text-[#1a5d90] hover:bg-blue-50 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Request a Consultation
                </Button>
                <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl transition-all duration-300">
                  Download Brochure
                  <Download className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}