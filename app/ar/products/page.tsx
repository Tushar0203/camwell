'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Package, Shield, ShieldCheck, Tags, Truck, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

const containerVariants: Variants = {
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

const itemVariants: Variants = {
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

export default function ProductsArabic() {
  const router = useRouter();
  
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Same component structure as the English version but with Arabic text direction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-industrial-blue rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">استشارة خبيرة</h3>
                <p className="text-gray-600 leading-relaxed">
                  يقوم متخصصو الأمن لدينا بإجراء مسوحات شاملة للموقع وتقديم
                  حلول مخصصة تلبي متطلباتك الأمنية الفريدة.
                </p>
              </div>
            </div>
            {/* Additional content would go here */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}