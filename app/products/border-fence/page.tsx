'use client';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Minus, 
  Package, 
  Plus, 
  Shield, 
  ArrowRight, 
  Download,
  ChevronRight,
  X,
  Check
} from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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
    { name: "WELD MESH PANEL", imageUrl: "/products/border-fence/weld-mesh-panel.png" },
    { name: "FENCE (CHS) POST", imageUrl: "/products/border-fence/fence-chs.png" },
    { name: "ANCHOR ROD", imageUrl: "/products/border-fence/anchor-rod.png" },
    { name: "STRUT (CHS) POST", imageUrl: "/products/border-fence/strut-chs.png" },
  ],
  "Fastening System": [
    { name: "OMEGA CLAMP WITH PROFILE COVER PLATE", imageUrl: "/products/border-fence/omega-clamp.png" },
    { name: "INTERMEDIATE PANEL (IP) BINDER", imageUrl: "/products/border-fence/intermediate-panel-binder.png" },
    { name: "CORNER CLAMP", imageUrl: "/products/border-fence/corner-clamp.png" },
  ],
  "Security Enhancement": [
    { name: "STRAINING Y ARM", imageUrl: "/products/border-fence/straining-y-arm.png" },
    { name: "INTERMEDIATE Y-ARM", imageUrl: "/products/border-fence/intermediate-y-arm.png" },
    { name: "PTCC PUNCHED TAPE CONCERTINA COIL", imageUrl: "/products/border-fence/ptcc-punched.png" },
    { name: "RAZOR WIRE TAPE", imageUrl: "/products/border-fence/razor-wire-tape.png" },
    { name: "HOG RINGS", imageUrl: "/products/border-fence/hog-rings.png" },
  ],
  "Hardware & Accessories": [
    { name: "TIE WIRE FOR RAZOR TAPE", imageUrl: "/products/border-fence/tie-wire.png" },
    { name: "M8X120MM MUSHROOM HEAD BOLT, NUT & WASHER", imageUrl: "/products/border-fence/m8x120mm.png" },
    { name: "M8X75MM MUSHROOM HEAD BOLT, NUT & WASHER", imageUrl: "/products/border-fence/m8x75mm.png" },
    { name: "M8X60MM MUSHROOM HEAD BOLT, NUT & WASHER", imageUrl: "/products/border-fence/m8x60mm.png" },
    { name: "M8X35MM MUSHROOM HEAD BOLT, NUT & WASHER", imageUrl: "/products/border-fence/m8x35mm.png" },
  ],
};

interface Component {
  title: string;
  description: string;
  specs: string[];
}

interface PartModalProps {
  component: Component | null;
  isOpen: boolean;
  onClose: () => void;
}

// Fix the PartModal component definition to resolve the static flag issue
const PartModal = ({ component, isOpen, onClose }: PartModalProps) => {
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

  if (!component) return null;
  
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
                <div className="bg-gradient-to-r from-[#1F75B5] to-[#1a5d90] p-4">
                  <div className="absolute top-3 right-3">
                    <button 
                      onClick={onClose}
                      className="rounded-full p-2 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-white p-2 sm:p-3 rounded-xl h-[70px] w-[70px] sm:h-[90px] sm:w-[90px] relative">
                      <Image
                        src={component.url || '/placeholder-image.jpg'}
                        alt={component.title}
                        fill
                        className="object-contain"
                        sizes="90px"
                        priority
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                          {component.title.includes("MESH") ? "Primary Structure" : 
                           component.title.includes("CLAMP") ? "Fastening System" :
                           component.title.includes("ARM") || component.title.includes("RAZOR") ? "Security Enhancement" :
                           "Hardware & Accessories"}
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
              <div className="p-4 sm:p-6 overflow-y-auto flex-grow scrollbar-hide">
                <div className="bg-blue-50/50 p-4 sm:p-5 rounded-xl mb-4 sm:mb-6 border border-blue-100">
                  <h4 className="text-[#1F75B5] font-medium mb-2 flex items-center">
                    <span className="bg-blue-100 p-1 rounded-md mr-2">
                      <Package className="w-4 h-4 text-[#1a5d90]" />
                    </span>
                    Overview
                  </h4>
                  <p className="text-gray-700 text-sm sm:text-base">{component.description}</p>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-blue-100 p-1.5 rounded-md mr-2 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-[#1a5d90]" />
                    </span>
                    Key Features
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 sm:mb-6">
                    {component.specs.map((spec, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-white p-3 sm:p-4 rounded-lg border border-blue-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
                      >
                        <div className="flex-shrink-0">
                          <div className="h-7 w-7 rounded-full bg-blue-100/80 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-blue-500" />
                          </div>
                        </div>
                        <span className="text-sm font-medium text-[#1F75B5] group-hover:text-[#1a5d90] transition-colors duration-300">{spec}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                
                
                <div className="grid grid-cols-1 gap-4 mb-4 sm:mb-6 md:grid-cols-2">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-4 sm:p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="text-[#1F75B5] font-medium mb-3 flex items-center">
                      <span className="bg-blue-100 p-1.5 rounded-md mr-2 flex items-center justify-center">
                        <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1F75B5]" />
                      </span>
                      Compatible With
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Primary Structure", "Fastening System", "Security Enhancement"].map((tag, idx) => (
                        <motion.span 
                          key={tag}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="bg-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium text-[#1a5d90] border border-blue-200 shadow-sm hover:shadow hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 cursor-pointer flex items-center gap-1"
                        >
                          <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-white p-4 sm:p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="text-[#1F75B5] font-medium mb-3 flex items-center">
                      <span className="bg-blue-100 p-1.5 rounded-md mr-2 flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1F75B5]" />
                      </span>
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      {["Enhanced security performance", "Long-term durability", "Easy installation and maintenance"].map((benefit, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="flex-shrink-0">
                            <div className="h-7 w-7 rounded-full bg-blue-100/80 flex items-center justify-center">
                              <Check className="h-3.5 w-3.5 text-blue-500" />
                            </div>
                          </div>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
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

interface CategoryItem {
  name: string;
  imageUrl: string;
}

interface CategorySectionProps {
  title: string;
  items: CategoryItem[];
  isOpen: boolean;
  onToggle: () => void;
  components: Component[];
  onComponentClick: (component: Component) => void;
}
const CategorySection = ({ title, items, isOpen, onToggle, components, onComponentClick }: CategorySectionProps) => (
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
          {title === "Hardware & Accessories" && <Package className="w-6 h-6 sm:w-7 sm:h-7" />}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((item, idx) => (
                  <motion.div 
                    key={`${title}-${item.name}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group relative border border-blue-100 cursor-pointer h-[280px]"
                    onClick={() => {
                      const component = components.find(comp => comp.title === item.name);
                      if (component) onComponentClick(component);
                    }}
                  >
                    <div className="h-[180px] relative">
                      <Image
                        src={item.imageUrl || '/placeholder-image.jpg'}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-4" // Changed from object-cover to object-contain and added padding
                        priority={idx < 6}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-[#1a5d90] font-medium text-sm line-clamp-2 group-hover:text-[#1F75B5]">
                        {item.name}
                      </h4>
                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <ArrowRight className="h-3 w-3 mr-1" />
                        <span>View Details</span>
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

  const handleComponentClick = (component: Component) => {
    setSelectedComponent(component);
    setIsModalOpen(true);
  };

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
      title: "WELD MESH PANEL",
      url: "/products/border-fence/weld-mesh-panel.png",
      description: "High-security welded mesh panels with advanced electrical resistance welding technology.",
      specs: [
        "High-strength galvanized steel",
        "Precision welded configuration",
        "Advanced corrosion protection",
        "Standardized dimensions",
        "Superior tensile strength"
      ]
    },
    {
      title: "FENCE (CHS) POST",
      url: "/products/border-fence/fence-chs.png",
      description: "Robust Circular Hollow Section posts engineered for optimal structural integrity.",
      specs: [
        "Hot-dip galvanized steel",
        "Multiple height options",
        "Superior load-bearing",
        "Anti-corrosion treated",
        "Compatible brackets"
      ]
    },
    {
      title: "ANCHOR ROD",
      url: "/products/border-fence/anchor-rod.png",
      description: "High-grade anchor rods designed for secure concrete foundation mounting.",
      specs: [
        "Premium steel construction",
        "Precise dimensions",
        "Corrosion-resistant",
        "Easy installation",
        "Concrete compatible"
      ]
    },
    {
      title: "STRUT (CHS) POST",
      url: "/products/border-fence/strut-chs.png",
      description: "Reinforced support posts for enhanced corner and endpoint stability.",
      specs: [
        "Premium hollow design",
        "Industrial-grade steel",
        "Precise engineering",
        "Enhanced support",
        "Advanced galvanizing"
      ]
    },
    {
      title: "OMEGA CLAMP WITH PROFILE COVER PLATE",
      url: "/products/border-fence/omega-clamp.png",
      description: "These clamps are used to fix the mesh panels on the poles by using suitable fasteners. The profile cover plate provide the necessary holding strength.",
      specs: [
        "Enhanced holding strength",
        "Custom profile design",
        "Secure fastening system",
        "Weather-resistant coating",
        "Easy installation"
      ]
    },
    {
      title: "INTERMEDIATE PANEL (IP) BINDER",
      url: "/products/border-fence/ip-binder.png",
      description: "Panel binders are used for connecting panel.",
      specs: [
        "Secure panel connection",
        "Durable construction",
        "Easy installation",
        "Compatible design",
        "Weather-resistant"
      ]
    },
    {
      title: "CORNER CLAMP",
      url: "/products/border-fence/corner-clamp.png",
      description: "These clamps are used to fix the mesh panels on the poles by using suitable fasteners. These clamps are used where the angle between two adjacent fencepost is less than 180° angle.",
      specs: [
        "Angular adjustment capability",
        "Secure fastening system",
        "Durable construction",
        "Weather-resistant coating",
        "Easy installation"
      ]
    },
    {
      title: "STRAINING Y ARM",
      url: "/products/border-fence/straining-y-arm.png",
      description: "Straining Y-Arm are installed for supporting Punched Tape Concertina Coils (PTCC). One straining Y-Arm is installed at every 30 meters.",
      specs: [
        "30-meter interval installation",
        "PTCC support capability",
        "Durable construction",
        "Strategic positioning",
        "Weather-resistant finish"
      ]
    },
    {
      title: "INTERMEDIATE Y-ARM",
      url: "/products/border-fence/intermediate-y-arm.png",
      description: "Intermediate Y-Arm are installed for supporting Punched Tape Concertina Coils (PTCC). One Intermediate Y arm is installed at every post except the posts with Straining Y arms.",
      specs: [
        "Regular post installation",
        "PTCC support system",
        "Durable construction",
        "Complementary to Straining Y-arms",
        "Weather-resistant finish"
      ]
    },
    {
      title: "PTCC PUNCHED TAPE CONCERTINA COIL",
      url: "/products/border-fence/ptcc-punched.png",
      description: "Advanced razor wire security system designed for superior perimeter protection and deterrence.",
      specs: [
        "High-tensile steel construction",
        "Razor-sharp edge design",
        "Corrosion-resistant coating",
        "Easy deployment system",
        "Long-lasting durability"
      ]
    },
    {
      title: "RAZOR WIRE TAPE",
      url: "/products/border-fence/razor-wire-tape.png",
      description: "High-security razor wire tape supplied in convenient 100-meter rolls for efficient perimeter protection.",
      specs: [
        "100 meters per roll",
        "High-grade steel construction",
        "Sharp razor edges",
        "Galvanized finish",
        "Easy deployment system"
      ]
    },
    {
      title: "HOG RINGS",
      url: "/products/border-fence/hog-rings.png",
      description: "Specialized fastening rings designed to secure concertina coil and consecutive concertina coils for enhanced security.",
      specs: [
        "SS304/SS316 grade construction",
        "3mm diameter precision rings",
        "High tensile strength",
        "Corrosion resistant",
        "Easy installation"
      ]
    },
    {
      title: "TIE WIRE FOR RAZOR TAPE",
      url: "/products/border-fence/tie-wire.png",
      description: "Stainless-steel tie wire is used for knotting razor tape at straining Y arm at each eyebolt location.",
      specs: [
        "Stainless steel construction",
        "Secure knotting capability",
        "Corrosion-resistant material",
        "Compatible with Y-arm eyebolts",
        "Durable fastening solution"
      ]
    },
    {
      title: "M8X120MM MUSHROOM HEAD BOLT, NUT & WASHER",
      url: "/products/border-fence/m8x120mm.png",
      description: "M8x120 mm mushroom head bolts with breakable head security nuts and washers are used to clamp Y arm to a fencing post. For each Y arm two sets of bolts are required.",
      specs: [
        "M8x120mm standard size",
        "Breakable head security nuts",
        "Two sets per Y arm",
        "Anti-tamper design",
        "Complete with washers"
      ]
    },
    {
      title: "M8X75MM MUSHROOM HEAD BOLT, NUT & WASHER",
      url: "/products/border-fence/m8x75mm.png",
      description: "M8x75 mm mushroom head bolts with breakable head security nuts and washers are used to clamp omega and profile plate at four mesh overlap junctions.",
      specs: [
        "M8x75mm standard size",
        "Breakable security head nuts",
        "Four-point mesh junction fixing",
        "Complete with washers",
        "Anti-tampering design"
      ]
    },
    {
      title: "M8X60MM MUSHROOM HEAD BOLT, NUT & WASHER",
      url: "/products/border-fence/m8x60mm.png",
      description: "M8x60 mm mushroom head bolts with breakable head security nuts and washers are used to clamp omega and profile plate at two mesh overlap junctions.",
      specs: [
        "SS304/SS316 material options",
        "M8x60mm standard size",
        "Weight: 0.031 Kg ± 8%",
        "Two-point mesh junction fixing",
        "Complete with security nuts and washers"
      ]
    },
    {
      title: "M8X35MM MUSHROOM HEAD BOLT, NUT & WASHER",
      url: "/products/border-fence/m8x35mm.png",
      description: "M8x35 mm mushroom head bolts with breakable head security nuts and washers are used to clamp IP binder at center of two mesh overlap junctions to remove the gap and make it sturdy between two mesh.",
      specs: [
        "SS304/SS316 material options",
        "M8x35mm standard size",
        "Weight: 0.025 Kg ± 8%",
        "3200 sets per kilometer",
        "IP binder junction fixing"
      ]
    }
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
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/weld-mesh-fence.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
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
              {"India's New Border Fence"}
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
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#1F75B5] mb-1 sm:mb-2">{stat.value}</h3>
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
                onComponentClick={handleComponentClick}
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
                
                <Button className="mt-6 sm:mt-10 bg-[#1F75B5] hover:bg-[#1a5d90] text-white px-5 sm:px-8 py-3 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1F75B5] to-[#1a5d90]">
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
                        <Shield size={14} className="text-[#1a5d90] sm:h-5 sm:w-5" />
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1F75B5] to-[#1F75B5] relative overflow-hidden">
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
                <Button className="bg-white text-[#1F75B5] hover:bg-blue-50 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
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
