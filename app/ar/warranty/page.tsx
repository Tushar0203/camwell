'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function WarrantyArabic() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
  };

  return (
    <div dir="rtl">
      <section className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              ضمان منتجات كامويل
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              نحن نقف وراء منتجاتنا بتغطية ضمان شاملة مصممة لتمنحك راحة البال.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-6 justify-center"
            >
              <Link 
                href="#standard-coverage" 
                className="px-8 py-4 bg-[#1576ae] opacity-80 text-white rounded-lg font-medium hover:bg-[#1576ae]/90 transition-colors"
              >
                عرض التغطية
              </Link>
              <Link 
                href="/ar/contact" 
                className="px-8 py-4 bg-[#1e293a] opacity-80 text-white rounded-lg font-medium backdrop-blur-sm hover:bg-[#1e293b]/80 transition-colors border border-[#1576ae]/20"
              >
                الاتصال بالدعم
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Standard Coverage Section */}
      <section id="standard-coverage" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">تغطية الضمان القياسية</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-[#1576ae]">ضمان المنتج الأساسي</h3>
                <p className="text-gray-700 mb-4">
                  تأتي جميع منتجات كامويل مع ضمان قياسي لمدة 5 سنوات ضد عيوب التصنيع والمواد.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>تغطية شاملة للعيوب الهيكلية</li>
                  <li>ضمان ضد التآكل والصدأ المبكر</li>
                  <li>دعم فني مجاني طوال فترة الضمان</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-[#1576ae]">ضمان الطلاء والتشطيب</h3>
                <p className="text-gray-700 mb-4">
                  نقدم ضمانًا لمدة 10 سنوات على طلاء وتشطيب منتجاتنا ضد التقشير والتشقق والتلاشي.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>حماية ضد الأشعة فوق البنفسجية والتعرض للعوامل الجوية</li>
                  <li>مقاومة للتآكل في البيئات القاسية</li>
                  <li>الحفاظ على المظهر الجمالي على المدى الطويل</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1576ae]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              هل أنت مستعد لمعرفة المزيد عن خيارات الضمان لدينا؟
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              فريقنا متاح للإجابة على أي أسئلة حول تغطية الضمان لحلول السياج الأمني الخاصة بك.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/downloads/warranty-document.pdf" 
                className="inline-flex items-center px-6 py-3 bg-white text-[#1576ae] rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Download className="w-5 h-5 ml-2" />
                تحميل شروط الضمان
              </Link>
              <Link 
                href="/ar/contact" 
                className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}