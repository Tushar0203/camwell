"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GaugeCircle, Cog, AlertTriangle, FileText } from 'lucide-react';

// Default English dictionary
const defaultDictionary = {
  sectionTitle: "Our Distinguished Partners",
  sectionDescription: "We're proud to work with leading organizations across various industries.",
  badge: "TRUSTED BY INDUSTRY LEADERS",
  clientsList: [
    {
      name: 'CPWD',
      description: 'Central Public Works Department'
    },
    {
      name: 'Ministry of Defense',
      description: 'Government of India'
    },
    {
      name: 'BSF',
      description: 'Border Security Force'
    },
    {
      name: 'NBCC',
      description: 'A Navratna CPSE'
    },
    {
      name: 'Indian Railways',
      description: 'Ministry of Railways'
    },
    {
      name: 'Border Roads Organisation',
      description: 'Ministry of Defense'
    }
  ],
  cta: {
    title: "Ready to Secure Your Perimeter?",
    description: "Experience the same level of security trusted by India's elite institutions",
    button: "Contact Us"
  }
};

// Client logos mapping - these won't be translated, just the text
const clientLogos: Record<string, string> = {
  'CPWD': '/clients/cpwd.png',
  'Ministry of Defense': '/clients/rnd.png',
  'BSF': '/clients/bsf.png',
  'NBCC': '/clients/railways.png',
  'Indian Railways': '/clients/railways.png',
  'Border Roads Organisation': '/clients/railways.png',
  // Arabic versions (using English keys for simplicity)
  'الأشغال العامة': '/clients/cpwd.png',
  'وزارة الدفاع': '/clients/rnd.png',
  'قوات أمن الحدود': '/clients/bsf.png',
  'شركة البناء الوطنية': '/clients/railways.png',
  'سكك حديد الهند': '/clients/railways.png',
  'منظمة طرق الحدود': '/clients/railways.png'
};

const ClientCard = ({ client, index }: { 
  client: { name: string; description: string; },
  index: number 
}) => {
  // Get logo based on client name or use a default
  const logo = clientLogos[client.name] || '/clients/cpwd.png';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="card-industrial tech-corner group relative h-full">
        {/* Safety stripe accent */}
        <div className="absolute top-0 left-0 h-2 w-full safety-stripes"></div>
        
        <CardContent className="p-8 pt-10 flex flex-col items-center justify-between h-full industrial-border">
          {/* Logo Container with enhanced styling */}
          <div className="relative w-32 h-32 mb-6">
            {/* Dial gauge background */}
            <div className="absolute inset-[-10px] border-4 border-steel-300 rounded-full">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3 w-1 bg-steel-600"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 h-3 w-1 bg-steel-600"></div>
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1 w-3 bg-steel-600"></div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 h-1 w-3 bg-steel-600"></div>
            </div>
            
            {/* Logo Image */}
            <div className="relative w-full h-full p-4">
              <Image
                src={logo}
                alt={client.name}
                fill
                className="object-contain drop-shadow-md"
                sizes="(max-width: 128px) 100vw, 128px"
              />
            </div>
          </div>
          
          <div className="w-full text-center relative z-10 mt-3">
            <div className="id-label mb-2 mx-auto">ID-{index+100}</div>
            <h3 className="text-xl font-bold text-steel-800 mb-2 group-hover:text-industrial-blue transition-colors duration-300">
              {client.name}
            </h3>
            <div className="gauge-meter mb-3 w-3/4 mx-auto"></div>
            <p className="text-sm text-steel-600 line-clamp-2 group-hover:text-steel-700 transition-colors duration-300 tech-specs">
              {client.description}
            </p>
          </div>

          {/* Industrial design elements */}
          <div className="absolute bottom-3 right-3 opacity-20 rotate-gear">
            <Cog size={24} className="text-steel-500" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Clients = ({ dictionary }: { dictionary?: typeof defaultDictionary }) => {
  const router = useRouter();
  const dict = dictionary || defaultDictionary;
  
  // Ensure CTA is available, using default if not provided
  const cta = dict.cta || defaultDictionary.cta;
  
  // Get clients list from dictionary or use default
  const clientsList = dict.clientsList || defaultDictionary.clientsList;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Blueprint background */}
      <div className="absolute inset-0 bg-blueprint opacity-30" />
      
      {/* Industrial ruler at top */}
      <div className="industrial-ruler mx-auto w-3/4 max-w-4xl mb-12"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 px-4"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <AlertTriangle size={16} className="text-industrial-blue" />
            <span className="inline-block px-3 py-1.5 bg-industrial-blue text-white text-sm font-medium tracking-wide">
              {dict.badge}
            </span>
            <AlertTriangle size={16} className="text-industrial-blue" />
          </div>
          
          <div className="relative">
            <div className="absolute top-0 right-0 flex items-center gap-1 text-xs text-steel-500 machine-numbers">
              REF.82914
              <FileText size={12} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-steel-800 mb-4 tracking-tight">
              {dict.sectionTitle}
            </h2>
          </div>
          
          <div className="w-1/2 mx-auto relative mb-6">
            <div className="w-full h-1 bg-industrial-blue"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-industrial-blue"></div>
          </div>
          
          <p className={cn(
            "text-steel-600 max-w-[280px] xs:max-w-md md:max-w-2xl mx-auto",
            "text-base md:text-lg leading-relaxed",
            "px-4 sm:px-6 md:px-0"
          )}>
            {dict.sectionDescription}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {clientsList.map((client, index) => (
            <ClientCard key={client.name} client={client} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="w-full mx-auto">
            <Card className="bg-steel-800 border-0 shadow-xl overflow-hidden relative">
              {/* Corner cut design */}
              <div className="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-steel-700 border-r-transparent"></div>
              <div className="absolute bottom-0 left-0 border-b-[40px] border-l-[40px] border-b-steel-700 border-l-transparent"></div>
              
              {/* Warning diagonal stripes on the side */}
              <div className="absolute left-0 top-0 h-full w-6 safety-stripes"></div>
              
              <CardContent className="p-8 sm:p-10 pl-12 relative">
                <div className="flex items-center gap-2 mb-2">
                  <GaugeCircle size={20} className="text-steel-400" />
                  <span className="text-steel-400 text-sm font-mono">SECURITY ALERT</span>
                </div>
                
                <div className="relative flex flex-col items-center w-full gap-6 z-10">
                  <div className="text-center w-full">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {cta.title}
                    </h3>
                    <div className="machine-numbers text-steel-300 mb-3">[REF:PERIMETER-SEC-1]</div>
                    <p className="text-steel-300 border-l-2 border-steel-600 pl-3">
                      {cta.description}
                    </p>
                  </div>
                  
                  <div className="industrial-ruler w-full my-2"></div>
                  
                  <Button 
                    variant="industrial"
                    className="whitespace-nowrap px-8 py-3 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer mt-2 shadow-industrial-lg"
                    onClick={() => router.push('/contact')}
                  >
                    {cta.button}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
      
      {/* Industrial ruler at bottom */}
      <div className="industrial-ruler mx-auto w-3/4 max-w-4xl mt-12"></div>
    </section>
  );
};

export default Clients;











