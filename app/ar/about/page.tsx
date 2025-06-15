'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Zap } from 'lucide-react';
import { FaBullseye, FaCheckCircle, FaClock, FaUsers } from 'react-icons/fa';

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

export default function AboutPageArabic() {
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
    <div dir="rtl">
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
          >
            <span className="text-blue-100">مرحبًا بكم في قصتنا</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
          >
            حول <span className="text-blue-200 decoration-blue-400/30 decoration-4 underline-offset-8">كامويل</span> للصناعات
          </motion.h1>
        </motion.div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="px-4 py-1 bg-[#1576ae] rounded-full text-white text-sm font-medium tracking-wider uppercase mb-6 inline-block">
            ما يحفزنا
          </span>
          <h2 className="text-5xl font-bold text-gray-800 mb-8">قيمنا الأساسية</h2>
          <div className="w-24 h-1 bg-[#1576ae] mx-auto mb-10"></div>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            هذه المبادئ توجه كل ما نقوم به في كامويل للصناعات.
          </p>
        </motion.div>
      </div>
    </div>
  );
}