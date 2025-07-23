"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLoading } from './LoadingProvider';
import Image from 'next/image';

const LoadingScreen = () => {
  const { isLoading, setIsLoading } = useLoading();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(progressTimer);
  }, [isLoading, setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Image
              src="/images/Camwell-Logo.png"
              alt="Camwell Industries Logo"
              width={240}
              height={96}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
            <p className="text-lg text-steel-600 text-center mt-4 tracking-wider">
              INDUSTRIAL SECURITY
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-steel-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full bg-industrial-blue rounded-full"
            />
          </div>

          {/* Loading Dots */}
          <div className="flex space-x-1 mt-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="w-2 h-2 bg-steel-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;