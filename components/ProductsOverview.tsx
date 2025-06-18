"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Package, ShieldCheck, Tags, Zap, FileText, Wrench, Clipboard, Loader } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import React from 'react';
import { Locale } from '@/lib/dictionary';

type ProductKey = 'borderFence' | 'fenceSwingGate';

type ProductDictionary = {
  sectionTitle: string;
  sectionDescription: string;
  borderFence: {
    name: string;
    description: string;
    features: string[];
    knowMore: string;
  };
  fenceSwingGate: {
    name: string;
    description: string;
    features: string[];
    knowMore: string;
  };
  keyFeatures: string;
};

// Default English dictionary
const defaultDictionary: ProductDictionary = {
  sectionTitle: "Our Product Range",
  sectionDescription: "Explore our comprehensive range of high-security fencing solutions designed for government and defense applications.",
  keyFeatures: "Key Features",
  borderFence: {
    name: "Border Fence System",
    description: "Advanced perimeter security solution designed for high-security installations and border protection.",
    features: [
      "Anti-climb and anti-cut design",
      "Corrosion resistant construction",
      "Optional sensor integration",
      "Rapid deployment capability"
    ],
    knowMore: "View Details"
  },
  fenceSwingGate: {
    name: "Security Swing Gates",
    description: "Heavy-duty access control gates compatible with our fencing systems for secure entry points.",
    features: [
      "Industrial-grade construction",
      "Automated operation options",
      "Integrated access control",
      "Crash-rated designs available"
    ],
    knowMore: "View Details"
  }
};

// Arabic dictionary
const arDictionary: ProductDictionary = {
  sectionTitle: "مجموعة منتجاتنا",
  sectionDescription: "استكشف مجموعتنا الشاملة من حلول الأسوار الأمنية عالية الجودة المصممة للتطبيقات الحكومية والدفاعية.",
  keyFeatures: "الميزات الرئيسية",
  borderFence: {
    name: "نظام سياج الحدود",
    description: "حل أمني متقدم للمحيط مصمم للمنشآت عالية الأمان وحماية الحدود.",
    features: [
      "تصميم مقاوم للتسلق والقطع",
      "بناء مقاوم للتآكل",
      "تكامل اختياري للمستشعرات",
      "قدرة نشر سريعة"
    ],
    knowMore: "عرض التفاصيل"
  },
  fenceSwingGate: {
    name: "بوابات أمنية متأرجحة",
    description: "بوابات تحكم بالوصول شديدة التحمل متوافقة مع أنظمة السياج لدينا لنقاط الدخول الآمنة.",
    features: [
      "بناء بجودة صناعية",
      "خيارات التشغيل الآلي",
      "التحكم المتكامل في الوصول",
      "تصاميم مقاومة للاصطدام متاحة"
    ],
    knowMore: "عرض التفاصيل"
  }
};

// ProductCard component for displaying individual products
const ProductCard = ({ 
  productKey, 
  dictionary, 
  icon 
}: { 
  productKey: ProductKey;
  dictionary: ProductDictionary;
  icon: React.ReactNode;
}) => {
  const router = useRouter();
  const params = useParams();
  const lang = params?.lang as Locale || 'en';
  const isRTL = lang === 'ar';
  
  // Choose the appropriate arrow based on direction
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  
  const handleClick = () => {
    if (productKey === 'borderFence') {
      router.push(`/${lang}/products/border-fence`);
    }
    if (productKey === 'fenceSwingGate') {
      router.push(`/${lang}/products/fence-swing-gate`);
    }
  };

  const product = dictionary[productKey];

  // Create a unique product ID
  const productId = productKey === 'borderFence' ? 'BF-7540' : 'SG-3862';

  return (
    <Card 
      className="card-industrial overflow-hidden group hover:cursor-pointer flex flex-col"
      onClick={handleClick}
    >
      <div className={`w-full h-58 relative overflow-hidden ${
        productKey === 'borderFence' 
          ? 'bg-[url("/images/fence-3.jpg")] bg-cover bg-center' 
          : productKey === 'fenceSwingGate' 
          ? 'bg-[url("/images/fence-swing-gates.jpg")] bg-cover bg-center' 
          : ''
      }`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        
        {/* Top technical info */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-3 bg-black/50 z-10 tech-specs">
          <div className="text-white text-xs flex items-center">
            <Clipboard size={12} className="mr-1" />
            <span>MODEL: {productId}</span>
          </div>
          <div className="text-white text-xs flex items-center">
            <FileText size={12} className="mr-1" />
            <span>REV.2.6</span>
          </div>
        </div>
        
        <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-white">
          <div className="card-icon-wrapper backdrop-blur-md p-4 mb-3 relative border border-white/20 rounded-sm">
            <div className="absolute top-[-3px] right-[-3px] w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-[-3px] left-[-3px] w-2 h-2 bg-green-500 rounded-full"></div>
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-1 text-center">{product.name}</h3>
        </div>
        
        {/* Bottom diagonal caution stripes */}
        <div className="absolute bottom-0 left-0 right-0 h-3 safety-stripes"></div>
      </div>
      
      <CardContent className={`p-6 ${isRTL ? 'text-right' : ''} flex-1 flex flex-col bg-steel relative`}>
        {/* Technical corner marker */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-industrial-blue clip-path-triangle"></div>
        
        <div className="industrial-ruler w-full mb-4"></div>
        
        {/* Specifications small table */}
        <div className="mb-3 bg-steel-100 px-2 py-1 border border-steel-300">
          <div className="flex justify-between text-xs tech-specs">
            <span className="text-steel-600">DUTY CLASS</span>
            <span className="text-industrial-blue font-semibold">HEAVY</span>
          </div>
          <div className="flex justify-between text-xs tech-specs">
            <span className="text-steel-600">MATERIAL</span>
            <span className="text-industrial-blue font-semibold">GALV. STEEL</span>
          </div>
        </div>
        
        <p className="text-steel-700 mb-5 min-h-[80px]">{product.description}</p>
        
        <div className="flex-1">
          <h4 className={`font-semibold text-industrial-blue mb-3 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Wrench size={18} className="text-industrial-blue" />
            {dictionary.keyFeatures}
          </h4>
          <ul className="industrial-list space-y-2 mb-4">
            {product.features.map((feature, index) => (
              <li key={index}>
                <span className="text-steel-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0 bg-steel">
        <div className="w-full flex flex-col gap-3">
          <div className="flex justify-between text-xs tech-specs">
            <div className="flex items-center">
              <Loader size={10} className="mr-1 text-green-600 rotate-gear" />
              <span className="text-green-600">STATUS: ACTIVE</span>
            </div>
            <span className="text-yellow-600">REF: {productId}</span>
          </div>
          <Button 
            variant={productKey === 'borderFence' ? 'industrial' : 'warning'} 
            className={`w-full transition-colors duration-300 flex items-center justify-center cursor-pointer ${isRTL ? 'flex-row-reverse' : ''} text-black`}
          >
            <span>{product.knowMore}</span>
            <ArrowIcon size={16} className={`${isRTL ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'} transition-transform duration-300`} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

// Main ProductsOverview component
const ProductsOverview = ({ dictionary }: { dictionary?: ProductDictionary }) => {
  const params = useParams();
  const lang = params?.lang as Locale || 'en';
  
  // Choose dictionary based on language
  let dict = dictionary;
  if (!dict) {
    dict = lang === 'ar' ? arDictionary : defaultDictionary;
  }
  
  const products = [
    {
      key: 'borderFence' as const,
      icon: <Package size={36} strokeWidth={1.5} className="text-white" />
    },
    {
      key: 'fenceSwingGate' as const,
      icon: <Zap size={36} strokeWidth={1.5} className="text-white" />
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Industrial background with blueprint */}
      <div className="absolute inset-0 bg-blueprint opacity-20"></div>
      
      {/* Safety stripes at top */}
      <div className="absolute top-0 left-0 right-0 h-3 safety-stripes"></div>
      
      <div className="container mx-auto px-4 relative pt-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 border-4 border-industrial-blue">
          <Loader size={24} className="text-industrial-blue rotate-gear" />
        </div>
        
        {/* Large gear background elements */}
        <div className="absolute top-1/4 right-10 bg-gear opacity-30" style={{ transform: 'scale(2)' }}></div>
        <div className="absolute bottom-20 left-10 bg-gear opacity-30" style={{ transform: 'scale(1.5)' }}></div>
        
        <div className={`text-center mb-16 ${lang === 'ar' ? 'rtl' : ''}`}>
          {/* Technical section number */}
          <div className="text-xs text-steel-500 mb-1 tech-specs">SECTION 02</div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-steel-800 mb-4">{dict.sectionTitle}</h2>
          
          <p className="text-steel-600 max-w-2xl mx-auto industrial-border p-4">
            {dict.sectionDescription}
          </p>
          
          {/* Technical specs */}
          <div className="flex justify-center gap-6 mt-6 mb-8">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-industrial-blue"></div>
              <span className="text-xs font-mono text-steel-600">MILITARY-GRADE</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-600"></div>
              <span className="text-xs font-mono text-steel-600">ISO 9001</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-yellow-500"></div>
              <span className="text-xs font-mono text-steel-600">WEATHER-RESISTANT</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-7xl px-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              productKey={product.key}
              dictionary={dict}
              icon={product.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
