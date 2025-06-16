"use client";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Default English dictionary
const defaultDictionary = {
  sectionTitle: "Our Trusted Clients",
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
      <Card className="group relative overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 h-full">
        <CardContent className="p-8 flex flex-col items-center justify-between h-full">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F75B5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          
          {/* Logo Container with enhanced styling */}
          <div className="relative w-32 h-32 mb-6">
            {/* Background circle with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-full transform group-hover:scale-110 transition-all duration-300" />
            
            {/* Decorative rings */}
            <div className="absolute inset-[-4px] border-2 border-dashed border-[#1F75B5]/20 rounded-full animate-spin-slow" />
            
            {/* Logo Image */}
            <div className="relative w-full h-full p-4 transform group-hover:scale-105 transition-transform duration-300">
              <Image
                src={logo}
                alt={client.name}
                fill
                className="object-contain drop-shadow-md"
                sizes="(max-width: 128px) 100vw, 128px"
              />
            </div>
          </div>
          
          <div className="text-center relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1576ae] transition-colors duration-300">
              {client.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 group-hover:text-gray-800 transition-colors duration-300">
              {client.description}
            </p>
          </div>

          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#1F75B5]/10 to-transparent transform rotate-45 translate-x-8 -translate-y-8" />
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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 px-4"
        >
          <span className="inline-block px-3 py-1.5 bg-blue-50 text-[#1576ae] rounded-full text-sm font-medium tracking-wide mb-6">
            {dict.badge}
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {dict.sectionTitle}
          </h2>
          
          <div className="w-16 md:w-20 h-1 bg-[#1576ae] mx-auto mb-6 rounded-full" />
          
          <p className={cn(
            "text-gray-600 max-w-[280px] xs:max-w-md md:max-w-2xl mx-auto",
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
            <Card className="bg-gradient-to-r from-[#1576ae] to-[#1576ae] border-0 shadow-xl overflow-hidden">
              <CardContent className="p-8 sm:p-10 relative">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
                
                <div className="relative flex flex-col items-center w-full gap-6">
                  <div className="text-center w-full">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {cta.title}
                    </h3>
                    <p className="text-blue-50">
                      {cta.description}
                    </p>
                  </div>
                  <button 
                    className="whitespace-nowrap px-8 py-3 bg-white text-[#1F75B5] rounded-lg font-semibold 
                    hover:bg-blue-50 hover:scale-105 active:scale-95 
                    transition-all duration-200 shadow-lg cursor-pointer mt-4"
                    onClick={() => router.push('/contact')}
                  >
                    {cta.button}
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;











