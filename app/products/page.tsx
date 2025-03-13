'use client';
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Package, ShieldCheck, Zap, Tags, Truck, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

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
      
      <div className={`bg-gradient-to-r ${gradientColor} w-full h-48 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
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
          className="w-full bg-[#1F75B5] text-white hover:bg-industrial-blue/90 group-hover:bg-industrial-blue group-hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer"
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
    {
      name: 'Swing Gates',
      description: 'Secure and reliable access control solutions for any perimeter.',
      features: [
        'Smooth operation mechanism',
        'Customizable dimensions',
        'Compatible with automation systems',
        'Industrial-grade hinges'
      ],
      icon: <Truck size={36} strokeWidth={1.5} />
    },
    {
      name: 'Sliding Gates',
      description: 'Space-efficient security solutions for controlled entry points.',
      features: [
        'Sturdy construction',
        'Low maintenance design',
        'Smooth tracking system',
        'Manual and automatic options'
      ],
      icon: <ShieldCheck size={36} strokeWidth={1.5} />
    },
    {
      name: 'Security Spikes',
      description: 'Additional security features for fence tops to prevent intrusion.',
      features: [
        'Sharp, deterrent design',
        'Weather-resistant materials',
        'Easy installation on existing fences',
        'Various length options'
      ],
      icon: <Zap size={36} strokeWidth={1.5} />
    },
    {
      name: 'Razor Wire',
      description: 'Maximum security solution for high-risk areas and facilities.',
      features: [
        'High tensile steel core',
        'Sharp razor-edged barbs',
        'Galvanized finish for longevity',
        'Various configurations available'
      ],
      icon: <Package size={36} strokeWidth={1.5} />
    }
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
        {/* Dynamic background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F75B5] to-[#1F75B5]">
          {/* Animated security mesh pattern */}
          <div className="absolute inset-0 opacity-10" 
               style={{
                 backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.25'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
               }}
          ></div>
        </div>
        
        {/* Moving security particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="security-particle absolute h-2 w-2 bg-blue-300 rounded-full opacity-70" style={{top: '15%', left: '10%', animation: 'float 8s infinite'}}></div>
          <div className="security-particle absolute h-3 w-3 bg-indigo-300 rounded-full opacity-60" style={{top: '25%', left: '85%', animation: 'float 12s infinite'}}></div>
          <div className="security-particle absolute h-2 w-2 bg-white rounded-full opacity-50" style={{top: '65%', left: '30%', animation: 'float 10s infinite'}}></div>
          <div className="security-particle absolute h-4 w-4 bg-blue-200 rounded-full opacity-40" style={{top: '70%', left: '80%', animation: 'float 15s infinite'}}></div>
          <div className="security-particle absolute h-3 w-3 bg-indigo-200 rounded-full opacity-30" style={{top: '40%', left: '60%', animation: 'float 13s infinite'}}></div>
        </div>
        
        {/* Shield icon backdrop */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Shield size={600} strokeWidth={0.5} className="text-white" />
        </div>
        
        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-xl animate-fade-down">
              <span className="inline-block relative">
                Secure Your Perimeter
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-300 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
              </span>
            </h1>
            
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-300"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-blue-100 animate-fade-down" style={{animationDelay: "0.2s"}}>
              With Premium Security Products
            </h2>
            
            <p className="text-xl text-blue-50 max-w-3xl mx-auto mb-12 animate-fade-up opacity-90" style={{animationDelay: "0.4s", lineHeight: "1.6"}}>
              Explore our comprehensive range of high-quality security fencing solutions
              engineered for maximum protection, durability, and performance in any environment.
            </p>
            
            <div className="flex flex-wrap justify-center gap-5 animate-fade-up" style={{animationDelay: "0.6s"}}>
              <Button 
                className="group 2xl glow bg-white px-8 py-8 bg-gradient-to-r from-[#1a5d90] to-[#1a5d90] text-white text-[18px] cursor-pointer"
                onClick={scrollToProducts}
              >
                <span>Browse Products</span>
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex justify-center gap-8 mt-16 opacity-85">
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
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-r from-[#1F75B5] to-[#1F75B5] backdrop-blur-sm"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id='products'>
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
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl card-3d h-80 md:h-96 bg-gradient-to-br from-blue-300 to-[#1F75B5] relative">
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
