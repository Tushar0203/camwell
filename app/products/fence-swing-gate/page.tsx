'use client';
import { Button } from '@/components/ui/button';
// Ensure framer-motion import is correct
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Download, Minus, Package, Plus, Shield } from 'lucide-react';
import { useState } from 'react';

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

// Client-side only component for animated particles
// const AnimatedParticles = () => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) return null;

//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 rounded-full bg-blue-400/30"
//           initial={{
//             x: `${i * 15 + 10}%`,
//             y: `${i * 15 + 5}%`,
//             opacity: 0.4
//           }}
//           animate={{
//             x: [null, `${(i * 20 + 30) % 100}%`, `${(i * 15 + 60) % 100}%`, `${(i * 25 + 20) % 100}%`],
//             y: [null, `${(i * 15 + 20) % 100}%`, `${(i * 25 + 30) % 100}%`, `${(i * 10 + 50) % 100}%`],
//             opacity: [null, 0.2, 0.8, 0.3]
//           }}
//           transition={{
//             duration: 30 + i * 5,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />
//       ))}
//     </div>
//   );
// };

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

// Example Modal Props (if uncommenting modal)
// interface PartModalProps {
//   component: Component | null;
//   isOpen: boolean;
//   onClose: () => void;
// }

// Fix the PartModal component definition to resolve the static flag issue
// const PartModal = ({ component, isOpen, onClose }: PartModalProps) => {
//   // Prevent background scrolling when modal is open
//   useEffect(() => {
//     if (isOpen) {
//       // Disable scrolling on the body when modal is open
//       document.body.style.overflow = 'hidden';
//     } else {
//       // Re-enable scrolling when modal is closed
//       document.body.style.overflow = 'auto';
//     }

//     // Cleanup function to re-enable scrolling when component unmounts
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isOpen]);

//   if (!component) return null;

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop with blur effect */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
//             onClick={onClose}
//           />

//           {/* Modal - improved mobile responsiveness */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-20"
//             onClick={onClose}
//           >
//             <div
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header - improved for mobile */}
//               <div className="relative">
//                 <div className="bg-gradient-to-r from-[#1F75B5] to-[#1F75B5] p-4 sm:p-6">
//                   <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
//                     <button
//                       onClick={onClose}
//                       className="rounded-full p-2 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
//                     >
//                       <X className="w-5 h-5" />
//                     </button>
//                   </div>
//                   <div className="flex items-center gap-3 sm:gap-4">
//                     <div className="bg-white/10 p-2 sm:p-3 rounded-xl">
//                       <Package className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//                     </div>
//                     <div>
//                       <div className="flex items-center gap-2 mb-1">
//                         <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
//                           {component?.title.includes("MESH") ? "Primary Structure" : // Added optional chaining
//                            component?.title.includes("CLAMP") ? "Fastening System" :
//                            component?.title.includes("ARM") || component?.title.includes("RAZOR") ? "Security Enhancement" :
//                            ""}
//                         </span>
//                       </div>
//                       <h3 className="text-base sm:text-xl font-bold text-white line-clamp-2 sm:line-clamp-none">
//                         {component?.title} {/* Added optional chaining */}
//                       </h3>
//                       <div className="h-0.5 w-12 bg-blue-400/30 mt-1 sm:mt-2"></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/5 to-transparent"></div>
//               </div>

//               {/* Content - improved scrolling and spacing for mobile */}


//               {/* Footer - improved for mobile */}
//               <div className="border-t border-gray-100 p-3 sm:p-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-3">
//                 <Button
//                   variant="outline"
//                   onClick={onClose}
//                   className="gap-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 text-gray-700 hover:text-gray-900 transition-all duration-300 cursor-pointer px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg w-full sm:w-auto"
//                 >
//                   <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//                   Close
//                 </Button>
//                 <Button
//                   className="bg-[#1F75B5] hover:bg-[#1F75B5] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md cursor-pointer w-full sm:w-auto"
//                   onClick={() => {
//                     // Close the modal first
//                     onClose();
//                     // Use window.location to navigate to the contact page
//                     if (component) { // Check if component is not null
//                       window.location.href = "/contact?product=" + encodeURIComponent(component.title);
//                     }
//                   }}
//                 >
//                   Request Quote
//                   <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

interface CategorySectionProps {
  title: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
  components: Component[];
  // Removed onComponentClick prop
}

const CategorySection = ({ title, items, isOpen, onToggle, components }: CategorySectionProps) => { // Removed onComponentClick prop
  // Using the original structure for getCategoryIcon from the initial file read, but with adjusted sizes
  const getCategoryIcon = () => {
    // Adjusted sizes to match reference
    if (title === "Primary Structure") return <Package className="w-6 h-6 sm:w-7 sm:h-7" />;
    if (title === "Fastening System") return <Shield className="w-6 h-6 sm:w-7 sm:h-7" />;
    if (title === "Security Enhancement") return <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7" />;
    return <Package className="w-6 h-6 sm:w-7 sm:h-7" />;
  };

  // Get a color scheme based on category
  const getCategoryColorScheme = () => {
    if (title === "Primary Structure") return {
      bgGradient: "black", // Adjusted to match reference (though reference doesn't show gradient)
      lightBg: "bg-blue-50",
      accentColor: "text-gray-900", // Adjusted to match reference
      hoverBg: "hover:bg-blue-100", // Adjusted to match reference hover
      iconBg: isOpen ? "bg-blue-100" : "bg-blue-50",
      iconColor: isOpen ? "text-blue-600" : "text-[#1F75B5]", // Adjusted to match reference icon color
      ringColor: "ring-blue-200/50"
    };
    // Assuming similar adjustments for other categories based on Primary Structure reference
    if (title === "Fastening System") return {
      bgGradient: "from-indigo-500 to-indigo-600",
      lightBg: "bg-indigo-50",
      accentColor: "text-gray-900",
      hoverBg: "hover:bg-indigo-100",
      iconBg: isOpen ? "bg-indigo-100" : "bg-indigo-50",
      iconColor: isOpen ? "text-indigo-600" : "text-[#1F75B5]", // Assuming similar color
      ringColor: "ring-indigo-200/50"
    };
    if (title === "Security Enhancement") return {
      bgGradient: "from-purple-500 to-purple-600",
      lightBg: "bg-purple-50",
      accentColor: "text-gray-900",
      hoverBg: "hover:bg-purple-100",
      iconBg: isOpen ? "bg-purple-100" : "bg-purple-50",
      iconColor: isOpen ? "text-purple-600" : "text-[#1F75B5]", // Assuming similar color
      ringColor: "ring-purple-200/50"
    };
    // Default fallback
    return {
      bgGradient: "from-blue-500 to-blue-600",
      lightBg: "bg-blue-50",
      accentColor: "text-gray-900",
      hoverBg: "hover:bg-blue-100",
      iconBg: isOpen ? "bg-blue-100" : "bg-blue-50",
      iconColor: isOpen ? "text-blue-600" : "text-[#1F75B5]",
      ringColor: "ring-blue-200/50"
    };
  };

  const colorScheme = getCategoryColorScheme();

  return (
    // Applying styles from reference HTML
    <motion.div
      layout
      className={`border border-gray-200 rounded-xl mb-6 bg-white transition-all duration-300 relative overflow-hidden ${
        isOpen
          ? `shadow-xl ring-2 ${colorScheme.ringColor} transform scale-[1.01]` // Keep open state distinct
          : 'hover:shadow-md hover:border-blue-200/70' // Apply reference hover styles
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative background elements (kept from previous state, adjust if needed) */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className={`absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br ${colorScheme.bgGradient} blur-3xl`}></div>
        <div className={`absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-gradient-to-tr ${colorScheme.bgGradient} blur-3xl`}></div>
      </div>

      {/* Applying styles from reference HTML */}
      <button
        onClick={onToggle}
        className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none group cursor-pointer" // Removed relative z-10 as it wasn't in ref
      >
        <div className="flex items-center gap-3 sm:gap-5"> {/* Adjusted gap */}
          <motion.div
            // Adjusted size and rounding, apply iconBg and hover from colorScheme
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${colorScheme.iconBg} ${colorScheme.iconColor} group-hover:bg-blue-100`}
            animate={{
              scale: isOpen ? 1.05 : 1,
              // Removed boxShadow animation based on reference
            }}
            transition={{ duration: 0.3 }}
          >
            <div > {/* Removed colorScheme.iconColor div wrapper */}
              {getCategoryIcon()}
            </div>
          </motion.div>
          <div>
            <motion.h3
              // Adjusted text size and color
              className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${colorScheme.accentColor}`}
            >
              {title}
            </motion.h3>
            {/* Adjusted margin and text color */}
            <p className="text-xs sm:text-sm text-gray-500 mt-1">{items.length} components</p>
          </div>
        </div>
        {/* Applying styles from reference HTML */}
        <div className="transition-all duration-300 p-1.5 sm:p-2"> {/* Adjusted padding */}
          {isOpen ? (
            // Adjusted size and color
            <Minus className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#1F75B5]`} />
          ) : (
            // Adjusted size and color
            <Plus className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#1F75B5]`} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Adjusted padding */}
            <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-1 sm:pt-2">
              <div className="space-y-4 sm:space-y-6">
                {items.map((item, index) => {
                  const component = components.find(c => c.title === item);
                  // details are no longer used here

                  if (!component) return null;

                  return (
                    // Adjusted styling to match the new reference image
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group relative border border-blue-100" // Reverted rounding/shadow closer to original, kept border
                    >
                      {/* Removed justify-between and the Details link */}
                      <div className="border-l-[6px] border-[#1F75B5] pl-4 sm:pl-5 py-3 sm:py-4 bg-gradient-to-r from-blue-50 to-white flex items-center"> {/* Removed pr-4 and justify-between */}
                        <h4 className="text-[#1a5d90] font-semibold text-sm sm:text-base line-clamp-1">{item}</h4> {/* Kept adjusted font weight and size */}
                        {/* Removed Details link */}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function BorderFencePage() { // Renaming this function might be good later, but keep for now to ensure match
  const [openCategory, setOpenCategory] = useState<string>('');
  // Removed state and handlers related to modal
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

  // Removed closeModal handler

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
        <div className="absolute inset-0 bg-[url('/images/fence-swing-gates.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
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
      <section className="py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 px-3 xs:px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-50/60 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-[0.015]"></div>

          {/* Remove the AnimatedParticles component */}
          {/* <AnimatedParticles /> */}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="max-w-2xl mx-auto text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center mb-3 xs:mb-4">
              <span className="bg-gradient-to-r from-blue-50 to-blue-50 text-[#1F75B5] px-3 xs:px-4 py-1 xs:py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-md">
                System Components
              </span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-900">
              Advanced Security Elements
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-xl mx-auto px-2 leading-relaxed">
              Each component is engineered to the highest standards, ensuring maximum security
              and seamless integration within the complete system.
            </p>
          </motion.div>

          {/* Applied lg:max-w-4xl */}
          <div className="max-w-xl xs:max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-4xl mx-auto">
            {Object.entries(categorizedComponents).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CategorySection
                  title={category}
                  items={items}
                  isOpen={openCategory === category}
                  onToggle={() => toggleCategory(category)}
                  components={components}
                  // Removed onComponentClick prop passing
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Removed commented out PartModal usage */}

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
