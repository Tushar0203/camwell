"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';
import React, { useState } from 'react';
import { getDictionaryClient, Locale } from '@/lib/client-dictionary';
import { useParams } from 'next/navigation';

const Brochure = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const params = useParams();
  const lang = params.lang as Locale;
  const isRtl = lang === 'ar';
  const [dictionary, setDictionary] = useState<any>({});
  
  React.useEffect(() => {
    const loadDictionary = async () => {
      const dict = await getDictionaryClient(lang);
      setDictionary(dict);
    };
    loadDictionary();
  }, [lang]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };
  
  // Wait for dictionary to load
  if (Object.keys(dictionary).length === 0) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden ${isRtl ? 'rtl' : 'ltr'}`}>
      
      <section className="relative min-h-[80vh] flex items-center py-20 overflow-hidden">
        {/* Image background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/fence-1.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Enhanced bottom blur gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-repeat bg-[length:200px_200px]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            >
              <span className="text-blue-100">{dictionary.brochure?.tagline}</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
            >
              {dictionary.brochure?.title.first} <span className="text-blue-200 decoration-blue-400/30 decoration-4 underline-offset-8">{dictionary.brochure?.title.highlight}</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
            >
              {dictionary.brochure?.subtitle}
            </motion.p>
            
          </motion.div>
        </div>
        
      </section>

      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className={`flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
              {/* Left side - Information section */}
              <div className={`lg:w-1/2 bg-gradient-to-br from-[#00a0dc] to-[#00a0dc] p-8 lg:p-10 text-white ${isRtl ? 'lg:rounded-s-2xl' : 'lg:rounded-e-2xl'}`}>
                <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-5"></div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <h3 className={`text-2xl font-bold mb-6 ${isRtl ? 'text-right' : 'text-left'}`}>{isRtl ? 'كتيب المنتج الخاص بنا' : 'Our Product Brochure'}</h3>
                  
                  <p className={`text-blue-100 mb-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {isRtl 
                      ? 'أكمل النموذج لاستلام كتيب المنتج الشامل الخاص بنا مع مواصفات مفصلة ومعلومات التسعير.'
                      : 'Complete the form to receive our comprehensive product brochure with detailed specifications and pricing information.'}
                  </p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <motion.div 
                      className={`flex items-center ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}
                      whileHover={{ x: isRtl ? -5 : 5 }}
                    >
                      <div className={`${isRtl ? 'ms-4' : 'me-4'}`}>
                        <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-blue-200" />
                        </div>
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          {isRtl ? 'مواصفات المنتج الكاملة والأبعاد' : 'Complete product specifications and dimensions'}
                        </p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className={`flex items-center ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}
                      whileHover={{ x: isRtl ? -5 : 5 }}
                    >
                      <div className={`${isRtl ? 'ms-4' : 'me-4'}`}>
                        <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-blue-200" />
                        </div>
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          {isRtl ? 'خيارات المواد وتفاصيل التخصيص' : 'Material options and customization details'}
                        </p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className={`flex items-center ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}
                      whileHover={{ x: isRtl ? -5 : 5 }}
                    >
                      <div className={`${isRtl ? 'ms-4' : 'me-4'}`}>
                        <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-blue-200" />
                        </div>
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          {isRtl ? 'إرشادات التركيب ونصائح الصيانة' : 'Installation guidelines and maintenance tips'}
                        </p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className={`flex items-center ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}
                      whileHover={{ x: isRtl ? -5 : 5 }}
                    >
                      <div className={`${isRtl ? 'ms-4' : 'me-4'}`}>
                        <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-blue-200" />
                        </div>
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          {isRtl ? 'دراسات الحالة وشهادات العملاء' : 'Case studies and customer testimonials'}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Right side - Form section */}
              <div className="lg:w-1/2 p-6 sm:p-8 md:p-10 bg-white relative overflow-hidden">
                {/* ... Pattern background remains the same ... */}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <h3 className={`text-xl sm:text-2xl font-semibold text-[#2d2d2d] mb-4 sm:mb-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {dictionary.brochure?.form.title}
                  </h3>
                  
                  {submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="h-full flex flex-col items-center justify-center text-center py-6 sm:py-10"
                    >
                      <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1
                        }}
                        className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6"
                      >
                        <Check size={40} className="text-green-600" />
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <h4 className="text-2xl font-bold text-[#2d2d2d] mb-2">{dictionary.brochure?.form.thankYou}</h4>
                        <p className="text-gray-600 mb-6">
                          {dictionary.brochure?.form.confirmation}
                        </p>
                        <Button 
                          onClick={() => setSubmitted(false)}
                          variant="outline"
                          className="mt-4"
                        >
                          {dictionary.brochure?.form.anotherRequest}
                        </Button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className={`space-y-4 sm:space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="fullName" className="text-gray-700 text-sm sm:text-base">
                            {dictionary.brochure?.form.fullName}
                          </Label>
                          <Input
                            type="text"
                            id="fullName"
                            placeholder={dictionary.brochure?.form.fullNamePlaceholder}
                            required
                            className={`border-gray-300 focus:border-blue-700 text-sm sm:text-base h-10 sm:h-11 ${isRtl ? 'text-right' : 'text-left'}`}
                            dir={isRtl ? "rtl" : "ltr"}
                          />
                        </div>
                        
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="email" className="text-gray-700 text-sm sm:text-base">
                            {dictionary.brochure?.form.email}
                          </Label>
                          <Input
                            type="email"
                            id="email"
                            placeholder={dictionary.brochure?.form.emailPlaceholder}
                            required
                            className="border-gray-300 focus:border-blue-700 text-sm sm:text-base h-10 sm:h-11"
                            dir="ltr" // Email is always LTR
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="phone" className="text-gray-700 text-sm sm:text-base">
                            {dictionary.brochure?.form.phone}
                          </Label>
                          <Input
                            type="tel"
                            id="phone"
                            placeholder={dictionary.brochure?.form.phonePlaceholder}
                            className="border-gray-300 focus:border-blue-700 text-sm sm:text-base h-10 sm:h-11"
                            dir="ltr" // Phone numbers are always LTR
                          />
                        </div>
                        
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="company" className="text-gray-700 text-sm sm:text-base">
                            {dictionary.brochure?.form.company}
                          </Label>
                          <Input
                            type="text"
                            id="company"
                            placeholder={dictionary.brochure?.form.companyPlaceholder}
                            className={`border-gray-300 focus:border-blue-700 text-sm sm:text-base h-10 sm:h-11 ${isRtl ? 'text-right' : 'text-left'}`}
                            dir={isRtl ? "rtl" : "ltr"}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="interest" className="text-gray-700 text-sm sm:text-base">
                          {dictionary.brochure?.form.products}
                        </Label>
                        <select
                          id="interest"
                          className={`w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all duration-200 text-sm sm:text-base ${isRtl ? 'text-right' : 'text-left'}`}
                          dir={isRtl ? "rtl" : "ltr"}
                        >
                          <option value="">{dictionary.brochure?.form.selectProduct}</option>
                          {dictionary.brochure?.form.productOptions.map((option: {value: string, label: string}, index: number) => (
                            <option key={index} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="message" className="text-gray-700 text-sm sm:text-base">
                          {dictionary.brochure?.form.requirements}
                        </Label>
                        <textarea
                          id="message"
                          rows={3}
                          maxLength={500}
                          className={`w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all duration-200 text-sm sm:text-base resize-none ${isRtl ? 'text-right' : 'text-left'}`}
                          placeholder={dictionary.brochure?.form.requirementsPlaceholder}
                          dir={isRtl ? "rtl" : "ltr"}
                        ></textarea>
                      </div>
                      
                      <div className="pt-2 sm:pt-4">
                        <Button
                          type="submit"
                          className="w-full text-white bg-gradient-to-r from-[#00a0dc] to-[#00a0dc] hover:from-[#00a0dc] hover:to-[#00a0dc] transition-all duration-300 h-10 sm:h-12 text-base sm:text-lg shadow-lg shadow-blue-700/20 cursor-pointer"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              {dictionary.brochure?.form.processing}
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              {dictionary.brochure?.form.requestButton}
                              <Send 
                                size={16} 
                                className={`sm:hidden ${isRtl ? 'transform rotate-180' : ''}`} 
                              />
                              <Send 
                                size={18} 
                                className={`hidden sm:block ${isRtl ? 'transform rotate-180' : ''}`} 
                              />
                            </div>
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:30px_30px]"></div>
        
        {/* Add floating shapes in background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        </div>

        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      
      <style>
        {`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(15px);
          }
          50% {
            transform: translateY(5px) translateX(-5px);
          }
          75% {
            transform: translateY(10px) translateX(10px);
          }
        }
        `}
      </style>
    </div>
  );
};

export default Brochure;