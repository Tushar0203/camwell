'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Zap, Wrench, Shield, Bolt, Battery } from 'lucide-react';
import { FaBullseye, FaCheckCircle, FaClock, FaUsers, FaCog, FaIndustry, FaBolt, FaHardHat } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Locale } from '@/lib/dictionary';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: { 
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    y: 20, 
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    }
  }
};

// Translations object
const translations = {
  en: {
    welcomeToOurStory: "Welcome to Our Story",
    aboutCamwell: "About Camwell Industries",
    companyDescription: "Leading provider of high-quality security fencing solutions in India, committed to excellence and innovation.",
    certifiedQuality: "Certified Quality",
    nationwideDelivery: "Nationwide Delivery",
    expertInstallation: "Expert Installation",
    ourMission: "Our Mission",
    missionDescription: "To provide innovative, high-quality security fencing solutions that enhance safety and security for our customers while delivering exceptional value and service.",
    ourVision: "Our Vision",
    visionDescription: "To be the most trusted and preferred provider of security fencing solutions in India, recognized for our commitment to quality, innovation, and customer satisfaction.",
    whatDrivesUs: "What Drives Us",
    ourCoreValues: "Our Core Values",
    coreValuesDescription: "These principles guide everything we do at Camwell Industries.",
    quality: "Quality",
    qualityDescription: "We never compromise on the quality of our materials and craftsmanship, ensuring every product meets our rigorous standards.",
    customerFocus: "Customer Focus",
    customerFocusDescription: "Our customers' needs and satisfaction are at the core of everything we do, driving our decisions and innovations.",
    innovation: "Innovation",
    innovationDescription: "We continuously strive to improve our products and processes, embracing new technologies and methodologies.",
    reliability: "Reliability",
    reliabilityDescription: "We deliver on our promises, every time, with products that stand the test of time and exceed expectations.",
    ourStory: "Our Story",
    ourJourney: "Our Journey",
    journeyDescription: "Since our establishment, Camwell Industries has been at the forefront of security fencing innovation in India. We've grown from a small local provider to one of the most trusted names in high-security fencing solutions, serving government, defense, and commercial clients across the country."
  },
  ar: {
    welcomeToOurStory: "مرحباً بكم في قصتنا",
    aboutCamwell: "عن شركة كامويل للصناعات",
    companyDescription: "مزود رائد لحلول الأسوار الأمنية عالية الجودة في الهند، ملتزم بالتميز والابتكار.",
    certifiedQuality: "جودة معتمدة",
    nationwideDelivery: "توصيل في جميع أنحاء البلاد",
    expertInstallation: "تركيب خبير",
    ourMission: "مهمتنا",
    missionDescription: "تقديم حلول مبتكرة وعالية الجودة للأسوار الأمنية التي تعزز السلامة والأمن لعملائنا مع تقديم قيمة وخدمة استثنائية.",
    ourVision: "رؤيتنا",
    visionDescription: "أن نكون المزود الأكثر ثقة وتفضيلاً لحلول الأسوار الأمنية في الهند، معروفين بالتزامنا بالجودة والابتكار ورضا العملاء.",
    whatDrivesUs: "ما يحركنا",
    ourCoreValues: "قيمنا الأساسية",
    coreValuesDescription: "هذه المبادئ توجه كل ما نقوم به في شركة كامويل للصناعات.",
    quality: "الجودة",
    qualityDescription: "لا نتنازل أبدًا عن جودة المواد والحرفية لدينا، مما يضمن أن كل منتج يلبي معاييرنا الصارمة.",
    customerFocus: "التركيز على العملاء",
    customerFocusDescription: "احتياجات عملائنا ورضاهم هي في صميم كل ما نقوم به، مما يدفع قراراتنا وابتكاراتنا.",
    innovation: "الابتكار",
    innovationDescription: "نسعى باستمرار لتحسين منتجاتنا وعملياتنا، واحتضان التقنيات والمنهجيات الجديدة.",
    reliability: "الموثوقية",
    reliabilityDescription: "نفي بوعودنا في كل مرة، بمنتجات تصمد أمام اختبار الزمن وتتجاوز التوقعات.",
    ourStory: "قصتنا",
    ourJourney: "رحلتنا",
    journeyDescription: "منذ تأسيسنا، كانت شركة كامويل للصناعات في طليعة ابتكارات الأسوار الأمنية في الهند. لقد نمونا من مزود محلي صغير إلى أحد أكثر الأسماء الموثوقة في حلول الأسوار عالية الأمان، ونخدم عملاء الحكومة والدفاع والقطاع التجاري في جميع أنحاء البلاد."
  }
};

export default function AboutPage() {
  const params = useParams();
  const lang = (params?.lang as Locale) || 'en';
  const isRTL = lang === 'ar';
  const t = translations[lang];
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className={`bg-white min-h-screen overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Industrial Hero Section with metal pattern background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Image background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/fence-2.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/30 backdrop-filter backdrop-brightness-75"></div>
          {/* Industrial metal mesh pattern */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1 }}
            className="absolute inset-0" 
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 10v10h10V10H10zM10 0v10H0V0h10z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E')",
              backgroundSize: '12px 12px'
            }}
          />
        </div>
        
        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-1 sm:py-2 bg-white/10 backdrop-blur-md border-t-0 border-x-0 border-b-2 border-[#00a0dc]"
            >
              <span className="text-blue-100 tracking-widest uppercase text-xs sm:text-sm font-medium">{t.welcomeToOurStory}</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight tracking-tight uppercase"
              style={{ fontFamily: "'DIN Condensed', 'Bebas Neue', sans-serif", letterSpacing: "1px" }}
            >
              {t.aboutCamwell}
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="flex justify-center mb-4 sm:mb-6"
            >
              <div className="w-20 sm:w-32 h-1 bg-[#00a0dc]"></div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-blue-50 max-w-3xl mx-auto mb-8 sm:mb-12 opacity-90 px-2"
              style={{lineHeight: "1.6"}}
            >
              {t.companyDescription}
            </motion.p>
            
            {/* Trust indicators with industrial bolts */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-10 sm:mt-16"
            >
              <div className={`flex items-center gap-2 sm:gap-3 justify-center ${isRTL ? 'flex-row-reverse' : ''} mb-3 sm:mb-0`}>
                <div className="p-1.5 sm:p-2 bg-[#00a0dc]/20 border border-[#00a0dc]/30">
                  <ShieldCheck size={18} className="text-blue-100" />
                </div>
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-blue-100">{t.certifiedQuality}</span>
              </div>
              <div className={`flex items-center gap-2 sm:gap-3 justify-center ${isRTL ? 'flex-row-reverse' : ''} mb-3 sm:mb-0`}>
                <div className="p-1.5 sm:p-2 bg-[#00a0dc]/20 border border-[#00a0dc]/30">
                  <Truck size={18} className="text-blue-100" />
                </div>
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-blue-100">{t.nationwideDelivery}</span>
              </div>
              <div className={`flex items-center gap-2 sm:gap-3 justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="p-1.5 sm:p-2 bg-[#00a0dc]/20 border border-[#00a0dc]/30">
                  <Zap size={18} className="text-blue-100" />
                </div>
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-blue-100">{t.expertInstallation}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Mission & Vision Section - Industrial Design */}
      <section className="py-20 md:py-28 px-4 sm:px-6 relative">
        {/* Industrial background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 10v10h10V10H10zM30 0h20v20H30V0zm10 10v10h10V10H40zM0 30h20v20H0V30zm10 10v10h10V10H10zM30 30h20v20H30V30zm10 10v10h10V10H40z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E')",
              backgroundSize: '30px 30px'
            }}
          />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative md:w-1/2 mb-10 md:mb-0"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#00a0dc]"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00a0dc]"></div>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00a0dc]"></div>
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#00a0dc]"></div>
              
              <div className={`bg-white p-6 sm:p-8 md:p-12 h-full flex flex-col ${isRTL ? 'text-right' : ''}`}>
                <div className={`flex items-center gap-3 sm:gap-4 mb-6 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 border-2 border-[#00a0dc] flex-shrink-0">
                    <FaCog className="w-6 h-6 sm:w-8 sm:h-8 text-[#00a0dc]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase tracking-wider">
                    {t.ourMission}
                  </h2>
                </div>
                <div className={`w-12 sm:w-16 h-[3px] bg-[#00a0dc] mb-6 sm:mb-8 ${isRTL ? 'mr-auto' : ''}`}></div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  {t.missionDescription}
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative md:w-1/2"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#00a0dc]"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00a0dc]"></div>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00a0dc]"></div>
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#00a0dc]"></div>
              
              <div className={`bg-white p-6 sm:p-8 md:p-12 h-full flex flex-col ${isRTL ? 'text-right' : ''}`}>
                <div className={`flex items-center gap-3 sm:gap-4 mb-6 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 border-2 border-[#00a0dc] flex-shrink-0">
                    <FaIndustry className="w-6 h-6 sm:w-8 sm:h-8 text-[#00a0dc]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase tracking-wider">
                    {t.ourVision}
                  </h2>
                </div>
                <div className={`w-12 sm:w-16 h-[3px] bg-[#00a0dc] mb-6 sm:mb-8 ${isRTL ? 'mr-auto' : ''}`}></div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  {t.visionDescription}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Industrial Design */}
      <section className="py-20 md:py-32 px-4 sm:px-6 relative">
        {/* Diamond plate background */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width='56' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23333' stroke-opacity='0.2' stroke-width='1'/%3E%3C/svg%3E')",
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-center mb-16 sm:mb-24 ${isRTL ? 'rtl' : ''}`}
          >
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#00a0dc] border-2 border-[#00a0dc]/20">
              <span className="text-white text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">{t.whatDrivesUs}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2d2d2d] mb-6 sm:mb-8 uppercase tracking-wide" 
                style={{ fontFamily: "'DIN Condensed', 'Bebas Neue', sans-serif", letterSpacing: "1px" }}>
              {t.ourCoreValues}
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-[#00a0dc] mx-auto mb-8 sm:mb-10"></div>
            <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto px-2">
              {t.coreValuesDescription}
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-x-px"
          >
            {/* Quality Card */}
            <motion.div 
              variants={fadeIn}
              className="group"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative overflow-hidden">
                {/* Shine effect on hover */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 -translate-x-full group-hover:translate-x-full transition-all duration-1000 z-10"></div>
                
                <div className={`bg-white p-6 sm:p-8 md:p-10 border border-gray-200 h-full flex flex-col ${isRTL ? 'text-right' : ''}`}>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-6 sm:mb-8 p-2.5 sm:p-3 bg-[#00a0dc] flex items-center justify-center">
                    <FaBolt className="text-white text-2xl sm:text-3xl" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 uppercase tracking-wide"
                    style={{ fontFamily: "'DIN Condensed', 'Bebas Neue', sans-serif" }}>
                    {t.quality}
                  </h3>
                  
                  <ul className={`text-gray-600 flex-grow text-sm sm:text-base leading-relaxed ${isRTL ? 'text-right pr-5 sm:pr-6' : 'pl-5 sm:pl-6'} space-y-2`}>
                    {t.qualityDescription.split('. ').map((sentence, idx) => (
                      sentence && (
                        <li key={idx} className="relative">
                          <div className={`absolute ${isRTL ? 'right-[-20px] sm:right-[-24px]' : 'left-[-20px] sm:left-[-24px]'} top-1.5 w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center`}>
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00a0dc] rotate-45"></div>
                          </div>
                          {sentence + (idx < t.qualityDescription.split('. ').length - 2 ? '.' : '')}
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Customer Focus Card */}
            <motion.div 
              variants={fadeIn}
              className="group"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative overflow-hidden">
                {/* Shine effect on hover */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 -translate-x-full group-hover:translate-x-full transition-all duration-1000 z-10"></div>
                
                <div className={`bg-white p-6 sm:p-8 md:p-10 border border-gray-200 h-full flex flex-col ${isRTL ? 'text-right' : ''}`}>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-6 sm:mb-8 p-2.5 sm:p-3 bg-[#00a0dc] flex items-center justify-center">
                    <FaUsers className="text-white text-2xl sm:text-3xl" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 uppercase tracking-wide"
                    style={{ fontFamily: "'DIN Condensed', 'Bebas Neue', sans-serif" }}>
                    {t.customerFocus}
                  </h3>
                  
                  <ul className={`text-gray-600 flex-grow text-sm sm:text-base leading-relaxed ${isRTL ? 'text-right pr-5 sm:pr-6' : 'pl-5 sm:pl-6'} space-y-2`}>
                    {t.customerFocusDescription.split('. ').map((sentence, idx) => (
                      sentence && (
                        <li key={idx} className="relative">
                          <div className={`absolute ${isRTL ? 'right-[-20px] sm:right-[-24px]' : 'left-[-20px] sm:left-[-24px]'} top-1.5 w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center`}>
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00a0dc] rotate-45"></div>
                          </div>
                          {sentence + (idx < t.customerFocusDescription.split('. ').length - 2 ? '.' : '')}
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Innovation Card */}
            <motion.div 
              variants={fadeIn}
              className="group"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative overflow-hidden">
                {/* Shine effect on hover */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 -translate-x-full group-hover:translate-x-full transition-all duration-1000 z-10"></div>
                
                <div className={`bg-white p-6 sm:p-8 md:p-10 border border-gray-200 h-full flex flex-col ${isRTL ? 'text-right' : ''}`}>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-6 sm:mb-8 p-2.5 sm:p-3 bg-[#00a0dc] flex items-center justify-center">
                    <FaBullseye className="text-white text-2xl sm:text-3xl" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 uppercase tracking-wide"
                    style={{ fontFamily: "'DIN Condensed', 'Bebas Neue', sans-serif" }}>
                    {t.innovation}
                  </h3>
                  
                  <ul className={`text-gray-600 flex-grow text-sm sm:text-base leading-relaxed ${isRTL ? 'text-right pr-5 sm:pr-6' : 'pl-5 sm:pl-6'} space-y-2`}>
                    {t.innovationDescription.split('. ').map((sentence, idx) => (
                      sentence && (
                        <li key={idx} className="relative">
                          <div className={`absolute ${isRTL ? 'right-[-20px] sm:right-[-24px]' : 'left-[-20px] sm:left-[-24px]'} top-1.5 w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center`}>
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00a0dc] rotate-45"></div>
                          </div>
                          {sentence + (idx < t.innovationDescription.split('. ').length - 2 ? '.' : '')}
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Reliability Card */}
            <motion.div 
              variants={fadeIn}
              className="group"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative overflow-hidden">
                {/* Shine effect on hover */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 -translate-x-full group-hover:translate-x-full transition-all duration-1000 z-10"></div>
                
                <div className={`bg-white p-6 sm:p-8 md:p-10 border border-gray-200 h-full flex flex-col ${isRTL ? 'text-right' : ''}`}>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-6 sm:mb-8 p-2.5 sm:p-3 bg-[#00a0dc] flex items-center justify-center">
                    <FaClock className="text-white text-2xl sm:text-3xl" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 uppercase tracking-wide"
                    style={{ fontFamily: "'DIN Condensed', 'Bebas Neue', sans-serif" }}>
                    {t.reliability}
                  </h3>
                  
                  <ul className={`text-gray-600 flex-grow text-sm sm:text-base leading-relaxed ${isRTL ? 'text-right pr-5 sm:pr-6' : 'pl-5 sm:pl-6'} space-y-2`}>
                    {t.reliabilityDescription.split('. ').map((sentence, idx) => (
                      sentence && (
                        <li key={idx} className="relative">
                          <div className={`absolute ${isRTL ? 'right-[-20px] sm:right-[-24px]' : 'left-[-20px] sm:left-[-24px]'} top-1.5 w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center`}>
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00a0dc] rotate-45"></div>
                          </div>
                          {sentence + (idx < t.reliabilityDescription.split('. ').length - 2 ? '.' : '')}
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company History Section - Industrial Design */}
      <section className="py-20 md:py-32 px-4 sm:px-6 relative bg-gray-100">
        {/* Chain-link background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 35h30v-10h-30zM5 15h10v30h-10zM45 15h10v30h-10z' fill='none' stroke='%23000000' stroke-opacity='0.3' stroke-width='1'/%3E%3C/svg%3E')",
              backgroundSize: '30px 30px'
            }}
          />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`md:w-1/2 ${isRTL ? 'md:order-2' : ''} border-2 border-[#00a0dc]/10 p-6 sm:p-8 bg-white mb-10 md:mb-0 w-full`}
            >
              <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#00a0dc] border border-[#00a0dc]/20">
                <span className="text-white text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">{t.ourStory}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-6 sm:mb-8 uppercase tracking-wide" 
                  style={{ fontFamily: "'DIN Condensed', 'Bebas Neue', sans-serif", letterSpacing: "1px" }}>
                {t.ourJourney}
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-[#00a0dc] mb-8 sm:mb-10"></div>
              <p className={`text-gray-700 leading-relaxed mb-8 text-base sm:text-lg ${isRTL ? 'text-right' : 'text-left'}`}>
                {t.journeyDescription}
              </p>

              <div className="flex">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#00a0dc]/10 border border-[#00a0dc]/30 flex items-center justify-center">
                  <Bolt className="text-[#00a0dc] w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#00a0dc]/5 border border-[#00a0dc]/20 flex items-center justify-center ml-3">
                  <Shield className="text-[#00a0dc] w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#00a0dc]/2 border border-[#00a0dc]/10 flex items-center justify-center ml-3">
                  <Wrench className="text-[#00a0dc] w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`md:w-1/2 ${isRTL ? 'md:order-1' : ''} w-full`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#00a0dc] transform -translate-x-2 translate-y-2 sm:-translate-x-4 sm:translate-y-4"></div>
                <img 
                  src="/images/fence-3.jpg" 
                  alt="Security Fence" 
                  className="w-full h-auto relative z-10 border-4 sm:border-8 border-white"
                />
                <div className="absolute top-0 left-0 w-full h-full border-8 sm:border-[16px] border-[#00a0dc]/5 transform translate-x-4 -translate-y-4 sm:translate-x-6 sm:-translate-y-6"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}