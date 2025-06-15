'use client';

import { componentSpecifications } from '@/data/borderFenceComponents';
import { borderFenceComponents } from '@/data/borderFenceComponents';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Download, FileText, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BorderFenceArabic() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const router = useRouter();

  // Flatten all components into a single array for easier access
  const allComponents = [];
  Object.keys(borderFenceComponents).forEach(category => {
    borderFenceComponents[category].forEach(item => {
      allComponents.push(item);
    });
  });
  
  const handleComponentClick = (itemName: string) => {
    // Find the component specifications
    const specs = Object.keys(componentSpecifications).includes(itemName)
      ? componentSpecifications[itemName as keyof typeof componentSpecifications]
      : undefined;
    
    // Find the image URL by searching through all categories
    let imageUrl = '/placeholder-image.jpg';
    
    // Search through all categories to find the matching component
    Object.keys(borderFenceComponents).forEach(categoryKey => {
      const items = borderFenceComponents[categoryKey as keyof typeof borderFenceComponents];
      const foundItem = items.find(item => item.name === itemName);
      if (foundItem && foundItem.imageUrl) {
        imageUrl = foundItem.imageUrl;
      }
    });
    
    setSelectedComponent({
      name: itemName,
      specs: specs,
      imageUrl: imageUrl
    });
  };

  const closeModal = () => {
    setSelectedComponent(null);
  };

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage('');
  };

  // Function to translate category names to Arabic
  const translateCategory = (category: string) => {
    switch(category) {
      case "Primary Structure": return "الهيكل الأساسي";
      case "Fastening System": return "نظام التثبيت";
      case "Security Enhancement": return "تعزيزات الأمان";
      case "Hardware & Accessories": return "الأجهزة والملحقات";
      default: return category;
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <button 
              onClick={() => router.push('/ar/products')}
              className="flex items-center text-blue-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} className="ml-1" />
              <span>العودة إلى المنتجات</span>
            </button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">سياج الحدود الجديد في الهند</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              نظام سياج أمني متطور مصمم خصيصًا لتأمين الحدود الوطنية بأعلى مستويات الحماية والمتانة.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/ar/contact?product=border-fence" 
                className="px-6 py-3 bg-[#1576ae] text-white rounded-lg font-medium hover:bg-[#1576ae]/90 transition-colors"
              >
                طلب عرض سعر
              </Link>
              <Link 
                href="/downloads/border-fence-brochure.pdf" 
                className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                <FileText size={18} className="ml-2" />
                تحميل الكتيب
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">نظرة عامة على المنتج</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <Image 
                  src="/products/border-fence-overview.jpg" 
                  alt="Border Fence Overview" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <p className="text-gray-700 mb-6">
                  سياج الحدود الجديد في الهند هو نظام سياج أمني متطور مصمم خصيصًا لتأمين الحدود الوطنية. يجمع بين المتانة الاستثنائية والتصميم المبتكر لتوفير حاجز أمني فعال ضد التسلل.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="text-[#1576ae] mt-1 ml-2" />
                    <span>مصنوع من فولاذ عالي القوة مع طلاء مقاوم للتآكل</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#1576ae] mt-1 ml-2" />
                    <span>تصميم نمطي يسمح بالتركيب السريع والصيانة السهلة</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#1576ae] mt-1 ml-2" />
                    <span>مقاومة عالية للعوامل الجوية القاسية والتخريب</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#1576ae] mt-1 ml-2" />
                    <span>متوافق مع أنظمة المراقبة والاستشعار المتقدمة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">مكونات النظام</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            انقر على أي مكون لعرض المواصفات التفصيلية والمعلومات الفنية.
          </p>
          
          {/* Component Categories */}
          <div className="mb-12">
            {Object.keys(borderFenceComponents).map((category) => (
              <div key={category} className="mb-10">
                <h3 className="text-xl font-semibold mb-6 text-[#1576ae] border-b border-gray-200 pb-2">
                  {translateCategory(category)}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {borderFenceComponents[category].map((item) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                      onClick={() => handleComponentClick(item.name)}
                    >
                      <div className="h-48 relative">
                        <Image
                          src={item.imageUrl || '/placeholder-image.jpg'}
                          alt={item.name}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                      <div className="p-4 border-t border-gray-100">
                        <h4 className="font-medium text-center">
                          {item.name}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* All Components in List View */}
          <h3 className="text-2xl font-semibold mb-6 text-center">جميع المكونات</h3>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {allComponents.map((item, idx) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group relative border border-blue-100 cursor-pointer"
                  onClick={() => handleComponentClick(item.name)}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/4 h-[160px] relative">
                      <Image
                        src={item.imageUrl || '/placeholder-image.jpg'}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-contain p-4"
                        priority={idx < 6}
                      />
                    </div>
                    <div className="w-full sm:w-3/4 p-6">
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-[#1576ae] transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="ml-1">انقر لعرض المواصفات</span>
                        <ChevronRight size={16} className="text-[#1576ae] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-[#1e293b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">تحميل المواصفات الكاملة</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            احصل على المواصفات الفنية الكاملة والرسومات التفصيلية لنظام سياج الحدود الجديد في الهند.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link 
              href="/downloads/border-fence-specs.pdf" 
              className="flex items-center px-6 py-3 bg-white text-[#1e293b] rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Download size={18} className="ml-2" />
              المواصفات الفنية
            </Link>
            <Link 
              href="/downloads/border-fence-installation.pdf" 
              className="flex items-center px-6 py-3 bg-[#1576ae] text-white rounded-lg font-medium hover:bg-[#1576ae]/90 transition-colors"
            >
              <Download size={18} className="ml-2" />
              دليل التركيب
            </Link>
          </div>
        </div>
      </section>

      {/* Component Detail Modal */}
      {selectedComponent && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">{selectedComponent.name}</h3>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div 
                    className="relative h-64 md:h-80 bg-gray-100 rounded-lg cursor-pointer"
                    onClick={() => openImageModal(selectedComponent.imageUrl)}
                  >
                    <Image
                      src={selectedComponent.imageUrl || '/placeholder-image.jpg'}
                      alt={selectedComponent.name}
                      fill
                      className="object-contain p-4"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/20 transition-opacity">
                      <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-lg text-sm">
                        انقر لتكبير الصورة
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  {selectedComponent.specs ? (
                    <>
                      <h4 className="text-lg font-semibold mb-3 text-[#1576ae]">الوصف</h4>
                      <p className="text-gray-700 mb-6">{selectedComponent.specs.description}</p>
                      
                      <h4 className="text-lg font-semibold mb-3 text-[#1576ae]">المواصفات</h4>
                      <ul className="space-y-3">
                        {selectedComponent.specs.specifications.map((spec, index) => (
                          <li key={index} className="border-b border-gray-100 pb-2">
                            <span className="font-medium">{spec.label}: </span>
                            <span className="text-gray-700">{spec.value}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <div className="text-gray-500 italic">
                      المواصفات التفصيلية غير متوفرة لهذا المكون. يرجى الاتصال بفريق المبيعات للحصول على مزيد من المعلومات.
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t bg-gray-50 flex justify-end">
              <button 
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                إغلاق
              </button>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 cursor-zoom-out"
          onClick={closeImageModal}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged component image"
              width={1000}
              height={800}
              className="object-contain max-h-[90vh]"
            />
            <button 
              onClick={closeImageModal}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
            >
              <X size={24} className="text-white" />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
