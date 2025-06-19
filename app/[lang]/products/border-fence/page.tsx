'use client';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronRight,
  ChevronLeft,
  Download,
  Package,
  Shield,
  X
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { Locale } from '@/lib/dictionary';

// Import the new styled table component
import SpecificationsTableStyled from "@/components/SpecificationsTableStyled";

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
import { borderFenceComponents, componentSpecifications } from '@/data/borderFenceComponents';

interface Component {
  title: string;
  description: string;
  specs?: string[];
  specifications?: { label: string; value: string }[];
  url: string;
  category?: string;
}

interface PartModalProps {
  component: Component | null;
  isOpen: boolean;
  onClose: () => void;
  isRTL: boolean;
}

// Helper function to translate component category
function translateComponentCategory(category: string, isRTL: boolean): string {
  if (!isRTL) return category;
  
  const categoryTranslations: Record<string, string> = {
    "Primary Structure": "الهيكل الأساسي",
    "Fastening System": "نظام التثبيت",
    "Security Enhancement": "تعزيز الأمان",
    "Hardware & Accessories": "الأجهزة والملحقات"
  };
  
  return categoryTranslations[category] || category;
}

// Updated PartModal component with RTL support
const PartModal = ({ component, isOpen, onClose, isRTL }: PartModalProps) => {
  // Reference to store the original scroll position
  const originalScrollPosition = useRef(0);
  const isMobile = useRef(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      isMobile.current = window.innerWidth < 640;
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Handle modal open/close effects
  useEffect(() => {
    if (isOpen) {
      // Store the current scroll position when opening
      originalScrollPosition.current = window.pageYOffset;
      
      // Disable scrolling on the body
      document.body.style.overflow = 'hidden';
      
      // On mobile, scroll to top for better modal viewing
      if (isMobile.current) {
        window.scrollTo(0, 0);
      }
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Custom close handler to prevent scroll jumps
  const handleClose = () => {
    onClose();
  };

  // Extract the description from the component
  const getDescriptionText = () => {
    if (!component || !component.description) return "";
    return component.description;
  };

  if (!component) return null;
  
  // Choose appropriate arrow based on direction
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  
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
              <div className="bg-[#1a5d90] p-4 sm:p-5 relative flex items-center rounded-none sm:rounded-t-xl">
                {/* Image thumbnail - only show on larger screens */}
                <div className={`hidden sm:block bg-white rounded-lg h-16 w-16 ${isRTL ? 'ml-4' : 'mr-4'} p-1 shadow-sm`}>
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
                    {component.category ? translateComponentCategory(component.category, isRTL) : (isRTL ? 'الهيكل الأساسي' : 'Primary Structure')}
                  </div>
                  
                  {/* Title */}
                  <h2 className={`text-xl font-bold text-white leading-tight ${isRTL ? 'pl-8' : 'pr-8'} font-[Poppins]`}>
                    {component.title}
                  </h2>
                </div>
                
                {/* Close button */}
                <button 
                  onClick={handleClose}
                  className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} rounded-full p-1.5 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer`}
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Content - scrollable with improved mobile spacing */}
              <div className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="p-4 sm:p-6">
                  {/* Dimensions & Standards section with improved mobile spacing */}
                  <div className="mb-4">
                    <h3 className={`text-gray-700 text-xl sm:text-2xl font-semibold mb-2 font-[Poppins] ${isRTL ? "text-right" : ""}`}>
                      {isRTL ? "الأبعاد والمعايير:" : "Dimensions & Standards:"}
                    </h3>
                    <p className={`text-gray-700 text-sm sm:text-base mb-4 font-[Poppins] leading-relaxed ${isRTL ? "text-right" : ""}`}>
                      {getDescriptionText()}
                    </p>
                    
                    {/* Specifications table with responsive design */}
                    {component.specifications && component.specifications.length > 0 ? (
                      <div className="bg-white rounded-lg">
                        <div className="hidden sm:block">
                          <SpecificationsTableStyled specifications={component.specifications} isRTL={isRTL} />
                        </div>
                        <div className="sm:hidden space-y-4">
                          {component.specifications.map((spec, index) => (
                            <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                              <div className={`text-[#1a5d90] font-medium text-sm mb-1 ${isRTL ? "text-right" : ""}`}>{spec.label}</div>
                              <div className={`text-gray-700 text-sm ${isRTL ? "text-right" : ""}`}>{spec.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    
                    {/* Back button - RTL aware */}
                    <div className={`mt-6 w-full flex ${isRTL ? "justify-start" : "justify-end"}`}>
                      <Button variant="ghost" className={`flex items-center text-sm text-[#1576ae] hover:text-[#1a5d90] p-0 ${isRTL ? "flex-row-reverse" : ""}`} onClick={handleClose}>
                        <ArrowIcon className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
                        <span>{isRTL ? "رجوع" : "Back"}</span>
                      </Button>
                    </div>
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

// Helper function to translate component names to Arabic
function translateComponentName(name: string, isRTL: boolean): string {
  if (!isRTL) return name;
  
  const translations: Record<string, string> = {
    "WELD MESH PANEL": "لوحة شبكة ملحومة",
    "FENCE (CHS) POST": "عمود سياج (CHS)",
    "ANCHOR ROD": "قضيب التثبيت",
    "STRUT (CHS) POST WITH ACCESSORIES": "عمود دعامة (CHS) مع ملحقات",
    "OMEGA CLAMP WITH PROFILE COVER PLATE": "مشبك أوميجا مع لوح غطاء",
    "INTERMEDIATE PANEL (IP) BINDER": "رابط اللوحات الوسيطة (IP)",
    "CORNER CLAMP": "مشبك زاوية",
    "STRAINING Y ARM": "ذراع Y للتثبيت",
    "INTERMEDIATE Y-ARM": "ذراع Y وسيطة",
    "PTCC PUNCHED TAPE CONCERTINA COIL": "ملف الأسلاك الشائكة (PTCC)",
    "RAZOR WIRE TAPE": "شريط الأسلاك الشائكة",
    "HOG RINGS": "حلقات التثبيت",
    "TIE WIRE FOR RAZOR TAPE": "سلك ربط للشريط الشائك",
    "EYE BOLT FOR STRAINING Y-ARM": "مسمار عين لذراع Y",
    "M8X120MM MUSHROOM HEAD BOLT, NUT & WASHER": "مسمار M8X120MM مع صامولة وحلقة",
    "M8X75MM MUSHROOM HEAD BOLT, NUT & WASHER": "مسمار M8X75MM مع صامولة وحلقة",
    "M8X60MM MUSHROOM HEAD BOLT, NUT & WASHER": "مسمار M8X60MM مع صامولة وحلقة",
    "M8X35MM MUSHROOM HEAD BOLT, NUT & WASHER": "مسمار M8X35MM مع صامولة وحلقة",
  };
  
  return translations[name] || name;
}

// Helper function to translate component specifications to Arabic
function translateSpecification(spec: { label: string; value: string }, isRTL: boolean): { label: string; value: string } {
  if (!isRTL) return spec;
  
  // Translate labels
  const labelTranslations: Record<string, string> = {
    "Panel size": "حجم اللوحة",
    "Mesh Size": "حجم الشبكة",
    "Weld Shear strength": "قوة قص اللحام",
    "Mesh Wire": "سلك الشبكة",
    "Tensile Strength of wire": "قوة شد السلك",
    "V-Shape notch": "شق على شكل V",
    "Overlapping of panels": "تداخل الألواح",
    "Panel weight": "وزن اللوحة",
    "Galvanizing of wire": "جلفنة السلك",
    "Coating": "طلاء",
    "Dual Powder coating": "طلاء مزدوج بالبودرة",
    "Thermoplastic coating": "طلاء بلاستيكي حراري",
    "Corrosion Coating Standard": "معيار طلاء مقاومة التآكل",
    "Color": "اللون",
    "Quantity per KM": "الكمية لكل كيلومتر",
    "Type": "النوع",
    "Outer Diameter": "القطر الخارجي",
    "Thickness": "سماكة",
    "Length": "طول",
    "Base coating": "طلاء أساسي",
    "Corrosion Coating Standards": "معايير طلاء مقاومة التآكل",
    "Material": "مادة",
    "Diameter": "قطر",
    "Corner Clamp": "مشبك زاوية",
    "W clamp": "مشبك W",
    "Cody clamp": "مشبك كودي",
    "Weight": "وزن",
    "Galvanizing": "جلفنة",
    "Concertina Coil": "لفة كونسرتينا",
    "Coil Diameter": "قطر اللفة",
    "Weight of coil": "وزن اللفة",
    "Steel Tape Dimensions": "أبعاد الشريط الفولاذي",
    "Blade Thickness": "سمك الشفرة",
    "Blade Length": "طول الشفرة",
    "Blade Profile": "ملف الشفرة",
    "Material of Clip": "مادة المشبك",
    "Core Wire Diameter": "قطر السلك الأساسي",
    "Core Wire": "السلك الأساسي",
  };
  
  const label = labelTranslations[spec.label] || spec.label;
  
  // For values, we'll do simple replacements for common terms and specific translations for certain values
  let value = spec.value;
  
  // Complete translations for specific values
  const exactValueTranslations: Record<string, string> = {
    "2667 mm × 955 mm (W x H), Tolerance of ± 2%.": "2667 مم × 955 مم (عرض × ارتفاع)، بتفاوت ± 2٪.",
    "76.2 mm × 3 mm × 12.7 mm × 2 mm (W × H).": "76.2 مم × 3 مم × 12.7 مم × 2 مم (عرض × ارتفاع).",
    "The average weld shear strength of 4 welds taken at random shall not be less than 50% of the breaking strength of the smallest wire (in this case the vertical wire).": "متوسط قوة قص اللحام لـ 4 لحامات تؤخذ عشوائيًا يجب ألا يقل عن 50٪ من قوة كسر السلك الأصغر (في هذه الحالة السلك العمودي).",
    "Galvanized MS wire conforming to requirements of IS 280-2006 as well as IS:7887. Wire diameter 4.0 mm (± 0.05mm).": "سلك MS مجلفن يتوافق مع متطلبات IS 280-2006 وكذلق IS:7887. قطر السلك 4.0 مم (± 0.05 مم).",
    "Min 550 N/sq.mm.": "الحد الأدنى 550 نيوتن/مم مربع.",
    "2 nos. per panel of depth 38 mm and width 107 mm and 100° angle.": "2 لكل لوحة بعمق 38 مم وعرض 107 مم وزاوية 100 درجة.",
    "75 mm overlap in horizontal direction and 167 mm overlap in vertical directions.": "تداخل بمقدار 75 مم في الاتجاه الأفقي و 167 مم تداخل في الاتجاه العمودي.",
    "24.30Kgs (± 5%).": "24.30 كجم (± 5٪).",
    "Hot dip galvanized coating, done as per IS:2629, shall have minimum mass of 60/100 GSM, as determined as per IS:6745. The coating shall conform to IS 4826.": "طلاء مجلفن بالغمر الساخن، وفقًا لمعيار IS:2629، بكتلة لا تقل عن 60/100 غرام/متر مربع، كما هو محدد وفقًا لـ IS:6745. يتوافق الطلاء مع معيار IS 4826.",
    "Depending upon the corrosion rating C4 or C5 of the environment, the panels can be coated in two different ways for C4 environment Dual powder coating is recommended and for C5 environment Thermoplastic coating is recommended.": "اعتمادًا على تصنيف التآكل C4 أو C5 للبيئة، يمكن طلاء الألواح بطريقتين مختلفتين: للبيئة C4 يوصى بالطلاء المزدوج بالبودرة، وللبيئة C5 يوصى بالطلاء البلاستيكي الحراري.",
    "The panels are dual coated with base coat of a primer powder and top coat with polyester powder with thickness of minimum120 μm for C4.": "يتم طلاء الألواح بطلاء مزدوج مع طبقة أساسية من مسحوق الأساس وطبقة علوية من مسحوق البوليستر بسمك لا يقل عن 120 ميكرون لبيئة C4.",
    "The panels are thermoplastic powder coated after fabrication on galvanized base with a minimum thickness of 300 μm for C5.": "يتم طلاء الألواح بمسحوق البلاستيك الحراري بعد التصنيع على قاعدة مجلفنة بسمك لا يقل عن 300 ميكرون لبيئة C5.",
    "EN 10245-1.": "EN 10245-1.",
    "RAL 6005.": "RAL 6005.",
    "1200 Pieces, the quantity suggested are based on flat ground.": "1200 قطعة، الكميات المقترحة تعتمد على أرض مسطحة.",
    "Circular Hollow Section, Specification – IS:1161-2014 (Medium Grade, YST – 210MPa/ 240MPa).": "قسم أجوف دائري، مواصفات – IS:1161-2014 (درجة متوسطة، YST – 210 ميجا باسكال / 240 ميجا باسكال).",
    "76.1 mm ±1%.": "76.1 مم ± 1٪.",
    "3.60 mm / 4.0 mm ±10%.": "3.60 مم / 4.0 مم ± 10٪.",
    "3400 mm ± 2%.": "3400 مم ± 2٪.",
    "Hot dip galvanized coating, done as per IS:2629, having minimum mass of 360 GSM, as determined as per IS:6745. The coating conforms to IS 4736.": "طلاء مجلفن بالغمر الساخن، وفقًا لـ IS:2629، بكتلة لا تقل عن 360 غرام/متر مربع، كما هو محدد وفقًا لـ IS:6745. يتوافق الطلاء مع معيار IS 4736.",
    "Thermoplastic Powder Coating on galvanized base after fabrication of minimum thickness of 250 μm for C4 / 400 μm for C5.": "طلاء مسحوق بلاستيكي حراري على قاعدة مجلفنة بعد التصنيع بسمك لا يقل عن 250 ميكرون لبيئة C4 / 400 ميكرون لبيئة C5.",
    "IS 13871.": "IS 13871.",
    "400 Pieces, the quantity suggested are based on flat ground.": "400 قطعة، الكميات المقترحة تعتمد على أرض مسطحة.",
    "MS Galvanized round bar.": "قضيب دائري مجلفن من الفولاذ.",
    "10mm.": "10 مم.",
    "250mm / 300mm as per pit size.": "250 مم / 300 مم حسب حجم الحفرة.",
    "802 Pieces.": "802 قطعة.",
    "Strut post is used at the starting and the end point of the fencing, this post gives an additional support to the corner fence post.": "يستخدم عمود الدعم في نقطة البداية ونهاية السياج، ويوفر هذا العمود دعمًا إضافيًا لعمود سياج الزاوية.",
    "2 Pieces, the quantity suggested are based on flat ground.": "2 قطعة، الكميات المقترحة تعتمد على أرض مسطحة.",
  };
  
  // Check if we have an exact match for this value
  if (exactValueTranslations[value]) {
    return { label, value: exactValueTranslations[value] };
  }
  
  // Replace common English phrases with Arabic equivalents
  const valueReplacements: Record<string, string> = {
    "pieces": "قطعة",
    "Tolerance of": "بتفاوت",
    "minimum": "كحد أدنى",
    "Maximum": "كحد أقصى",
    "The coating conforms to": "يتوافق الطلاء مع",
    "as per": "وفقًا لـ",
    "as determined as per": "كما هو محدد وفقًا لـ",
    "The average weld shear strength of": "متوسط قوة قص اللحام لـ",
    "having minimum mass of": "بحد أدنى للكتلة",
    "shall not be less than": "يجب ألا يقل عن",
    "taken at random": "تؤخذ عشوائيًا",
    "of the smallest wire": "للسلك الأصغر",
    "in this case the vertical wire": "في هذه الحالة السلك العمودي",
    "done as per": "تم وفقًا لـ",
    "With Accessories": "مع ملحقات",
    "Specification": "مواصفات",
    "The panels are": "اللوحات",
    "Pieces": "قطعة",
    "the quantity suggested are based on flat ground": "الكميات المقترحة تعتمد على أرض مسطحة",
    "for C4 environment": "لبيئة C4",
    "for C5 environment": "لبيئة C5",
    "Medium Grade": "درجة متوسطة",
    "minimum thickness of": "بسمك لا يقل عن",
    "after fabrication": "بعد التصنيع",
    "with thickness of": "بسمك",
    "As per customer requirement": "حسب متطلبات العميل",
    "diameter": "قطر",
    "diameter/": "قطر/",
    "loops/": "حلقة/",
    "core wire": "سلك أساسي",
    "round bar": "قضيب دائري",
    "mm": "مم",
    "GSM": "غرام/متر مربع",
    "N/sq.mm": "نيوتن/مم مربع",
    "angle": "زاوية",
  };
  
  // Apply replacements
  Object.entries(valueReplacements).forEach(([english, arabic]) => {
    value = value.replace(new RegExp(english, 'gi'), arabic);
  });
  
  return { label, value };
}

// Helper function to translate component description to Arabic
function translateDescription(description: string, isRTL: boolean): string {
  if (!isRTL) return description;
  
  // Map of English descriptions to Arabic translations
  const descriptionTranslations: Record<string, string> = {
    "Welded mesh panel is produced by electrical resistance welding of galvanized wires and subsequently they are either Dual Polyester powder coated or thermoplastic powder coated depending upon exposure of C4 or C5 environment.": 
    "يتم إنتاج لوحة الشبكة الملحومة عن طريق لحام المقاومة الكهربائية للأسلاك المجلفنة ثم يتم طلاؤها إما بطلاء مزدوج من مسحوق البوليستر أو طلاء بلاستيكي حراري حسب التعرض لبيئة C4 أو C5.",
    
    "Circular Hollow Section posts that provide the main structural support for the fence system.":
    "أعمدة القسم الأجوف الدائرية التي توفر الدعم الهيكلي الرئيسي لنظام السياج.",
    
    "Anchor rods are used to anchor the fence post in the Concrete using tie wire.":
    "تستخدم قضبان التثبيت لتثبيت أعمدة السياج في الخرسانة باستخدام سلك الربط.",
    
    "Strut post is used at the starting and the end point of the fencing, this post gives an additional support to the corner fence post.":
    "يستخدم عمود الدعم في نقطة البداية ونقطة النهاية للسياج، ويوفر هذا العمود دعمًا إضافيًا لعمود سياج الزاوية.",
    
    "These clamps are used to fix the mesh panels on the poles by using suitable fasteners. These clamps are used where the angle between two adjacent fencepost is less than 180° angle.":
    "تستخدم هذه المشابك لتثبيت لوحات الشبكة على الأعمدة باستخدام مثبتات مناسبة. تستخدم هذه المشابك حيث تكون الزاوية بين عمودي سياج متجاورين أقل من 180 درجة.",
    
    "Punched Tape Concertina Coil (PTCC) provides enhanced security at the top of the fence system.":
    "توفر لفة الأسلاك الشائكة المثقوبة (PTCC) أمانًا محسنًا في أعلى نظام السياج.",
    
    "To secure concertina coil with Razor tape wire.":
    "لتأمين لفة الأسلاك الشائكة مع سلك الشريط الشائك.",
    
    "Omega clamps are used to fix the mesh panels on the poles by using suitable fasteners. These clamps are used where the angle between two adjacent fencepost is 180° angle.":
    "تستخدم مشابك أوميجا لتثبيت لوحات الشبكة على الأعمدة باستخدام مثبتات مناسبة. تستخدم هذه المشابك حيث تكون الزاوية بين عمودي سياج متجاورين 180 درجة.",
  };
  
  return descriptionTranslations[description] || description;
}

// Main component
export default function BorderFencePage() {
  // Get language parameter
  const params = useParams();
  const lang = params?.lang as Locale || 'en';
  const isRTL = lang === 'ar';
  
  // Arrow icons based on language direction
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  // State for the selected component and modal
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Create a flat list of all components with their images
  const allComponents = Object.entries(borderFenceComponents).flatMap(
    ([category, items]) => items.map(item => ({
      name: item.name,
      imageUrl: item.imageUrl,
      category
    }))
  );
  
  // Function to handle component click
  const handleComponentClick = (name: string) => {
    // Find the component by name
    const component = Object.entries(componentSpecifications).find(
      ([key]) => key === name
    );
    
    if (component) {
      // Find which category this component belongs to
      const componentData = allComponents.find(item => item.name === name);
      const category = componentData?.category || '';
      
      // Create component object with specifications
      const [key, details] = component;
      setSelectedComponent({
        title: translateComponentName(key, isRTL),
        description: translateDescription(details.description, isRTL),
        specifications: details.specifications.map((spec: { label: string; value: string }) => translateSpecification(spec, isRTL)),
        url: componentData?.imageUrl || '',
        category
      });
    setIsModalOpen(true);
    }
  };

  // Function to close the modal
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
                  {isRTL ? "الأمن من الجيل القادم" : "Next-Generation Security"}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-8 leading-tight tracking-tight">
                {isRTL ? "سياج الحدود الجديد في الهند" : "India's New Border Fence"}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 px-2">
                {isRTL 
                  ? "حماية محيطية متقدمة تجمع بين المواد المتطورة والتكنولوجيا الذكية لتوفير أمان بلا مساومة في البيئات الأكثر تحديًا." 
                  : "Advanced perimeter protection combining cutting-edge materials with smart technology for uncompromised security in the most challenging environments."
                }
              </p>
              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                <Button className={`bg-white text-[#1a5d90] hover:bg-blue-50 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 font-medium ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Download className={`${isRTL ? "ml-2" : "mr-2"} h-4 w-4 sm:h-5 sm:w-5`} />
                  {isRTL ? "تحميل المواصفات" : "Download Specifications"}
                </Button>
                <Button variant="outline" className={`bg-transparent border-white/30 text-white hover:bg-white/10 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl transition-all duration-300 ${isRTL ? "flex-row-reverse" : ""}`}>
                  {isRTL ? "طلب استشارة" : "Request Consultation"}
                  <ChevronIcon className={`${isRTL ? "mr-1" : "ml-1"} h-4 w-4 sm:h-5 sm:w-5`} />
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
                { 
                  value: isRTL ? "0 إلى 99.8%" : "0 to 99.8%", 
                  label: isRTL ? "تقييم الأمان" : "Security Rating" 
                },
                { 
                  value: isRTL ? "0 إلى 25+ سنة" : "0 to 25+ Years", 
                  label: isRTL ? "المتانة" : "Durability" 
                },
                { 
                  value: isRTL ? "0 إلى 1,200 كم" : "0 to 1,200 km", 
                  label: isRTL ? "تم النشر" : "Deployed" 
                },
                { 
                  value: "ISO 9001", 
                  label: isRTL ? "معتمد" : "Certified" 
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#1576ae] mb-1 sm:mb-2">{stat.value}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Components Section - now showing all parts directly */}
      <section className="py-16 sm:py-20 md:py-24 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-50/60 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-[0.015]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-16">
            <span className="bg-blue-50 text-[#1576ae] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 inline-block shadow-sm">
              {isRTL ? "مكونات النظام" : "System Components"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {isRTL ? "عناصر الأمان المتقدمة" : "Advanced Security Elements"}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto px-2">
              {isRTL 
               ? "تم تصميم كل مكون وفقًا لأعلى المعايير، مما يضمن الحد الأقصى من الأمان والتكامل السلس داخل النظام الكامل."
               : "Each component is engineered to the highest standards, ensuring maximum security and seamless integration within the complete system."
              }
            </p>
          </div>

          <div className="container mx-auto px-4">
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
                  <div className={`flex flex-col sm:flex-row ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                    <div className="w-full sm:w-1/4 h-[160px] relative">
                      <Image
                        src={item.imageUrl || '/placeholder-image.jpg'}
                        alt={translateComponentName(item.name, isRTL)}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-contain p-4"
                        priority={idx < 6}
                      />
                    </div>
                    <div className={`w-full sm:w-3/4 p-4 sm:p-6 flex flex-col justify-between ${isRTL ? "text-right" : ""}`}>
                      <div>
                        <h4 className="text-[#1a5d90] font-medium text-lg sm:text-xl group-hover:text-[#1576ae]">
                          {translateComponentName(item.name, isRTL)}
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base mt-2">
                          {isRTL 
                            ? "مكون عالي الجودة لتعزيز الأمن والمتانة."
                            : "High-quality component for enhanced security and durability."
                          }
                        </p>
                      </div>
                      <div className={`mt-4 w-full flex ${isRTL ? "justify-end" : ""}`}>
                        <Button variant="ghost" className={`flex items-center text-sm text-[#1576ae] hover:text-[#1a5d90] p-0 ${isRTL ? "flex-row-reverse" : ""}`}>
                          <span>{isRTL ? "عرض التفاصيل" : "View Details"}</span>
                          <ArrowIcon className={`h-4 w-4 ${isRTL ? "mr-1" : "ml-1"}`} />
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

      {/* Technical Excellence Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-y-8 sm:gap-y-12 lg:gap-x-10 xl:gap-x-16 items-start ${isRTL ? "lg:flex lg:flex-row-reverse" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`${isRTL ? "text-right" : ""} lg:col-span-7`}
              >
                <span className="bg-blue-50 text-[#1576ae] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-6 inline-block">
                  {isRTL ? "حماية بمستوى عسكري" : "Military-Grade Protection"}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-6">
                  {isRTL ? "التميز التقني في كل التفاصيل" : "Technical Excellence in Every Detail"}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 sm:mb-8 leading-relaxed">
                  {isRTL
                    ? "يلبي نظام السياج الحدودي لدينا ويتجاوز معايير الأمان الدولية، مما يوفر دفاعًا قويًا ضد مختلف سيناريوهات التهديد مع تحمل أقسى الظروف البيئية."
                    : "Our border fence system meets and exceeds international security standards, providing a robust defense against various threat scenarios while withstanding the harshest environmental conditions."
                  }
                </p>
                
                <ul className={`space-y-4 mb-6 sm:mb-8 ${isRTL ? "text-right" : ""}`}>
                  <li className={`flex items-start ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className={`flex-shrink-0 mt-1 ${isRTL ? "ml-3" : "mr-3"}`}>
                      <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#1576ae]/10">
                        <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#1576ae]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium text-sm sm:text-base">
                        {isRTL ? "تصميم مضاد للتسلق والقطع" : "Anti-Climb & Anti-Cut Design"}
                      </h3>
                      <p className="text-gray-700 text-xs sm:text-sm mt-0.5 sm:mt-1">
                        {isRTL 
                          ? "نمط شبكي متخصص يمنع التسلق ويقاوم محاولات القطع، متوافق مع معايير ASTM F2781 للأمان"
                          : "Specialized mesh pattern prevents climbing and withstands cutting attempts, ASTM F2781 compliance tested"}
                      </p>
                    </div>
                  </li>
                  <li className={`flex items-start ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className={`flex-shrink-0 mt-1 ${isRTL ? "ml-3" : "mr-3"}`}>
                      <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#1576ae]/10">
                        <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#1576ae]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium text-sm sm:text-base">
                        {isRTL ? "تركيب سريع" : "Rapid Installation"}
                      </h3>
                      <p className="text-gray-700 text-xs sm:text-sm mt-0.5 sm:mt-1">
                        {isRTL 
                          ? "تصميم وحدات يسمح بنشر سريع على أي تضاريس، معدل تركيب 150 متر في اليوم لكل فريق"
                          : "Modular design allows for quick deployment in any terrain, 150 meters per day per team installation rate"}
                      </p>
                    </div>
                  </li>
                  <li className={`flex items-start ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className={`flex-shrink-0 mt-1 ${isRTL ? "ml-3" : "mr-3"}`}>
                      <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#1576ae]/10">
                        <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#1576ae]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium text-sm sm:text-base">
                        {isRTL ? "مقاوم للعوامل الجوية" : "Weather Resistant"}
                      </h3>
                      <p className="text-gray-700 text-xs sm:text-sm mt-0.5 sm:mt-1">
                        {isRTL 
                          ? "أداء مثالي في درجات حرارة قصوى من -40 درجة مئوية إلى 80 درجة مئوية، مع مقاومة للأشعة فوق البنفسجية وفقًا لمعيار ASTM G154"
                          : "Performs optimally in extreme temperatures from -40°C to 80°C with ASTM G154 UV resistance testing"}
                      </p>
                    </div>
                  </li>
                  <li className={`flex items-start ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className={`flex-shrink-0 mt-1 ${isRTL ? "ml-3" : "mr-3"}`}>
                      <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#1576ae]/10">
                        <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#1576ae]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium text-sm sm:text-base">
                        {isRTL ? "متانة طويلة المدى" : "Long-Term Durability"}
                      </h3>
                      <p className="text-gray-700 text-xs sm:text-sm mt-0.5 sm:mt-1">
                        {isRTL 
                          ? "عمر خدمة يفوق 20 عامًا مع حد أدنى من متطلبات الصيانة، اختبار تآكل بمعيار ISO 9227 لمدة 1500+ ساعة"
                          : "20+ year service life with minimal maintenance requirements, 1,500+ hours ISO 9227 corrosion testing"}
                      </p>
                    </div>
                  </li>
                  <li className={`flex items-start ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className={`flex-shrink-0 mt-1 ${isRTL ? "ml-3" : "mr-3"}`}>
                      <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#1576ae]/10">
                        <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#1576ae]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium text-sm sm:text-base">
                        {isRTL ? "اختبار قوة التأثير" : "Impact Strength Testing"}
                      </h3>
                      <p className="text-gray-700 text-xs sm:text-sm mt-0.5 sm:mt-1">
                        {isRTL 
                          ? "يتجاوز اختبارات التأثير بمعيار EN 1627 مستوى RC4، ومقاومة للمركبات بوزن حتى 6.8 طن عند 40 كم/ساعة"
                          : "Exceeds EN 1627 RC4 level impact tests and resists vehicle impacts up to 6.8 tons at 40 km/h"}
                      </p>
                    </div>
                  </li>
                </ul>

                <div className={`flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 ${isRTL ? "justify-end" : ""}`}>
                  {['ISO 9001:2015', 'ISO 14001', 'ASTM F2781', 'CE', 'EN 1627'].map((cert, idx) => (
                    <span key={idx} className="bg-white border border-gray-200 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs font-medium text-gray-700 shadow-sm">
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative mt-6 lg:mt-0 lg:col-span-5"
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/images/fence-3.jpg" 
                    alt="Border Fence Technical Specifications" 
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white text-xs sm:text-sm font-medium">
                    {isRTL ? "حل أمني متكامل مع ميزات متقدمة" : "Integrated security solution with advanced features"}
                  </div>
                  
                  {/* Model and Spec labels */}
                  <div className="absolute top-0 left-0 right-0 flex justify-between text-[10px] sm:text-xs text-white">
                    <div className="bg-black/50 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1">
                      {isRTL ? "الموديل: CS-5280" : "MODEL: CS-5280"}
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1">
                      {isRTL ? "المواصفات: درجة عسكرية" : "SPEC: HEAVY-DUTY"}
                    </div>
                  </div>
                </div>
                
                {/* Reference code label */}
                <div className="w-full mt-3 sm:mt-4 bg-gray-100 border border-gray-200 rounded-lg p-1.5 sm:p-2 flex justify-between items-center text-[10px] sm:text-xs text-gray-500">
                  <div>{isRTL ? "نوع الاستعلام: استشارة" : "INQUIRY TYPE: CONSULTATION"}</div>
                  <div className="font-medium">{isRTL ? "المرجع: CS-1001-A" : "REF: CS-1001-A"}</div>
                </div>
                
                {/* Features box */}
                <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-4">
                  <div className="bg-white p-2 sm:p-4 rounded-lg shadow-md border border-gray-100">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-gray-100 rounded-lg p-1.5 sm:p-2 mr-2 sm:mr-3">
                        <div className="w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center">
                          <span className="text-[#1576ae] text-sm sm:text-base font-medium">15+</span>
                        </div>
                      </div>
                      <div>
                        <div className="uppercase text-[10px] sm:text-xs text-gray-500 font-medium mb-0.5 sm:mb-1">
                          {isRTL ? "الخبرة" : "Experience"}
                        </div>
                        <div className="text-xs sm:text-sm font-medium">
                          {isRTL ? "سنوات من الخبرة" : "Years of Experience"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 sm:p-4 rounded-lg shadow-md border border-gray-100">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-gray-100 rounded-lg p-1.5 sm:p-2 mr-2 sm:mr-3">
                        <div className="w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center">
                          <span className="text-[#1576ae] text-sm sm:text-base font-medium">500+</span>
                        </div>
                      </div>
                      <div>
                        <div className="uppercase text-[10px] sm:text-xs text-gray-500 font-medium mb-0.5 sm:mb-1">
                          {isRTL ? "المشاريع" : "Projects"}
                        </div>
                        <div className="text-xs sm:text-sm font-medium">
                          {isRTL ? "مشاريع مخصصة" : "Custom Projects"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section - improved for mobile */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-[#1576ae] to-[#1a5d90] text-white relative">
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
                  ? "تواصل مع خبراء الأمان لدينا لتصميم حل سياج حدودي مخصص يلبي متطلباتك الخاصة."
                  : "Connect with our security experts to design a custom border fence solution that meets your specific requirements."
                }
              </p>
              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                <Button className="bg-white text-[#1576ae] hover:bg-blue-50 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  {isRTL ? "طلب استشارة" : "Request a Consultation"}
                </Button>
                <Button variant="outline" className={`bg-transparent border-white/30 text-white hover:bg-white/10 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl transition-all duration-300 ${isRTL ? "flex-row-reverse" : ""}`}>
                  {isRTL ? "تحميل البروشور" : "Download Brochure"}
                  <Download className={`${isRTL ? "mr-2" : "ml-2"} h-4 w-4 sm:h-5 sm:w-5`} />
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
        isRTL={isRTL}
      />
    </div>
  );
}