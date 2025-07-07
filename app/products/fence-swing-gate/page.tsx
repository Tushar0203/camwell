'use client';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Download,
  Package,
  Shield,
  X
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

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

// Import the component data from the external file
import { componentSpecifications, fenceSwingGatesComponents } from '@/data/fenceSwingGatesComponents';

// Import the new styled table component
import SpecificationsTableStyled from "@/components/SpecificationsTableStyled";

interface Component {
  title: string;
  description: string;
  specs?: string[];
  specifications: { label: string; value: string }[]; // Not optional
  url: string;
}

interface PartModalProps {
  component: Component | null;
  isOpen: boolean;
  onClose: () => void;
}

// Update the PartModal component to better display specifications
const PartModal = ({ component, isOpen, onClose }: PartModalProps) => {
  // Reference to store the original scroll position
  const originalScrollPosition = useRef(0);
  
  // Handle modal open/close effects
  useEffect(() => {
    if (isOpen) {
      // Store the current scroll position when opening
      originalScrollPosition.current = window.pageYOffset;
      
      // Disable scrolling on the body
      document.body.style.overflow = 'hidden';
      
      // On mobile, scroll to top for better modal viewing
      if (window.innerWidth < 640) {
        window.scrollTo(0, 0);
      }
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'auto';
      
      // Don't do any scrolling on close - let the page stay where it is
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Custom close handler to prevent scroll jumps
  const handleClose = () => {
    // Simply call onClose without changing scroll position
    onClose();
  };

  // Extract the description from the component
  const getDescriptionText = () => {
    if (!component || !component.description) return "";
    return component.description;
  };

  if (!component) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center sm:p-4 md:p-6"
            onClick={handleClose}
          >
            <div 
              className="bg-white rounded-none sm:rounded-xl shadow-2xl w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-4xl overflow-hidden flex flex-col font-[Poppins]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-[#00a0dc] p-4 sm:p-5 relative flex items-center rounded-none sm:rounded-t-xl">
                {/* Image thumbnail - only show on larger screens */}
                <div className="hidden sm:block bg-white rounded-lg h-16 w-16 mr-4 p-1 shadow-sm">
                  {component.url ? (
                    <img
                      src={component.url}
                      alt={component.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-400">
                      <Package size={24} />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  {/* Category tag */}
                  <div className="inline-block px-2.5 py-1 rounded-full bg-white/20 text-white text-xs mb-1.5 font-[Poppins]">
                    Primary Structure
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-xl font-bold text-white leading-tight pr-8 font-[Poppins]">
                    {component.title}
                  </h2>
                </div>
                
                {/* Close button */}
                <button 
                  onClick={handleClose}
                  className="absolute top-4 right-4 rounded-full p-1.5 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Content - scrollable with no extra space */}
              <div className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="p-4 sm:p-6">
                  {/* Replace the Overview section with a combined Dimensions & Standards section */}
                  <div className="mb-4">
                    <h3 className="text-gray-700 text-xl sm:text-2xl font-semibold mb-2 font-[Poppins]">Dimensions & Standards:</h3>
                    <p className="text-gray-700 text-sm sm:text-base mb-4 font-[Poppins] leading-relaxed">{getDescriptionText()}</p>
                    
                    {/* Specifications table with responsive design */}
                    {component.specifications && component.specifications.length > 0 ? (
                      <div className="bg-white rounded-lg">
                        <div className="hidden sm:block">
                          <SpecificationsTableStyled specifications={component.specifications} />
                        </div>
                        <div className="sm:hidden space-y-4">
                          {component.specifications.map((spec, index) => (
                            <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                              <div className="text-[#00a0dc] font-medium text-sm mb-1">{spec.label}</div>
                              <div className="text-gray-700 text-sm">{spec.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};


export default function FenceSwingGatePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);

  // Flatten all components into a single array
  const allComponents = Object.values(fenceSwingGatesComponents).flat();

  const handleComponentClick = (itemName: string) => {
    // Find the component specifications
    const specs = Object.keys(componentSpecifications).includes(itemName)
      ? componentSpecifications[itemName as keyof typeof componentSpecifications]
      : undefined;
    
    // Find the image URL by searching through all categories
    let imageUrl = '/placeholder-image.jpg';
    
    // Search through all categories to find the matching component
    Object.keys(fenceSwingGatesComponents).forEach(categoryKey => {
      const items = fenceSwingGatesComponents[categoryKey as keyof typeof fenceSwingGatesComponents];
      const foundItem = items.find(item => item.name === itemName);
      if (foundItem && foundItem.imageUrl) {
        imageUrl = foundItem.imageUrl;
      }
    });
    
    // Create a component object with the specifications
    const component: Component = {
      title: itemName,
      description: specs?.description || "No description available.",
      // Filter out any undefined values and ensure we always have an array
      specifications: specs?.specifications?.filter(spec => spec !== undefined) || [],
      url: imageUrl
    };
    
    setSelectedComponent(component);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/fence-swing-gates.jpg')] bg-cover bg-center bg-no-repeat"></div>
          {/* Subtle overlay for better readability */}
          <div className="absolute inset-0 bg-black/25 z-10"></div>
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
                <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-xs sm:text-sm font-medium shadow-lg text-shadow">
                  Next-Generation Security
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-8 leading-tight tracking-tight text-shadow-lg">
              {"Fence Swing Gate"}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 px-2 text-shadow">
              Advanced perimeter protection combining cutting-edge materials with smart technology for uncompromised security in the most challenging environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button className="bg-white text-[#00a0dc] hover:bg-blue-50 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 font-medium">
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
               { value: "0 to 99.8%", label: "Security Rating" },
                { value: "0 to 25+ Years", label: "Durability" },
                { value: "0 to 1,200 km", label: "Deployed" },
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
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#00a0dc] mb-1 sm:mb-2">{stat.value}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Components Section - now showing all parts directly */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-50/60 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-[0.015]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-16">
            <span className="bg-blue-50 text-[#00a0dc] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 inline-block shadow-sm">
              System Components
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-3 sm:mb-4">
              Advanced Security Elements
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto px-2">
              Each component is engineered to the highest standards, ensuring maximum security 
              and seamless integration within the complete system.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {allComponents.map((item, idx) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group relative border border-blue-100 cursor-pointer"
                  onClick={() => handleComponentClick(item.name)}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/4 h-[160px] relative">
                      <Image
                        src={item.imageUrl || '/placeholder-image.jpg'}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-contain p-4"
                        priority={idx < 6}
                      />
                    </div>
                    <div className="w-full sm:w-3/4 p-4 sm:p-6 flex flex-col justify-between">
                      <div>
                        <h4 className="text-[#00a0dc] font-medium text-lg sm:text-xl group-hover:text-[#00a0dc]">
                          {item.name}
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base mt-2">
                          High-quality component for enhanced security and durability.
                        </p>
                      </div>
                      <div className="mt-4 flex items-center text-sm text-[#00a0dc]">
                        <Button variant="ghost" className="flex items-center text-[#00a0dc] hover:text-[#00a0dc] p-0">
                          <span>View Details</span>
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                <span className="bg-blue-50 text-[#00a0dc] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 inline-block">
                  Military-Grade Protection
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4 sm:mb-6">
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
                          <Check size={16} className="text-[#00a0dc] h-3 w-3 sm:h-4 sm:w-4" />
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
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
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00a0dc] to-[#00a0dc]">
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
                        <Shield size={14} className="text-[#00a0dc] sm:h-5 sm:w-5" />
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#00a0dc] to-[#00a0dc] relative overflow-hidden">
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
                <Button className="bg-white text-[#00a0dc] hover:bg-blue-50 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
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
