'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Locale } from '@/lib/dictionary';

const scrollbarHideStyles = `
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
`;

export default function DeepGuardModularFencePage() {
  const params = useParams();
  const lang = params?.lang as Locale || 'en';
  const isRTL = lang === 'ar';
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <style jsx global>{scrollbarHideStyles}</style>
      <style jsx global>{` html { scroll-behavior: smooth; } `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/fence-5.jpg')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 opacity-15 bg-[url('/pattern.png')] bg-repeat bg-[length:200px_200px] sm:bg-[length:300px_300px] z-20" />
          <div className="absolute top-1/4 left-1/4 h-40 sm:h-64 w-40 sm:w-64 rounded-full bg-blue-400/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 h-48 sm:h-80 w-48 sm:w-80 rounded-full bg-purple-400/10 blur-3xl animate-pulse delay-1000" />
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
                <span className="px-4 sm:px-6 py-2 sm:py-2.5 bg-amber-500/90 backdrop-blur-sm text-white rounded-full text-sm sm:text-base font-medium">
                  {isRTL ? 'قريباً' : 'Coming Soon'}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-8 leading-tight tracking-tight">
                {isRTL ? 'سياج موديولار الحماية العميقة' : 'Deep Guard Modular Fence'}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10 px-2">
                {isRTL
                  ? 'أنظمة سياج نمطية متقدمة للحماية المحيطية. نعمل على إطلاق هذه الصفحة قريباً.'
                  : "Advanced modular fencing systems for perimeter protection. We're launching this page soon."}
              </p>
              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Button variant="outline" className={`bg-transparent border-white/30 text-white hover:bg-white/10 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`} asChild>
                  <Link href={`/${lang}/contact`} className="flex items-center">
                    {isRTL ? 'طلب استشارة' : 'Request Consultation'}
                    <ChevronIcon className={`${isRTL ? 'mr-1' : 'ml-1'} h-4 w-4 sm:h-5 sm:w-5`} />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-20 bg-gradient-to-b from-transparent to-white/5 z-30" />
      </section>

      {/* Coming Soon Message */}
      <section className="py-16 sm:py-24 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2d2d2d] mb-4">
                {isRTL ? 'هذه الصفحة قيد الإنشاء' : 'This Page Is Under Construction'}
              </h2>
              <p className="text-gray-600">
                {isRTL
                  ? 'نحن نعمل على إضافة معلومات وتفاصيل حول سياج Deep Guard النمطي. تواصل معنا لمعرفة المزيد أو طلب استشارة.'
                  : "We're adding details about our Deep Guard modular fence. Get in touch to learn more or request a consultation."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-[#00a0dc] to-[#00a0dc] text-white relative">
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-5" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3)_0%,transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                {isRTL ? 'هل أنت جاهز لتأمين محيطك؟' : 'Ready to Secure Your Perimeter?'}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-10 max-w-2xl mx-auto">
                {isRTL
                  ? 'تواصل مع خبراء الأمان لدينا لتصميم حل سياج حدودي مخصص يلبي متطلباتك الخاصة.'
                  : 'Connect with our security experts to design a custom border fence solution that meets your specific requirements.'}
              </p>
              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Button className="bg-white text-[#00a0dc] hover:bg-blue-50 px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300" asChild>
                  <Link href={`/${lang}/contact`}>{isRTL ? 'طلب استشارة' : 'Request a Consultation'}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
