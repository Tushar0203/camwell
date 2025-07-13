"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { borderFenceComponents } from '@/data/borderFenceComponents';
import { fenceSwingGatesComponents } from '@/data/fenceSwingGatesComponents';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = ({ dictionary }: { dictionary: any }) => {
  const productTranslationMap: { [key: string]: string } = {
    "WELD MESH PANEL": "WELD_MESH_PANEL",
    "FENCE (CHS) POST": "FENCE_CHS_POST",
    "ANCHOR ROD": "ANCHOR_ROD",
    "STRUT (CHS) POST WITH ACCESSORIES": "STRUT_CHS_POST_WITH_ACCESSORIES",
    "OMEGA CLAMP WITH PROFILE COVER PLATE": "OMEGA_CLAMP_WITH_PROFILE_COVER_PLATE",
    "INTERMEDIATE PANEL (IP) BINDER": "INTERMEDIATE_PANEL_IP_BINDER",
    "CORNER CLAMP": "CORNER_CLAMP",
    "STRAINING Y ARM": "STRAINING_Y_ARM",
    "INTERMEDIATE Y-ARM": "INTERMEDIATE_Y_ARM",
    "PTCC PUNCHED TAPE CONCERTINA COIL": "PTCC_PUNCHED_TAPE_CONCERTINA_COIL",
    "RAZOR WIRE TAPE": "RAZOR_WIRE_TAPE",
    "HOG RINGS": "HOG_RINGS",
    "TIE WIRE FOR RAZOR TAPE": "TIE_WIRE_FOR_RAZOR_TAPE",
    "EYE BOLT FOR STRAINING Y-ARM": "EYE_BOLT_FOR_STRAINING_Y_ARM",
    "M8X120MM MUSHROOM HEAD BOLT, NUT & WASHER": "M8X120MM_MUSHROOM_HEAD_BOLT_NUT_WASHER",
    "M8X75MM MUSHROOM HEAD BOLT, NUT & WASHER": "M8X75MM_MUSHROOM_HEAD_BOLT_NUT_WASHER",
    "M8X60MM MUSHROOM HEAD BOLT, NUT & WASHER": "M8X60MM_MUSHROOM_HEAD_BOLT_NUT_WASHER",
    "M8X35MM MUSHROOM HEAD BOLT, NUT & WASHER": "M8X35MM_MUSHROOM_HEAD_BOLT_NUT_WASHER",
    "A. GATE POST": "A_GATE_POST",
    "B. GATE FRAME": "B_GATE_FRAME",
    "C. WICKET GATE FRAME": "C_WICKET_GATE_FRAME",
    "D. WELD MESH PANEL FOR GATE INFILL": "D_WELD_MESH_PANEL_FOR_GATE_INFILL",
    "E. COIL SUPPORT FRAME": "E_COIL_SUPPORT_FRAME",
    "H. TOP AND BOTTOM HINGES": "H_TOP_AND_BOTTOM_HINGES",
    "I. LOCK/HANDLE /ALDROP": "I_LOCK_HANDLE_ALDROP",
    "F. PTCC – 850 MM DIAMETER/16 LOOPS/3.5MM CORE WIRE": "F_PTCC_850_MM_DIAMETER_16_LOOPS_3_5MM_CORE_WIRE",
    "G. FLAT WRAP (PTCC): 610 MM DIAMETER/10 LOOPS/3.50 MM CORE WIRE": "G_FLAT_WRAP_PTCC_610_MM_DIAMETER_10_LOOPS_3_50_MM_CORE_WIRE"
  };

  const allProducts = [
    ...Object.values(borderFenceComponents).flat(),
    ...Object.values(fenceSwingGatesComponents).flat()
  ];

  const getTranslatedProductName = (productName: string) => {
    const key = productTranslationMap[productName];
    return dictionary.gallery?.productNames?.[key] || productName;
  };

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % allProducts.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + allProducts.length) % allProducts.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'ArrowRight') {
          nextImage(e as any);
        } else if (e.key === 'ArrowLeft') {
          prevImage(e as any);
        } else if (e.key === 'Escape') {
          closeModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            {dictionary.gallery?.title || 'Product Gallery'}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {dictionary.gallery?.description || 'Browse our wide range of products'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {allProducts.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden group cursor-pointer border border-gray-100 transition-all duration-300"
              onClick={() => openModal(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.03 }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: '0px 20px 40px rgba(0,0,0,0.1)' 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-full h-36 sm:h-40 lg:h-44 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-3 sm:p-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="transition-all duration-500 group-hover:scale-110 z-10 relative"
                />
              </div>
              <div className="p-3 sm:p-4 lg:p-5">
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 text-center leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {getTranslatedProductName(product.name)}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                key={selectedImage}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative flex items-center justify-center bg-white rounded-lg sm:rounded-xl shadow-2xl p-2 sm:p-4 lg:p-6"
                onClick={(e) => e.stopPropagation()}
                style={{ 
                  maxWidth: '95vw', 
                  maxHeight: '95vh', 
                  width: 'auto', 
                  height: 'auto' 
                }}
              >
                <img
                  src={allProducts[selectedImage].imageUrl}
                  alt={allProducts[selectedImage].name}
                  className="w-auto h-auto max-w-full max-h-full rounded-lg object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white text-center p-3 sm:p-4 rounded-b-lg sm:rounded-b-xl">
                  <p className="text-sm sm:text-base lg:text-lg font-medium">
                    {getTranslatedProductName(allProducts[selectedImage].name)}
                  </p>
                </div>
              </motion.div>

              {/* Close button */}
              <button 
                onClick={closeModal} 
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
              >
                <X size={20} strokeWidth={2} className="sm:w-6 sm:h-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 sm:left-4 bg-black md:bg-white/20 md:backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft size={24} strokeWidth={2} className="sm:w-8 sm:h-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 bg-black md:bg-white/20 md:backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
              >
                <ChevronRight size={24} strokeWidth={2} className="sm:w-8 sm:h-8" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 text-white text-xs sm:text-sm">
                {selectedImage + 1} / {allProducts.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;