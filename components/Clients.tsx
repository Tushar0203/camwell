"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Locale } from '@/lib/dictionary';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
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
  'NBCC': '/clients/nbcc.png',
  'Indian Railways': '/clients/railways.png',
  'Border Roads Organisation': '/clients/bro.png',
  // Arabic versions (using English keys for simplicity)
  'الأشغال العامة': '/clients/cpwd.png',
  'وزارة الدفاع': '/clients/rnd.png',
  'قوات أمن الحدود': '/clients/bsf.png',
  'شركة البناء الوطنية': '/clients/nbcc.png',
  'سكك حديد الهند': '/clients/railways.png',
  'منظمة طرق الحدود': '/clients/bro.png'
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
        <div className="absolute top-0 left-0 h-2 w-full safety-stripes"></div>

        <CardContent className="p-8 pt-10 flex flex-col items-center justify-between h-full industrial-border">
         <div 
          className="relative w-44 h-44 mb-6 overflow-hidden" 
          style={{ borderRadius: 0 }}
        >
          <Image
            src="/images/Camwell-Logo.png"
            alt={client.name}
            fill
            className="object-contain"
            sizes="176px"
          />
        </div>
          
          <div className="w-full text-center relative z-10 mt-3">
            <div className="id-label mb-2 mx-auto">ID-{index+100}</div>
            <h3 className="text-xl font-bold text-steel-800 mb-2 group-hover:text-industrial-blue transition-colors duration-300">
              {client.name}
            </h3>
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
  const params = useParams();
  const dict = dictionary || defaultDictionary;
  const lang = params?.lang as Locale || 'en';
  const isRTL = lang === 'ar';
  // Choose the appropriate arrow based on direction
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  
  // Ensure CTA is available, using default if not provided
  const cta = dict.cta || defaultDictionary.cta;
  
  // Get clients list from dictionary or use default
  const clientsList = dict.clientsList || defaultDictionary.clientsList;

  return (
  <section className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 md:mb-20 px-4"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="inline-block px-3 py-1.5 bg-industrial-blue text-white text-sm font-medium tracking-wide">
            {dict.badge}
          </span>
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
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-industrial-blue rounded-full"></div>
        </div>

        <p
          className={cn(
            "text-steel-600 max-w-[280px] xs:max-w-md md:max-w-2xl mx-auto",
            "text-base md:text-lg leading-relaxed",
            "px-4 sm:px-6 md:px-0"
          )}
        >
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
            {/* CTA with industrial style */}
            <div className="mt-16 max-w-5xl mx-auto border border-steel-300 bg-steel-50">
              {/* Top technical bar */}
              <div className="flex justify-between items-center px-4 py-2 bg-steel-100 border-b border-steel-300 tech-specs text-xs">
                <span className="text-steel-600">INQUIRY TYPE: CONSULTATION</span>
                <span className="text-industrial-blue font-mono">REF: CS-1001-A</span>
              </div>

              {/* Main content with industrial styling */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-16 bg-industrial-blue"></div>
                  <div>
                    <h3 className="text-xl font-bold text-steel-800 uppercase">
                      {isRTL ? "جاهزون لتأمين موقعك؟" : "Ready to secure your site?"}
                    </h3>
                    <p className="text-steel-600 mt-2">
                      {isRTL
                        ? "اتصل بنا اليوم للحصول على استشارة مجانية"
                        : "Contact us today for a free consultation and technical assessment."}
                    </p>
                  </div>
                </div>
                <div className="ml-0 md:ml-4">
                  <Button
                    onClick={() => router.push(`/${lang}/contact`)}
                    className={`bg-[#FFD600] hover:bg-[#FFE44D] text-[#2d2d2d] font-bold px-6 py-4 text-base tracking-wide border-2 border-[#2d2d2d] shadow-[4px_4px_0px_0px_rgba(45,45,45,1)] transition-all hover:shadow-[2px_2px_0px_0px_rgba(45,45,45,1)] flex items-center gap-2 cursor-pointer ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span className="uppercase">
                      {isRTL ? "تواصل مع فريق الحلول المخصصة" : "Contact Our Team"}
                    </span>
                    <ArrowIcon className="h-5 w-5" strokeWidth={2.5} />
                  </Button>
                </div>
              </div>

              {/* Bottom safety stripe */}
              <div className="h-2 safety-stripes"></div>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  </section>
);
 
};

export default Clients;