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

// Custom ProductCard component with improved design
const ProductCard = ({ name, description, features, icon }: { 
  name: string; 
  description: string; 
  features: string[];
  icon: React.ReactNode;
}) => {
  const router = useRouter();
  
  const handleClick = () => {
    if (name === "India's New Border Fence") {
      router.push('/products/border-fence');
    }
    if (name === "Fence Swing Gate") {
      router.push('/products/fence-swing-gate');
    }
  };

  const randomColors = [
    'from-blue-500 to-cyan-400',
    'from-indigo-500 to-purple-400',
    'from-orange-500 to-amber-400',
    'from-emerald-500 to-green-400',
    'from-rose-500 to-pink-400',
    'from-violet-500 to-purple-400'
  ];
  
  // Get a consistent but random color for each product based on its name
  const colorIndex = Math.abs(name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % randomColors.length;
  const gradientColor = randomColors[colorIndex];

  return (
    <Card 
      className="premium-card shine-effect overflow-hidden group hover:cursor-pointer border-0 shadow-lg h-full"
      onClick={handleClick}
      style={{
        "--accent-color-start": "var(--tw-gradient-from)",
        "--accent-color-end": "var(--tw-gradient-to)",
        "--icon-bg-light": "rgba(255, 255, 255, 0.1)",
        "--icon-bg-dark": "rgba(255, 255, 255, 0.05)",
        "--icon-color": "#fff"
      } as React.CSSProperties}>
      
      <div className={`w-full h-58 relative overflow-hidden ${name === "India's New Border Fence" ? 'bg-[url("/products/image.png")] bg-cover bg-center' : name === "Fence Swing Gate" ? 'bg-[url("/products/image2.png")] bg-cover bg-center' : `bg-gradient-to-r ${gradientColor}`}`}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-white">
          <div className="card-icon-wrapper bg-white/20 backdrop-blur-md rounded-full p-4 mb-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-1 text-center">{name}</h3>
        </div>
      </div>
      
      <CardContent className="p-6">
        <p className="text-gray-600 mb-5">{description}</p>
        
        <h4 className="font-semibold text-industrial-blue mb-3 flex items-center gap-2">
          <ShieldCheck size={18} />
          Key Features
        </h4>
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-industrial-blue mt-1">
                <Tags size={14} />
              </span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          variant="default" 
          className="w-full bg-[#1576ae] text-white hover:bg-industrial-blue/90 group-hover:bg-industrial-blue group-hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer"
        >
          <span>Know more</span>
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const Products = () => {
  const products = [
    {
      name: "India's New Border Fence",
      description: 'Premium quality welded mesh panels for high-security applications.',
      features: [
        'High tensile steel construction',
        'Anti-corrosion coating',
        'Multiple mesh sizes available',
        'Easy installation'
      ],
      icon: <Package size={36} strokeWidth={1.5} />
    },
    {
      name: 'Fence Swing Gate',
      description: 'Robust posts designed for optimal support, connectivity and longevity.',
      features: [
        'Heavy-duty galvanized steel',
        'Various height options',
        'Compatible with all fencing systems',
        'Weather-resistant coating'
      ],
      icon: <Zap size={36} strokeWidth={1.5} />
    },
   
  ];

  const productsRef = useRef<HTMLDivElement>(null);

  // Function to handle smooth scrolling to products section
  const scrollToProducts = () => {
    if (productsRef.current) {
      const yOffset = -20; // 20px offset to ensure heading is visible
      const element = productsRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      
      {/* Enhanced Hero Section with 3D elements and animated background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/fence-3.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-repeat bg-[length:200px_200px]"></div>
        </div>
        
        {/* Shield icon backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Shield size={600} strokeWidth={0.5} className="text-white" />
        </motion.div>
        
        {/* Content container */}
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
              <span className="text-blue-100">Premium Security Solutions</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
            >
              <span className="inline-block">
                Secure Your Perimeter
                <span className="block text-blue-200 decoration-blue-400/30 decoration-4 underline-offset-8">
                  With Excellence
                </span>
              </span>
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="flex justify-center mb-6"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-300"></div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-blue-50 max-w-3xl mx-auto mb-12 opacity-90"
              style={{lineHeight: "1.6"}}
            >
              Explore our comprehensive range of high-quality security fencing solutions
              engineered for maximum protection, durability, and performance in any environment.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-5"
            >
              <Button 
                className="group 2xl glow bg-white opacity-80 px-8 py-8 bg-gradient-to-r from-[#1a5d90] to-[#1a5d90] text-white text-[18px] cursor-pointer"
                onClick={scrollToProducts}
              >
                <span>Browse Products</span>
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center gap-8 mt-16 opacity-85"
            >
              <div className="flex items-center text-blue-100 gap-2">
                <ShieldCheck size={18} />
                <span className="text-sm font-medium">Certified Quality</span>
              </div>
              <div className="flex items-center text-blue-100 gap-2">
                <Truck size={18} />
                <span className="text-sm font-medium">Nationwide Delivery</span>
              </div>
              <div className="flex items-center text-blue-100 gap-2">
                <Zap size={18} />
                <span className="text-sm font-medium">Expert Installation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4" ref={productsRef}>Security Solutions for Every Need</h2>
            <div className="w-24 h-1 bg-industrial-blue mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of high-quality fencing and security products designed to meet various security requirements.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-7xl px-4" id='products'>
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                features={product.features}
                icon={product.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section with improved visuals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-charcoal mb-4">Custom Security Solutions</h2>
              <div className="w-16 h-1 bg-industrial-blue mb-6"></div>
              <p className="text-gray-700 mb-4 text-lg">
                Don&apos;t see exactly what you need? We specialize in creating custom security solutions tailored to your specific requirements.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-industrial-blue/10 p-2 rounded-full">
                    <ShieldCheck className="text-industrial-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-industrial-blue">Expert Consultation</h3>
                    <p className="text-gray-600">Our team of security experts will work with you to assess your needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-industrial-blue/10 p-2 rounded-full">
                    <Zap className="text-industrial-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-industrial-blue">Tailored Manufacturing</h3>
                    <p className="text-gray-600">Custom-built products designed to your specifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-industrial-blue/10 p-2 rounded-full">
                    <Truck className="text-industrial-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-industrial-blue">Professional Installation</h3>
                    <p className="text-gray-600">Expert installation team to ensure perfect implementation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl card-3d h-80 md:h-96 bg-gradient-to-br from-blue-300 to-[#1576ae] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Built to Your Specifications</h3>
                  <p className="text-lg text-blue-100">Security solutions as unique as your needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
