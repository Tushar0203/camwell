'use client';

import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Package,
  X
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { Locale } from '@/lib/dictionary';

// Custom styles for hiding scrollbars and adding text shadows
const customStyles = `
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  /* Text shadow for better readability */
  .text-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.6);
  }
  
  /* Larger text shadow for headings */
  .text-shadow-lg {
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.9), 0 6px 16px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.7);
  }
`;

// Import the component data from the external file
import { fenceSwingGatesComponents } from '@/data/fenceSwingGatesComponents';

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
  
  // Get RTL direction from params
  const params = useParams();
  const lang = params?.lang as Locale || 'en';
  const isRTL = lang === 'ar';
  
  // Handle modal open/close effects
  useEffect(() => {
    if (isOpen) {
      // Store the current scroll position when opening
      originalScrollPosition.current = window.pageYOffset;
      
      // Disable body scroll completely
      document.body.style.position = 'fixed';
      document.body.style.top = `-${originalScrollPosition.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflowY = 'scroll';
      
      // On mobile, scroll to top for better modal viewing
      if (window.innerWidth < 640) {
        window.scrollTo(0, 0);
      }
    } else {
      // Re-enable scrolling when modal is closed
      const y = originalScrollPosition.current;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflowY = '';
      requestAnimationFrame(() => window.scrollTo(0, y));
    }
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflowY = '';
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
                <div className="hidden sm:block bg-white rounded-lg h-14 w-14 ml-2 mr-4 p-1 shadow-sm overflow-hidden self-start">
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
                    {isRTL ? "الهيكل الأساسي" : "Primary Structure"}
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
                    <h3 className="text-gray-700 text-xl sm:text-2xl font-semibold mb-2 font-[Poppins]">
                      {isRTL ? "الأبعاد والمعايير:" : "Dimensions & Standards:"}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base mb-4 font-[Poppins] leading-relaxed">{getDescriptionText()}</p>
                    
                    {/* Specifications table with responsive design */}
                    {component.specifications && component.specifications.length > 0 ? (
                      <div className="bg-white rounded-lg">
                        <div className="hidden sm:block">
                          <SpecificationsTableStyled specifications={component.specifications} isRTL={isRTL} />
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
  const params = useParams();
  const lang = params?.lang as Locale || 'en';
  const isRTL = lang === 'ar';
  
  // Choose the appropriate arrow based on direction
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  // Function to handle clicking on a component
  const handleComponentClick = (itemName: string) => {
    // Create a mock component object for the modal
    const componentData: Component = {
      title: itemName,
      description: isRTL 
        ? "بناء فولاذي عالي القوة مصمم لأقصى درجات الأمن والمتانة في البيئات القاسية. يلبي معايير ISO 9001:2015."
        : "High-strength steel construction designed for maximum security and durability in harsh environments. Meets ISO 9001:2015 standards.",
      specifications: [
        { 
          label: isRTL ? "المادة" : "Material", 
          value: isRTL ? "فولاذ عالي الشد، مجلفن بالغمس الساخن" : "High tensile steel, hot-dip galvanized" 
        },
        { 
          label: isRTL ? "الارتفاع" : "Height", 
          value: isRTL ? "2.4م قياسي (قابل للتخصيص)" : "2.4m standard (customizable)" 
        },
        { 
          label: isRTL ? "العرض" : "Width", 
          value: isRTL ? "متغير حسب المتطلبات" : "Variable based on requirement" 
        },
        { 
          label: isRTL ? "السماكة" : "Thickness", 
          value: isRTL ? "4 مم كحد أدنى" : "4mm minimum" 
        },
        { 
          label: isRTL ? "الطلاء" : "Coating", 
          value: isRTL ? "زنك + مسحوق بوليستر، 80-120 ميكرون" : "Zinc + Polyester powder, 80-120 microns" 
        },
        { 
          label: isRTL ? "مقاومة التآكل" : "Corrosion Resistance", 
          value: isRTL ? "+1500 ساعة اختبار رش ملحي" : "1,500+ hours salt spray test" 
        },
        { 
          label: isRTL ? "نطاق درجة الحرارة" : "Temperature Range", 
          value: isRTL ? "-40°C إلى +80°C" : "-40°C to +80°C" 
        },
        { 
          label: isRTL ? "قدرة تحمل الرياح" : "Wind Load Capacity", 
          value: isRTL ? "150 كم/ساعة كحد أدنى" : "150 km/h minimum" 
        },
        { 
          label: isRTL ? "الضمان" : "Warranty", 
          value: isRTL ? "10 سنوات قياسية" : "10 years standard" 
        },
        { 
          label: isRTL ? "الشهادة" : "Certification", 
          value: isRTL ? "ISO 9001:2015، معتمد CE" : "ISO 9001:2015, CE Certified" 
        }
      ],
      url: getImageUrl(itemName) || "",
    };
    
    setSelectedComponent(componentData);
    setIsModalOpen(true);
  };

  // Helper function to get image URL based on component name
  const getImageUrl = (itemName: string): string | undefined => {
    // Flatten all components into a single array
    const allComponents = Object.values(fenceSwingGatesComponents).flat();
    
    // Find the matching component by name
    const component = allComponents.find(c => c.name === itemName);
    return component?.imageUrl;
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-[url('/images/fence-swing-gates.jpg')] bg-cover bg-center">
        {/* Subtle overlay for better readability */}
        <div className="absolute inset-0 bg-black/25"></div>
        
        {/* Content container */}
        <div className="container mx-auto px-4 relative z-30 py-16 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-xs sm:text-sm font-medium shadow-lg text-shadow">
                  {isRTL ? "الأمان من الجيل التالي" : "Next-Generation Security"}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-8 leading-tight tracking-tight text-shadow-lg">
                {isRTL ? "بوابة السياج المتأرجحة" : "Fence Swing Gate"}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 px-2 text-shadow">
                {isRTL 
                  ? "حماية متقدمة للمحيط تجمع بين المواد المتطورة والتكنولوجيا الذكية لتوفير أمان لا مثيل له في أكثر البيئات تحديًا."
                  : "Advanced perimeter protection combining cutting-edge materials with smart technology for uncompromised security in the most challenging environments."}
              </p>
              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Button className="bg-white text-[#00a0dc] hover:bg-blue-50 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 font-medium">
                  <Download className={`${isRTL ? 'ml-2' : 'mr-2'} h-4 w-4 sm:h-5 sm:w-5`} />
                  {isRTL ? "تحميل المواصفات" : "Download Specifications"}
                </Button>
                <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl transition-all duration-300">
                  {isRTL ? "طلب استشارة" : "Request Consultation"}
                  <ChevronIcon className={`${isRTL ? 'mr-1' : 'ml-1'} h-4 w-4 sm:h-5 sm:w-5`} />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              {
                valueEn: '0 TO 99.8%',
                labelEn: 'SECURITY RATING',
                valueAr: '0 إلى 99.8%',
                labelAr: 'تصنيف الأمان'
              },
              {
                valueEn: '0 TO 25+ YEARS',
                labelEn: 'DURABILITY',
                valueAr: '0 إلى 25+ سنة',
                labelAr: 'المتانة'
              },
              {
                valueEn: '0 TO 1,200 KM',
                labelEn: 'DEPLOYED',
                valueAr: '0 إلى 1,200 كم',
                labelAr: 'تم النشر'
              },
              {
                valueEn: 'ISO 9001',
                labelEn: 'CERTIFIED',
                valueAr: 'ISO 9001',
                labelAr: 'معتمد'
              }
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#00a0dc]">
                  {isRTL ? item.valueAr : item.valueEn}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base tracking-wide font-medium uppercase">
                  {isRTL ? item.labelAr : item.labelEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                {isRTL ? "المكونات والمواصفات" : "Components & Specifications"}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
                {isRTL 
                  ? "تم تصميم نظام بوابة السياج المتأرجحة بدقة باستخدام مكونات عالية الجودة من الدرجة العسكرية التي تعمل معًا لتوفير محيط أمني لا يمكن كسره."
                  : "Our fence swing gate system is engineered with precision using military-grade components that work together to provide an unbreakable security perimeter."}
              </p>
            </div>
            
            {/* Components grid - organized by category */}
            <div>
              {/* Primary Structure */}
              <div className="mb-14">
                <h3 className="text-xl md:text-2xl font-bold text-[#00a0dc] mb-6 pb-2 border-b border-gray-200">
                  {isRTL ? "الهيكل الأساسي" : "Primary Structure"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {fenceSwingGatesComponents["Primary Structure"].map((item, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
                      onClick={() => handleComponentClick(item.name)}
                    >
                      <div className="flex items-center">
                        <div className="w-16 h-16 mr-4 bg-white rounded-md p-1 shadow-sm overflow-hidden">
                          {item.imageUrl ? (
                            <img 
                              src={item.imageUrl} 
                              alt={item.name}
                              className="w-full h-full object-contain" 
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                              <Package size={28} />
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">{translateComponentName(item.name, isRTL)}</h4>
                          <button className="text-[#00a0dc] text-sm mt-1 flex items-center">
                            <span>{isRTL ? "عرض التفاصيل" : "View Details"}</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Fastening System */}
              <div className="mb-14">
                <h3 className="text-xl md:text-2xl font-bold text-[#00a0dc] mb-6 pb-2 border-b border-gray-200">
                  {isRTL ? "نظام التثبيت" : "Fastening System"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {fenceSwingGatesComponents["Fastening System"].map((item, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
                      onClick={() => handleComponentClick(item.name)}
                    >
                      <div className="flex items-center">
                        <div className="w-16 h-16 mr-4 bg-white rounded-md p-1 shadow-sm overflow-hidden">
                          {item.imageUrl ? (
                            <img 
                              src={item.imageUrl} 
                              alt={item.name}
                              className="w-full h-full object-contain" 
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                              <Package size={28} />
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">{translateComponentName(item.name, isRTL)}</h4>
                          <button className="text-[#00a0dc] text-sm mt-1 flex items-center">
                            <span>{isRTL ? "عرض التفاصيل" : "View Details"}</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Security Enhancement */}
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#00a0dc] mb-6 pb-2 border-b border-gray-200">
                  {isRTL ? "تعزيز الأمان" : "Security Enhancement"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {fenceSwingGatesComponents["Security Enhancement"].map((item, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
                      onClick={() => handleComponentClick(item.name)}
                    >
                      <div className="flex items-center">
                        <div className="w-16 h-16 mr-4 bg-white rounded-md p-1 shadow-sm overflow-hidden">
                          {item.imageUrl ? (
                            <img 
                              src={item.imageUrl} 
                              alt={item.name}
                              className="w-full h-full object-contain" 
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                              <Package size={28} />
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">{translateComponentName(item.name, isRTL)}</h4>
                          <button className="text-[#00a0dc] text-sm mt-1 flex items-center">
                            <span>{isRTL ? "عرض التفاصيل" : "View Details"}</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <span className="bg-blue-50 text-[#00a0dc] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 inline-block">
                  {isRTL ? "حماية من الدرجة العسكرية" : "Military-Grade Protection"}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {isRTL ? "تميز تقني في كل التفاصيل" : "Technical Excellence in Every Detail"}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {isRTL 
                    ? "يلبي نظام سياج الحدود لدينا ويتجاوز معايير الأمان الدولية، مما يوفر دفاعًا قويًا ضد سيناريوهات التهديد المختلفة مع تحمل أقسى الظروف البيئية."
                    : "Our border fence system meets and exceeds international security standards, providing a robust defense against various threat scenarios while withstanding the harshest environmental conditions."}
                </p>
                
                {/* Feature List */}
                <ul className="space-y-3 sm:space-y-4 mb-8">
                  <li className="flex items-start text-left">
                    <div className="bg-[#00a0dc]/10 rounded-full p-1 mt-0.5 mr-3 flex-shrink-0">
                      <Check className="w-4 h-4 text-[#00a0dc]" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium">
                        {isRTL ? "تصميم مقاوم للتسلق والقطع" : "Anti-Climb & Anti-Cut Design"}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {isRTL 
                          ? "نمط شبكي متخصص يمنع التسلق ويتحمل محاولات القطع، اختبار مقاومة بمعيار ASTM F2781"
                          : "Specialized mesh pattern prevents climbing and withstands cutting attempts, ASTM F2781 compliance tested"}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start text-left">
                    <div className="bg-[#00a0dc]/10 rounded-full p-1 mt-0.5 mr-3 flex-shrink-0">
                      <Check className="w-4 h-4 text-[#00a0dc]" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium">
                        {isRTL ? "تركيب سريع" : "Rapid Installation"}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {isRTL 
                          ? "تصميم وحدات يسمح بالنشر السريع في أي تضاريس، تركيب 150 متر في اليوم لكل فريق"
                          : "Modular design allows for quick deployment in any terrain, 150 meters per day per team installation rate"}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start text-left">
                    <div className="bg-[#00a0dc]/10 rounded-full p-1 mt-0.5 mr-3 flex-shrink-0">
                      <Check className="w-4 h-4 text-[#00a0dc]" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium">
                        {isRTL ? "مقاوم للعوامل الجوية" : "Weather Resistant"}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {isRTL 
                          ? "يعمل بشكل مثالي في درجات حرارة قصوى من -40 درجة مئوية إلى 80 درجة مئوية، مع مقاومة للأشعة فوق البنفسجية بمعيار ASTM G154"
                          : "Performs optimally in extreme temperatures from -40°C to 80°C with ASTM G154 UV resistance testing"}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start text-left">
                    <div className="bg-[#00a0dc]/10 rounded-full p-1 mt-0.5 mr-3 flex-shrink-0">
                      <Check className="w-4 h-4 text-[#00a0dc]" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium">
                        {isRTL ? "متانة طويلة الأمد" : "Long-Term Durability"}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {isRTL 
                          ? "عمر خدمة يزيد عن 20 عامًا مع متطلبات صيانة قليلة، اختبار تآكل بمعيار ISO 9227 لمدة 1500+ ساعة"
                          : "20+ year service life with minimal maintenance requirements, 1,500+ hours ISO 9227 corrosion testing"}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start text-left">
                    <div className="bg-[#00a0dc]/10 rounded-full p-1 mt-0.5 mr-3 flex-shrink-0">
                      <Check className="w-4 h-4 text-[#00a0dc]" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium">
                        {isRTL ? "اختبار قوة التأثير" : "Impact Strength Testing"}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {isRTL 
                          ? "يتجاوز اختبارات التأثير بمعيار EN 1627 مستوى RC4، ومقاومة للمركبات بوزن حتى 6.8 طن عند 40 كم/ساعة"
                          : "Exceeds EN 1627 RC4 level impact tests and resists vehicle impacts up to 6.8 tons at 40 km/h"}
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['ISO 9001:2015', 'ISO 14001', 'ASTM F2781', 'CE', 'EN 1627'].map((cert, idx) => (
                    <span key={idx} className="bg-white border border-gray-200 px-2 py-1 rounded-md text-xs font-medium text-gray-700 shadow-sm">
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl mx-auto lg:mx-0 max-w-md lg:max-w-full">
                  <img 
                    src="/images/fence-2.jpg" 
                    alt="Fence Swing Gate Technical Specifications" 
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium">
                    {isRTL ? "حل أمني متكامل مع ميزات متقدمة" : "Integrated security solution with advanced features"}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                {isRTL ? "هل أنت جاهز لتأمين محيطك؟" : "Ready to Secure Your Perimeter?"}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-10 max-w-2xl mx-auto">
                {isRTL 
                  ? "تواصل مع خبراء الأمان لدينا لتصميم حل سياج حدودي مخصص يلبي متطلباتك المحددة."
                  : "Connect with our security experts to design a custom border fence solution that meets your specific requirements."}
              </p>
              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Button className="bg-white text-[#00a0dc] hover:bg-blue-50 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  {isRTL ? "طلب استشارة" : "Request a Consultation"}
                </Button>
                <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl transition-all duration-300">
                  {isRTL ? "تنزيل الكتيب" : "Download Brochure"}
                  <Download className={`${isRTL ? 'mr-2' : 'ml-2'} h-4 w-4 sm:h-5 sm:w-5`} />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Show the PartModal only when needed */}
      <PartModal 
        component={selectedComponent}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      
      {/* Add global styles */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
    </div>
  );
}

// Helper function to translate component names to Arabic
function translateComponentName(name: string, isRTL: boolean): string {
  if (!isRTL) return name;
  
  const translations: Record<string, string> = {
    "A. GATE POST": "أ. عمود البوابة",
    "B. GATE FRAME": "ب. إطار البوابة",
    "C. WICKET GATE FRAME": "ج. إطار البوابة الصغيرة",
    "D. WELD MESH PANEL FOR GATE INFILL": "د. لوح شبكة ملحومة لحشو البوابة",
    "E. COIL SUPPORT FRAME": "هـ. إطار دعم الملف",
    "H. TOP AND BOTTOM HINGES": "ح. المفصلات العلوية والسفلية",
    "I. LOCK/HANDLE /ALDROP": "ط. قفل/مقبض/مزلاج",
    "F. PTCC – 850 MM DIAMETER/16 LOOPS/3.5MM CORE WIRE": "و. PTCC - قطر 850 مم/16 حلقة/سلك بقطر 3.5 مم",
    "G. FLAT WRAP (PTCC): 610 MM DIAMETER/10 LOOPS/3.50 MM CORE WIRE": "ز. لفة مسطحة (PTCC): قطر 610 مم/10 حلقات/سلك بقطر 3.50 مم",
  };
  
  return translations[name] || name;
} 