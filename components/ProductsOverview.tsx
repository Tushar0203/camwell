"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Package, ShieldCheck, Tags, Zap } from 'lucide-react';
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

  return (
    <Card 
      className="premium-card shine-effect overflow-hidden group hover:cursor-pointer border-0 shadow-lg h-full w-full max-w-md flex flex-col"
      onClick={handleClick}
    >
      <div className={`w-full h-58 relative overflow-hidden ${
        productKey === 'borderFence' 
          ? 'bg-[url("/images/fence-3.jpg")] bg-cover bg-center' 
          : productKey === 'fenceSwingGate' 
          ? 'bg-[url("/images/fence-swing-gates.jpg")] bg-cover bg-center' 
          : ''
      }`}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-white">
          <div className="card-icon-wrapper bg-white/20 backdrop-blur-md rounded-full p-4 mb-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-1 text-center">{product.name}</h3>
        </div>
      </div>
      
      <CardContent className={`p-6 ${isRTL ? 'text-right' : ''} flex-1 flex flex-col`}>
        <p className="text-gray-600 mb-5 min-h-[80px]">{product.description}</p>
        
        <div className="flex-1">
          <h4 className={`font-semibold text-industrial-blue mb-3 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <ShieldCheck size={18} />
            {dictionary.keyFeatures}
          </h4>
          <ul className="space-y-2 mb-4">
            {product.features.map((feature, index) => (
              <li key={index} className={`flex items-start gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-industrial-blue mt-1">
                  <Tags size={14} />
                </span>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          variant="default" 
          className={`w-full bg-[#1576ae] text-white hover:bg-industrial-blue/90 group-hover:bg-industrial-blue group-hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <span>{product.knowMore}</span>
          <ArrowIcon size={16} className={`${isRTL ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'} transition-transform duration-300`} />
        </Button>
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
      icon: <Package size={36} strokeWidth={1.5} />
    },
    {
      key: 'fenceSwingGate' as const,
      icon: <Zap size={36} strokeWidth={1.5} />
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${lang === 'ar' ? 'rtl' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">{dict.sectionTitle}</h2>
          <div className="w-24 h-1 bg-industrial-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {dict.sectionDescription}
          </p>
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
