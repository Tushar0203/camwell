'use client';
import ProductsOverview from '@/components/ProductsOverview';
import { Locale } from '@/lib/dictionary';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Shield, Truck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

export default function Products() {
  const params = useParams();
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
            filter: 'brightness(0.4)',
          }}
        ></div>
        
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2d69]/90 via-[#1a2d69]/70 to-[#1a2d69]/90"></div>
        
        {/* Large circle overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-[150%] h-[150%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[60px] border-[#2743a2]/30 rounded-full"
          ></div>
        </div>
        
        {/* Content container with blue gradient */}
        <div className="container mx-auto px-4 relative z-10 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-[-60px]"
          >
            <div className="inline-block px-5 py-2 bg-[#2f54c8]/30 backdrop-blur-sm text-blue-100 rounded-full text-sm font-medium mb-10">
              {isRTL ? "حلول أمنية ممتازة" : "Premium Security Solutions"}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8">
              {isRTL ? "أمّن محيطك" : "Secure Your Perimeter"}
              <br />
              <span className="text-[#a1c4ff]">{isRTL ? "بتميّز" : "With Excellence"}</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-14">
              <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed">
                {isRTL 
                  ? "استكشف مجموعتنا الشاملة من حلول سياج الأمان عالية الجودة المصممة لتوفير أقصى درجات الحماية والمتانة والأداء في أي بيئة."
                  : "Explore our comprehensive range of high-quality security fencing solutions engineered for maximum protection, durability, and performance in any environment."}
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
                className={`bg-[#0078ff] hover:bg-[#0066dd] text-white px-8 py-3 text-lg rounded-md shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <span>{isRTL ? "تصفح المنتجات" : "Browse Products"}</span>
                <ArrowIcon className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom features bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0c1a3d]/90 backdrop-blur-sm py-5">
          <div className="container mx-auto flex flex-wrap justify-center md:justify-center gap-x-12 md:gap-x-24 gap-y-4 text-blue-100">
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Shield className="h-5 w-5 text-[#5d9fff]" />
              <span className="text-sm md:text-base">{isRTL ? "جودة معتمدة" : "Certified Quality"}</span>
            </div>
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Truck className="h-5 w-5 text-[#5d9fff]" />
              <span className="text-sm md:text-base">{isRTL ? "توصيل لكافة المناطق" : "Nationwide Delivery"}</span>
            </div>
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Zap className="h-5 w-5 text-[#5d9fff]" />
              <span className="text-sm md:text-base">{isRTL ? "تركيب احترافي" : "Expert Installation"}</span>
            </div>
          </div>
        </div>
      </section>
      
      <div ref={productsRef}>
        <ProductsOverview />
      </div>
      
      {/* Custom Solutions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              {isRTL ? "حلول مخصصة" : "Custom Solutions"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {isRTL ? "حلول أمنية مخصصة" : "Tailored Security Solutions"}
            </h3>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              {isRTL 
                ? "لا تجد بالضبط ما تحتاجه؟ نقوم بتصميم وتصنيع حلول أمنية مخصصة لتلبية متطلباتك المحددة وظروف الموقع."
                : "Can't find exactly what you need? We design and manufacture custom security solutions to meet your specific requirements and site conditions."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-10">
                {/* Expert Consultation */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {isRTL ? "استشارات خبراء" : "Expert Consultation"}
                  </h3>
                  <p className="text-gray-600">
                    {isRTL
                      ? "يقوم متخصصو الأمان لدينا بإجراء مسوحات شاملة للموقع وتقديم توصيات فنية مفصلة مصممة وفقًا لاحتياجاتك المحددة."
                      : "Our security specialists conduct comprehensive site surveys and provide detailed technical recommendations tailored to your specific needs."}
                  </p>
                </div>

                {/* Custom Manufacturing */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {isRTL ? "تصنيع مخصص" : "Custom Manufacturing"}
                  </h3>
                  <p className="text-gray-600">
                    {isRTL
                      ? "تتيح لنا قدرات التصنيع المتقدمة إنشاء منتجات وفقًا لمواصفاتك الدقيقة، مما يضمن التناسب المثالي والأداء الأمثل."
                      : "Advanced manufacturing capabilities allow us to create products to your exact specifications, ensuring perfect fit and optimal performance."}
                  </p>
                </div>

                {/* Professional Installation */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {isRTL ? "تركيب احترافي" : "Professional Installation"}
                  </h3>
                  <p className="text-gray-600">
                    {isRTL
                      ? "تضمن فرق التركيب المعتمدة لدينا الإعداد المناسب والموثوقية على المدى الطويل مع إدارة شاملة للمشروع من البداية إلى النهاية."
                      : "Our certified installation teams ensure proper setup and long-term reliability with comprehensive project management from start to finish."}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-blue-600">15+</p>
                    <p className="text-gray-600 mt-2">{isRTL ? "سنوات من الخبرة" : "Years of Experience"}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-blue-600">500+</p>
                    <p className="text-gray-600 mt-2">{isRTL ? "مشاريع مخصصة منجزة" : "Custom Projects Delivered"}</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/fence-2.jpg" 
                  alt={isRTL ? "حلول أمنية مخصصة" : "Custom Security Solutions"} 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold mb-2">
                    {isRTL ? "مصممة للتميز" : "Engineered for Excellence"}
                  </h3>
                  <p className="text-white/90">
                    {isRTL ? "كل حل مصمم وفقًا لمواصفاتك الدقيقة" : "Every solution built to your exact specifications"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Button 
              className={`bg-blue-500 hover:bg-blue-600 transition-colors text-white px-8 py-6 text-lg rounded-md shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <span>{isRTL ? "تواصل مع فريق الحلول المخصصة" : "Contact Our Custom Solutions Team"}</span>
              <ArrowIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 