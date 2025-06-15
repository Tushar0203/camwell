'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Check, Download, FileText, Mail, Phone, User } from "lucide-react";
import { useState } from "react";

const Brochure = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-card shadow-2xl overflow-hidden rounded-2xl sm:rounded-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Right side - Info section (in RTL this will appear on the right) */}
            <div className="bg-gradient-to-br from-[#1a5d90] to-[#1576ae] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1.5" fill="#fff" />
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
                </svg>
              </div>
              
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6">احصل على كتيب منتجاتنا</h3>
                <p className="text-blue-100 mb-8 text-sm sm:text-base">
                  اكتشف مجموعتنا الكاملة من حلول الأسوار الأمنية عالية الجودة في كتيب منتجاتنا المفصل.
                </p>
                
                <h4 className="text-lg font-semibold mb-4">ماذا ستجد في الداخل:</h4>
                
                <ul className="space-y-4 sm:space-y-6">
                  {[
                    "مواصفات المنتج الكاملة والأبعاد",
                    "خيارات المواد وتفاصيل التخصيص",
                    "إرشادات التركيب ونصائح الصيانة",
                    "دراسات الحالة وشهادات العملاء"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <span className="inline-flex items-center justify-center bg-blue-500/30 backdrop-blur-sm border border-blue-300/30 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full ml-3 flex-shrink-0">
                        <Check size={14} className="sm:hidden" />
                        <Check size={16} className="hidden sm:block" />
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Left side - Form (in RTL this will appear on the left) */}
            <div className="bg-white p-6 sm:p-8 md:p-10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">أدخل التفاصيل الخاصة بك</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">الاسم الأول</Label>
                      <Input 
                        id="firstName" 
                        placeholder="أدخل اسمك الأول" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">اسم العائلة</Label>
                      <Input 
                        id="lastName" 
                        placeholder="أدخل اسم العائلة" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <div className="relative">
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="أدخل بريدك الإلكتروني" 
                        required 
                      />
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <div className="relative">
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="أدخل رقم هاتفك" 
                      />
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#1576ae] hover:bg-[#0f5a8a] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        جاري المعالجة...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Download className="mr-2" size={18} />
                        طلب الكتيب
                      </span>
                    )}
                  </Button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">تم إرسال طلبك!</h3>
                  <p className="text-gray-600 mb-8">
                    سيتم إرسال كتيب المنتج إلى بريدك الإلكتروني قريبًا.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="border-[#1576ae] text-[#1576ae] hover:bg-[#1576ae] hover:text-white"
                 