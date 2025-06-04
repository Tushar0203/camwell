"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Package, ShieldCheck, Tags, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

// ProductCard component for displaying individual products
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

  return (
    <Card 
      className="premium-card shine-effect overflow-hidden group hover:cursor-pointer border-0 shadow-lg h-full w-full max-w-md"
      onClick={handleClick}
    >
      <div className={`w-full h-58 relative overflow-hidden ${name === "India's New Border Fence" ? 'bg-[url("/products/image.png")] bg-cover bg-center' : name === "Fence Swing Gate" ? 'bg-[url("/products/image2.png")] bg-cover bg-center' : ''}`}>
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

// Main ProductsOverview component
const ProductsOverview = () => {
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

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Security Solutions for Every Need</h2>
          <div className="w-24 h-1 bg-industrial-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of high-quality fencing and security products designed to meet various security requirements.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-7xl px-4">
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
  );
};

export default ProductsOverview;
