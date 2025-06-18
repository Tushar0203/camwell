'use client';
import ProductsOverview from '@/components/ProductsOverview';
import { Locale } from '@/lib/dictionary';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Shield, Truck, Zap, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

export default function Products() {
  const params = useParams();
  const router = useRouter();
  const lang = params?.lang as Locale || 'en';
  const isRTL = lang === 'ar';
  
  // Ref for products section
  const productsRef = useRef<HTMLDivElement>(null);
  
  // Function to scroll to products section
  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Choose the appropriate arrow based on direction
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div>
      {/* Hero Section - Redesigned for visual impact */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/fence-3.jpg')`,
            filter: 'brightness(0.7)', // Adjusted brightness for better text visibility
          }}
        ></div>
        
        {/* Content container */}
        <div className="container mx-auto px-4 relative z-10 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-6 py-3 bg-black/50 backdrop-blur-md rounded-full text-base font-medium mb-10 text-white shadow-lg">
              {isRTL ? "منتجاتنا الأمنية" : "Welcome to Our Products"}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {isRTL ? "منتجاتنا" : "SECURITY PRODUCTS"}
            </h1>
            
            <div className="max-w-3xl mx-auto mb-14">
              <p className="text-lg md:text-xl text-white leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                {isRTL 
                  ? "استكشف مجموعتنا الشاملة من حلول سياج الأمان عالية الجودة المصممة لتوفير أقصى درجات الحماية والمتانة والأداء في أي بيئة."
                  : "Leading provider of high-quality security fencing solutions, committed to excellence and innovation."}
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center"
            >
              <Button 
                onClick={scrollToProducts}
                className={`bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-3 text-base font-medium rounded-full shadow-md flex items-center gap-2 cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <span>{isRTL ? "تصفح المنتجات" : "Browse Products"}</span>
                <ArrowIcon className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom features bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm py-5">
          <div className="container mx-auto flex flex-wrap justify-center md:justify-center gap-x-12 md:gap-x-24 gap-y-4 text-white">
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Shield className="h-5 w-5 text-white" />
              <span className="text-sm md:text-base">{isRTL ? "جودة معتمدة" : "Certified Quality"}</span>
            </div>
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Truck className="h-5 w-5 text-white" />
              <span className="text-sm md:text-base">{isRTL ? "توصيل لكافة المناطق" : "Nationwide Delivery"}</span>
            </div>
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Zap className="h-5 w-5 text-white" />
              <span className="text-sm md:text-base">{isRTL ? "تركيب احترافي" : "Expert Installation"}</span>
            </div>
          </div>
        </div>
      </section>
      
      <div ref={productsRef}>
        <ProductsOverview />
      </div>
      
      {/* Custom Solutions Section */}
      <section className="py-16 md:py-24 bg-steel-50 relative">
        {/* Industrial background with blueprint */}
        <div className="absolute inset-0 bg-blueprint opacity-10"></div>
        
        {/* Safety stripes at top */}
        <div className="absolute top-0 left-0 right-0 h-3 safety-stripes"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-industrial-blue/90 px-4 py-1 text-white text-xs tracking-wider mb-4 uppercase tech-specs">
              {isRTL ? "حلول مخصصة" : "Custom Solutions"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-steel-800 mb-4">{isRTL ? "حلول أمنية مخصصة" : "Tailored Security Solutions"}</h2>
            <div className="industrial-ruler w-48 mx-auto mb-6"></div>
            <p className="text-steel-600 max-w-3xl mx-auto industrial-border p-4">
              {isRTL 
                ? "لا تجد بالضبط ما تحتاجه؟ نقوم بتصميم وتصنيع حلول أمنية مخصصة لتلبية متطلباتك المحددة وظروف الموقع."
                : "Can't find exactly what you need? We design and manufacture custom security solutions to meet your specific requirements and site conditions."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {/* Expert Consultation */}
              <div className="bg-steel p-5 border-l-4 border-industrial-blue shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-steel-200 rounded-sm flex items-center justify-center border border-steel-300">
                    <Shield className="text-industrial-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-steel-800 mb-2 flex items-center gap-2">
                      <span>{isRTL ? "استشارات خبراء" : "Expert Consultation"}</span>
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </h3>
                    <p className="text-steel-600">
                      {isRTL
                        ? "يقوم متخصصو الأمان لدينا بإجراء مسوحات شاملة للموقع وتقديم توصيات فنية مفصلة مصممة وفقًا لاحتياجاتك المحددة."
                        : "Our security specialists conduct comprehensive site surveys and provide detailed technical recommendations tailored to your specific needs."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Custom Manufacturing */}
              <div className="bg-steel p-5 border-l-4 border-industrial-blue shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-steel-200 rounded-sm flex items-center justify-center border border-steel-300">
                    <Wrench className="text-industrial-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-steel-800 mb-2 flex items-center gap-2">
                      <span>{isRTL ? "تصنيع مخصص" : "Custom Manufacturing"}</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </h3>
                    <p className="text-steel-600">
                      {isRTL
                        ? "تتيح لنا قدرات التصنيع المتقدمة إنشاء منتجات وفقًا لمواصفاتك الدقيقة، مما يضمن التناسب المثالي والأداء الأمثل."
                        : "Advanced manufacturing capabilities allow us to create products to your exact specifications, ensuring perfect fit and optimal performance."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Installation */}
              <div className="bg-steel p-5 border-l-4 border-industrial-blue shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-steel-200 rounded-sm flex items-center justify-center border border-steel-300">
                    <Zap className="text-industrial-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-steel-800 mb-2 flex items-center gap-2">
                      <span>{isRTL ? "تركيب احترافي" : "Professional Installation"}</span>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </h3>
                    <p className="text-steel-600">
                      {isRTL
                        ? "تضمن فرق التركيب المعتمدة لدينا الإعداد المناسب والموثوقية على المدى الطويل مع إدارة شاملة للمشروع من البداية إلى النهاية."
                        : "Our certified installation teams ensure proper setup and long-term reliability with comprehensive project management from start to finish."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats with industrial design */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-steel-100 border border-steel-300 p-4">
                  <div className="flex justify-between text-xs tech-specs mb-2">
                    <span className="text-steel-600">EXPERIENCE</span>
                    <span className="text-industrial-blue font-semibold">VALIDATED</span>
                  </div>
                  <p className="text-3xl font-bold text-industrial-blue mb-1">15+</p>
                  <p className="text-steel-700 text-sm">{isRTL ? "سنوات من الخبرة" : "Years of Experience"}</p>
                </div>
                <div className="bg-steel-100 border border-steel-300 p-4">
                  <div className="flex justify-between text-xs tech-specs mb-2">
                    <span className="text-steel-600">PROJECTS</span>
                    <span className="text-industrial-blue font-semibold">COMPLETED</span>
                  </div>
                  <p className="text-3xl font-bold text-industrial-blue mb-1">500+</p>
                  <p className="text-steel-700 text-sm">{isRTL ? "مشاريع مخصصة منجزة" : "Custom Projects Delivered"}</p>
                </div>
              </div>
            </div>

            <div className="flex h-full">
              <div className="relative overflow-hidden border-4 border-steel-300 shadow-lg w-full flex flex-col">
                {/* Tech spec overlay */}
                <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-3 bg-black/50 z-10 tech-specs">
                  <div className="text-white text-xs flex items-center">
                    <span>MODEL: CS-5200</span>
                  </div>
                  <div className="text-white text-xs flex items-center">
                    <span>SPEC: HEAVY-DUTY</span>
                  </div>
                </div>
                
                <div className="flex-1 relative min-h-[300px]">
                  <img 
                    src="/images/fence-2.jpg" 
                    alt={isRTL ? "حلول أمنية مخصصة" : "Custom Security Solutions"} 
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                
                {/* Bottom panel */}
                <div className="bg-black/70 p-4 mt-auto">
                  <h3 className="text-white text-xl font-bold mb-1">
                    {isRTL ? "مصممة للتميز" : "Engineered for Excellence"}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {isRTL ? "كل حل مصمم وفقًا لمواصفاتك الدقيقة" : "Each solution custom built to exact specifications"}
                  </p>
                </div>
                
                {/* Bottom diagonal caution stripes */}
                <div className="h-2 safety-stripes"></div>
              </div>
            </div>
          </div>

          {/* CTA with industrial style */}
          <div className="mt-16 max-w-5xl mx-auto border border-steel-300 bg-steel-50">
            {/* Top technical bar */}
            <div className="flex justify-between items-center px-4 py-2 bg-steel-100 border-b border-steel-300 tech-specs text-xs">
              <span className="text-steel-600">INQUIRY TYPE: CONSULTATION</span>
              <span className="text-industrial-blue font-mono">REF: CS-1001-A</span>
            </div>
            
            {/* Main content with industrial styling */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6">
              <div className="flex items-start gap-4">
                <div className="w-1 h-16 bg-industrial-blue"></div>
                <div>
                  <h3 className="text-xl font-bold text-steel-800 uppercase">
                    {isRTL ? "جاهزون لتأمين موقعك؟" : "Ready to secure your site?"}
                  </h3>
                  <p className="text-steel-600 mt-2">
                    {isRTL ? "اتصل بنا اليوم للحصول على استشارة مجانية" : "Contact us today for a free consultation and technical assessment."}
                  </p>
                </div>
              </div>
              <div className="ml-0 md:ml-4">
                <Button 
                  onClick={() => router.push(`/${lang}/contact`)}
                  className={`bg-[#FFD600] hover:bg-[#FFE44D] text-black font-bold px-6 py-4 text-base tracking-wide border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span className="uppercase">{isRTL ? "تواصل مع فريق الحلول المخصصة" : "Contact Our Team"}</span>
                  <ArrowIcon className="h-5 w-5" strokeWidth={2.5} />
                </Button>
              </div>
            </div>
            
            {/* Bottom safety stripe */}
            <div className="h-2 safety-stripes"></div>
          </div>
        </div>
      </section>
    </div>
  );
} 